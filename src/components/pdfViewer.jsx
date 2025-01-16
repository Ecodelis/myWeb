import React from 'react';

const ScrollablePDF = ({ pdfUrl }) => {
  return (
    <div className="w-full h-screen overflow-auto">
      <iframe
        src={pdfUrl}
        className="w-full h-full"
        title="PDF Viewer"
      ></iframe>
    </div>
  );
};

export default ScrollablePDF;