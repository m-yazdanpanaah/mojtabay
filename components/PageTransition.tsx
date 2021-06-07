import React from 'react';

const PageTransition: React.FC = () => {
  return (
    <div className="bg-white">
      <div
        className="w-full bg-moonlight"
        style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
      ></div>
    </div>
  );
};

export default PageTransition;
