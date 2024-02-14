import React, { useState } from 'react';

export default function SeatAllocationDialog({ categories, allocatedSeats, allocateSeats }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAllocateSeats = () => {
    allocateSeats(selectedCategory);
  };


  return (
    <div className="dialog-container">
      <h2>Select Category:</h2>
      <select value={selectedCategory} onChange={handleCategorySelect}>
        <option value="">Select Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <button onClick={handleAllocateSeats}>Allocate</button>
      <p>Allocated Seats: {allocatedSeats.join(', ')}</p>
    </div>
  );
}
