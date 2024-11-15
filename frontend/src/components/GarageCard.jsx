import React, { useEffect } from 'react'

const GarageCard = ({ title, section1Text, section2Text, section3Text }) => {




  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mt-3 hover:cursor-pointer">
      {/* Title */}
      <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>

      {/* Section 1 */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-left">{section1Text}</p>
        <div className="flex gap-2">
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-left">{section2Text}</p>
        <div className="flex gap-2">
          <span className="w-4 h-4 bg-red-500  rounded-full"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex justify-between items-center">
        <p className="text-left">{section3Text}</p>
        <span className="w-4 h-4 bg-green-500  rounded-full"></span>
      </div>
    </div>
  );
  
}

export default GarageCard