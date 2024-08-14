// ColorChanger.tsx
import React, { useState } from 'react';

const colors = ['red', 'green', 'blue']; // Example colors

const ColorChanger: React.FC = () => {
  const [currentColor, setCurrentColor] = useState(0);

  const handleClick = () => {
    setCurrentColor((prev) => (prev + 1) % colors.length);
  };

  return (
    <div>
      <div data-testid="color-box" style={{ backgroundColor: colors[currentColor], width: '100px', height: '100px' }}></div>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default ColorChanger;
