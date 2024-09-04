import React,{useState,useEffect} from 'react';
import './EventList.css';

const EventList = () => {
  const [event,setEvent] = useState([])

  useEffect(() => {
   const fetchEvents = async () => {
     try {
       const response = await fetch('http://localhost:5050/ngo/events', {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
         },
         credentials: 'include',
       });

       if (response.ok) {
         const data = await response.json();
         setEvent(data.events);
         // console.log('dashboard data',data)
       } else {
         console.error('Failed to fetch events');
       }
     } catch (error) {
       console.error('Error fetching events:', error);
     }
   };

   fetchEvents();
 }, []);

  return (
    <div className="event-list">
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {event.map((event) => (
            <tr key={event._id}>
              <td>{event.eventName}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>{event.category}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventList;
