import React from 'react';
import './ColorBends.css';

const ColorBends = ({ colors = ['#1E5DDb', '#FBC02D', '#28a745', '#ff6b00'] }) => {
  const gradientStyle = {
    background: `linear-gradient(-45deg, ${colors.join(', ')})`,
    backgroundSize: '400% 400%',
  };

  return (
    <div className="absolute inset-0 w-full h-full color-bends-animate opacity-50 bg-blend-multiply mix-blend-multiply pointer-events-none" style={gradientStyle} />
  );
};

export default ColorBends;
