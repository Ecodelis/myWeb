import React from 'react';

const ActivitiesDisplay = ({ type, title, description, startDate, endDate, numPeople }) => {
  return (
    <div className="w-full flex mb-4 bg-[#373D4D]">
      {/* Left side: Picture */}
      <div className="flex-shrink-0 w-[25%]">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
          <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
        </div>
      </div>

      {/* Right side: Content */}
      <div className="flex-grow flex flex-col justify-between pb-4 text-white font-light">
        <h2 className="subtitle pl-5 pt-1 pb-1 bg-[#1B1F27]">{type}</h2>
        <div className="flex-grow">
          <h2 className="heading pl-5 m-0">{title}</h2>
          <p className="description pl-5">{description}</p>
        </div>
        {/* Bottom left and right corner text */}
        <div className="tiny pl-5 pr-5 flex justify-between">
          <span>{startDate} - {endDate}</span>
          <span>{numPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesDisplay;