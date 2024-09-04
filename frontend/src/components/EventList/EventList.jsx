import React,{useState} from 'react';
import './EventList.css';

const EventList = async() => {
  // const [event,setEvent] = useState({})
    const response = await fetch('http://localhost:5050/ngo/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    console.log("getting data from enentlist",response)
      // setEvent(response.json())
  const events = [
    {
      id: 1,
      name: 'Beach Cleanup',
      date: '2024-09-10',
      time: '08:00 AM',
      location: 'Miami Beach, FL',
      importance: 'High',
    },
    // Additional events
  ];

  return (
    <div className="event-list">
      <h3>Manage Events</h3>
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Location</th>
            <th>Importance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>{event.location}</td>
              <td>{event.importance}</td>
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
