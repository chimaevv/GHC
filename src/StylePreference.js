// src/StylePreference.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function StylePreference({ gender, setStyle }) {
  const navigate = useNavigate();

  const handleStyleSelect = (style) => {
    setStyle(style);
    navigate('/dashboard');
  };

  return (
    <div>
      <h1>Select Your Style Preference</h1>
      <p>Gender Selected: {gender}</p>
      <button onClick={() => handleStyleSelect('casual')}>Casual</button>
      <button onClick={() => handleStyleSelect('formal')}>Formal</button>
      <button onClick={() => handleStyleSelect('sporty')}>Sporty</button>
      {/* Add more style options as needed */}
    </div>
  );
}

export default StylePreference;