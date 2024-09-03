import { useNavigate } from "react-router-dom";
import { toast,Slide } from 'react-toastify';

const logoutHandle=()=>{
    const navigate = useNavigate()
    // window.location.href = "http://localhost:5050/logout";
    // <Link to="http://localhost:5050/logout"></Link>
    const handlelogout = async()=>{
        try {
            const response = await fetch('http://localhost:5050/logout', {
                method: 'GET',
            });

            if(response.ok){
                toast.success('Logout succesfull', {
                      position: "top-right",
                      autoClose: 10000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                      theme: "light",
                      transition: Slide,
                })
                navigate('/login')
            }else{
                toast.error("logout failed", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: false,
                      progress: undefined,
                      theme: "light",
                      transition: Slide,
                });
            }    

        } catch (error) {
            console.error("Error during logout:", error);
            toast.error("An error occurred during logout", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
    }
    return handlelogout;
} 

export default logoutHandle;