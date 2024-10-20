import React from 'react';
import { useNavigate } from 'react-router-dom';

function TaskVibeSelection({ setVibe }) {
  const navigate = useNavigate();

  const handleVibeSelect = (vibe) => {
    setVibe(vibe);
    navigate('/tasks');
  };

  return (
    <div className="vibe-selection-container centered-content">
      <h1 className="vibe-header">✨ Select Your Vibe ✨</h1> 
      <button onClick={() => handleVibeSelect('relaxed')}>Relaxed</button>
      <button onClick={() => handleVibeSelect('productive')}>Productive</button>
      <button onClick={() => handleVibeSelect('adventurous')}>Adventurous</button>
    </div>
  );
}

export default TaskVibeSelection;



