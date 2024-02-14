// SeatBooking.js
import React, { useState } from 'react';
import './SeatBooking.css';
import ResetButton from './ResetButton'; // Import the ResetButton component

const SeatBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isAllocationMade, setIsAllocationMade] = useState(false);
  const [allocatedSeats, setAllocatedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (isAllocationMade && allocatedSeats.some(seat => seat.seatNumber === seatNumber)) return; // If allocation has been made and seat is allocated, prevent selection    
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const getCategoryColor = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      const allocatedSeat = allocatedSeats.find(seat => seat.seatNumber === seatNumber);
      if (allocatedSeat) {
        return getCategoryColorFromAllocatedSeats(allocatedSeat.category);
      } else {
        switch (selectedCategory) {
          case 'Male':
            return 'blue';
          case 'Female':
            return 'pink';
          case 'Special Needs':
            return 'purple';
          case 'Blocked':
            return 'grey';
          default:
            return '';
        }
      }
    }
    return '';
  };

  const getCategoryColorFromAllocatedSeats = (category) => {
    switch (category) {
      case 'Male':
        return 'blue';
      case 'Female':
        return 'pink';
      case 'Special Needs':
        return 'purple';
      case 'Blocked':
        return 'grey';
      default:
        return '';
    }
  };

  const handleAllocateSeats = () => {
    setIsAllocationMade(true);
    const newAllocatedSeats = selectedSeats.map(seatNumber => ({ seatNumber, category: selectedCategory }));
    setAllocatedSeats([...allocatedSeats, ...newAllocatedSeats]);
    alert('Seats have been allocated!');
  };

  const handleReset = () => {
    setSelectedSeats([]);
    setSelectedCategory('');
    setIsAllocationMade(false);
    setAllocatedSeats([]);
  };

  const HandleDriver = () => {
    alert("Can't select driver seat");
  };

  return (
    <>
      <div>Seatbooking</div>
      <div className='main-container'>
        <div className='driver-seat' onClick={HandleDriver}>D</div>
        <div className='main'>
          <div className='row'>
            {[...Array(13)].map((_, index) => (
              <div key={index} className={`seat ${selectedSeats.includes(index + 1) ? 'selected' : ''} ${getCategoryColor(index + 1)}`} onClick={() => handleSeatClick(index + 1)}>{index + 1}</div>
            ))}
          </div>
          {/* Additional rows of seats... */}
          <div className='row'>
            {/* Second row of seats */}
            {[...Array(13)].map((_, index) => (
              <div key={index} className={`seat ${selectedSeats.includes(index + 14) ? 'selected' : ''} ${getCategoryColor(index + 14)}`} onClick={() => handleSeatClick(index + 14)}>{index + 14}</div>
            ))}
          </div>
          <div className='row'>
            {/* Third row of seats */}
            {[...Array(13)].map((_, index) => (
              <div key={index} className={`seat ${selectedSeats.includes(index + 27) ? 'selected' : ''} ${getCategoryColor(index + 27)}`} onClick={() => handleSeatClick(index + 27)}>{index + 27}</div>
            ))}
          </div>
          <div className='row'>
            {/* Fourth row of seats */}
            {[...Array(13)].map((_, index) => (
              <div key={index} className={`seat ${selectedSeats.includes(index + 40) ? 'selected' : ''} ${getCategoryColor(index + 40)}`} onClick={() => handleSeatClick(index + 40)}>{index + 40}</div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <span>Select Category: </span>
        <select value={selectedCategory} onChange={(e) => handleCategorySelect(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Special Needs">Special Needs</option>
          <option value="Blocked">Blocked</option>
        </select>
      </div>
      <div>
        <button onClick={handleAllocateSeats}>Allocate Seats</button>
        <ResetButton onClick={handleReset} /> {/* Include the ResetButton component */}
      </div>
      <div>Selected Seats: {selectedSeats.join(', ')}</div>
    </>
  );
}

export default SeatBooking;
