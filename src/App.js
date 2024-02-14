import React, { useState } from 'react';
import './App.css';
import SeatBooking from './Seatbooking';


const categories = ['Male', 'Female', 'Special Needs', 'Blocked',"Open"];

function App() {
  const [showDialog, setShowDialog] = useState(false);
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [allocatedSeats, setAllocatedSeats] = useState({});

  const handleAllocateSeats = () => {
    setShowDialog(true);
  };

  const allocateSeats = (selectedCategory) => {
    // Implement your logic to allocate seats to the selected category
    console.log('Allocating seats to category:', selectedCategory);
    setAllocatedSeats({
      ...allocatedSeats,
      [selectedCategory]: [1, 2, 3], // Example: Replace with the actual allocated seats
    });
    setShowDialog(false);
  };

  return (

    <div className="App">
      <h1>Seat Booking App</h1>
     
      <SeatBooking />
     
       <div className="legend">
        <h3>Legend:</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
