import React from 'react'
// import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import { Router } from 'react-router-dom'

const Home = () => {
  return (
    <Router>
        <Navbar/>
        {/* <Header/> */}
    </Router>
  )
}

export default Home