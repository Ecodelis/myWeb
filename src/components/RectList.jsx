import React, { useState, useEffect } from 'react';
import ActivitiesDisplay from './ActivitiesDisplay.jsx';
import ExperienceDisplay from './ExperienceDisplay.jsx';

const RectList = ({ headerTitle, button, content, displayComponentType }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleContent = showAll ? content : content.slice(0, 3);

  // debugging logs
  useEffect(() => {
    console.log('Rendering RectList component');
    console.log('Current showAll state:', showAll);
    console.log('Content:', content);
    console.log('DisplayComponent type:', displayComponentType);
  }, [showAll, content, displayComponentType]);

  function toggleShowAll() {
    console.log('Show All button clicked');
    setShowAll(prevShowAll => !prevShowAll);
  }

  // Determine which component to display based on displayComponentType
  const DisplayComponent = displayComponentType == 1 ? ActivitiesDisplay : ExperienceDisplay;

  return (
    <div className="carousel-container flex flex-col items-center py-12 px-10 max-w-7xl mx-auto box-border">
      <h1 className="text-[1rem] mb-10 text-white text-left w-full relative">
        {headerTitle}
        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white font-light"></span>
      </h1>
      
      <div className="w-full bg-transparent mb-8 flex flex-col gap-4 items-center">
        {/* Render the appropriate display component for each item */}
        {visibleContent.map((item, index) => (
          <DisplayComponent key={index} {...item} />
        ))}
      </div>
      
      <button onClick={toggleShowAll} className="text-white bg-[#373D4C] hover:bg-[#2c3342] px-4 py-2 w-60 font-regular">
        {showAll ? `SHOW LESS` : `VIEW ALL ${button.toUpperCase()}`}
      </button>
    </div>
  );
};

export default RectList;