import React from 'react';
import './Avatar.css'; // Import the CSS file

function Avatar() {
  return (
    <div className="avatar-container">
      <img 
        src="https://www.pngall.com/wp-content/uploads/14/Sanrio-PNG-Cutout.png" 
        alt="Sanrio Avatar" 
        className="avatar-image" 
      />
    </div>
  );
}

export default Avatar;
