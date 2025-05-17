import React from 'react'
import { useState } from 'react';
import clsx from 'clsx';

interface Button3DProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Counter: React.FC<Button3DProps> = ({ children, onClick, className }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onClick?.();
    setTimeout(() => setClicked(false), 150); // reset after animation
  };

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'rounded-full px-8 py-4 font-semibold text-white bg-gradient-to-r from-green-700 to-green-950 shadow-lg transform transition-all duration-150 active:translate-y-[2px] active:shadow-outline',
        
        clicked && 'scale-95',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Counter
