// src/GenderSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function GenderSelection({ setGender }) {
  const navigate = useNavigate();

  const handleGenderSelect = (gender) => {
    setGender(gender);
    navigate('/style');
  };

  return (
    <div>
      <h1>Select Your Gender</h1>
      <button onClick={() => handleGenderSelect('men')}>Men</button>
      <button onClick={() => handleGenderSelect('women')}>Women</button>
      <button onClick={() => handleGenderSelect('unisex')}>Unisex</button>
    </div>
  );
}

export default GenderSelection;