import React, { useState } from 'react';
import SeatDialogBox from './SeatDialogBox';

const categories = ['Male', 'Female', 'Special Needs', 'Blocked'];

export default function AllocateSeats({ onSelectCategory }) {
  const [showDialog, setShowDialog] = useState(false);

  const handleAllocateSeats = () => {
    setShowDialog(true);
  };

  return (
    <>
      <button onClick={handleAllocateSeats}>Allocate Seats</button>
      {showDialog && <SeatDialogBox categories={categories} onSelectCategory={onSelectCategory} />}
    </>
  );
}
