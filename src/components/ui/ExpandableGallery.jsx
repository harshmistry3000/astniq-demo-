import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ExpandableGallery({ images, className = '' }) {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={`flex flex-col md:flex-row h-[500px] md:h-[650px] w-full gap-4 ${className}`}>
      {images.map((item, index) => {
        const isActive = activeItem === index;

        return (
          <motion.div
            key={index}
            layout
            className={`relative overflow-hidden rounded-[32px] cursor-pointer shadow-xl transition-all border-8 border-brand-black ${
              isActive ? 'flex-[4] md:flex-[5] bg-brand-black neo-shadow-red' : 'flex-[1] md:flex-[1] bg-brand-black neo-shadow-black hover:-translate-y-1 hover:neo-shadow-yellow'
            }`}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }} // smooth ease-out curve
            onMouseEnter={() => setActiveItem(index)}
            onClick={() => setActiveItem(index)}
          >
            <img
              src={item.src}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${
                isActive ? 'scale-105' : 'scale-100 opacity-60 hover:opacity-100'
              }`}
            />
            
            {/* Pop-art halftone/gradient Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-300 ${
              isActive ? 'bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent' : 'bg-brand-black/60'
            }`} />

            {/* Content Container (Revealed when active) */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 z-10">
              <motion.div
                initial={false}
                animate={{ 
                  opacity: isActive ? 1 : 0, 
                  y: isActive ? 0 : 30 
                }}
                transition={{ duration: 0.4, delay: isActive ? 0.2 : 0 }}
                className="overflow-hidden mb-2"
                style={{ pointerEvents: isActive ? 'auto' : 'none' }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-yellow text-brand-black mb-6 font-black text-2xl border-4 border-brand-black neo-shadow-black transform -rotate-6">
                  {index + 1}
                </div>
                <h3 className="ubuntu-bold text-brand-white text-3xl md:text-5xl mb-4 tracking-tight leading-tight w-full max-w-xl" style={{ textShadow: '4px 4px 0 #1a56db' }}>
                  {item.title}
                </h3>
                <p className="quicksand-font text-brand-black bg-brand-white p-4 border-4 border-brand-black neo-shadow-black text-lg md:text-xl font-bold max-w-lg hidden md:block">
                  {item.description}
                </p>
              </motion.div>
            </div>
            
            {/* Vertical Numbering for Inactive State */}
            <motion.div
              animate={{ opacity: !isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center md:items-end md:justify-center pb-8 z-0 pointer-events-none"
            >
        <div className="bg-brand-white">
          <span className="text-brand-white ubuntu-bold text-3xl md:text-4xl tracking-widest md:-rotate-90 whitespace-nowrap" style={{ WebkitTextStroke: '2px #0a0a0f', textShadow: '4px 4px 0 #1a56db' }}>
             {isActive ? '' : `0${index + 1}`}
          </span>
        </div>
            </motion.div>

          </motion.div>
        );
      })}
    </div>
  );
}
