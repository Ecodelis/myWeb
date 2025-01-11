import React from 'react';

const ExperienceDisplay = ({ type, title, description, responsibilities, startDate, endDate, numPeople }) => {
  return (
    <div className="w-full flex flex-col mb-4 bg-[#1B1F27]">
      {/* Top section: Picture and Content */}
      <div className="flex">
        {/* Left side: Picture */}
        <div className="flex-shrink-0 w-[7%]">
          <div className="relative w-full" style={{ paddingTop: '100%' }}> {/* 1:1 Aspect Ratio */}
            <div className="absolute top-0 left-0 w-full h-full bg-black"></div>
          </div>
        </div>

        {/* Right side: Content */}
        <div className="flex-grow flex flex-col justify-between pl-4 text-white font-light">
          <div>
            <h2 className="m-0 text-[1.8rem]">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>

      {/* Bottom section: Gray area */}
      <div className="bg-[#373D4D] pl-5 pr-5 pb-4 pt-2 text-white flex flex-col">
        <div className="mb-10 text-[1rem]" dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
        <div className="flex justify-between text-[0.7rem]">
          <span>{startDate} - {endDate}</span>
          <span>{numPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDisplay;