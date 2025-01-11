import React, { useState, useEffect } from 'react';
import RectDisplay from './RectDisplay.jsx';

const RectList = ({ headerTitle, projects }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    console.log('Rendering RectList component');
    console.log('Current showAll state:', showAll);
  }, [showAll]);

  function toggleShowAll() {
    console.log('Show All button clicked');
    setShowAll(prevShowAll => !prevShowAll);
  }

  return (
    <div className="carousel-container flex flex-col items-center py-12 px-10 max-w-7xl mx-auto box-border">
      <h1 className="text-[1rem] mb-10 text-white text-left w-full relative">
        {headerTitle}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white"></span>
      </h1>
      
      <div className="w-full bg-transparent mb-8 flex flex-col gap-4 items-center">
        {visibleProjects.map((project, index) => (
          <RectDisplay key={index} {...project} />
        ))}
      </div>
      
      <button onClick={toggleShowAll} className="text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded">
        {showAll ? 'Show Less' : 'Show All'}
      </button>
    </div>
  );
};

export default RectList;