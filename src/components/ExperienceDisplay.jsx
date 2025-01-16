import React from 'react';

const ExperienceDisplay = ({ type, title, description, responsibilities, startDate, endDate, numPeople }) => {
  return (
    <div className="w-full flex flex-col mb-4 bg-[#1B1F27]">
      {/* Top section: Picture and Content */}
      <div className="flex">
        {/* Left side: Picture */}
        <div className="w-[83.2px] bg-black"></div>

        {/* Right side: Content */}
        <div className="flex flex-col justify-between pl-4">
          <div>
            <h2 className="heading">{title}</h2>
            <p className="description">{description}</p>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow flex-shrink h-auto w-4"></div>
      </div>

      {/* Bottom section: Gray area */}
      <div className="bg-[#373D4D] pl-5 pr-5 pb-4 pt-2 text-white flex flex-col">
        <div className="description" dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
        <div className="tiny flex justify-between">
          <span>{startDate} - {endDate}</span>
          <span>{numPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDisplay;