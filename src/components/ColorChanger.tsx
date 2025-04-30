import React, { useState } from 'react';
import './colorChanger.css'; 

const colors = ['red', 'green', 'blue']; 

const ColorChanger: React.FC = () => {
  const [currentColor, setCurrentColor] = useState(0);

  const handleClick = () => {
    setCurrentColor((prev) => (prev + 1) % colors.length);
  };

  return (
    <div className="color-changer">
      <div
        data-testid="color-box"
        className="color-box"
        style={{ backgroundColor: colors[currentColor] }}
      ></div>
      <button className="color-button" onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
