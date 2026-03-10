import React from 'react';

const LiquidEther = () => {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-brand-yellow via-brand-red to-brand-green opacity-30 mix-blend-multiply flex items-center justify-center">
      {/* Fallback pattern since this is a heavy customized WebGL component from React Bits */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at center, #111 2px, transparent 2px)', 
          backgroundSize: '24px 24px' 
        }} 
      />
    </div>
  );
};

export default LiquidEther;
