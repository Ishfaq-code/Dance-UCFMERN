import React, { useEffect } from 'react'

const GarageCard = ({ title, floors}) => {
 

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mt-3 hover:cursor-pointer hover:scale-110 transition-transform duration-300 ">
      {/* Title */}
      <h2 className="text-2xl text-center font-semibold mb-4">{title}</h2>

      {
        floors.map((item, index) => (
          <div className="flex justify-between items-center mb-3" key={item._id}>
          <p className="text-left">{`Floor ${index}`}</p>
          <div className="flex gap-2">
            <span className={item.side1 ? "w-4 h-4 bg-green-500 rounded-full":"w-4 h-4 bg-red-500 rounded-full"}></span>
            <span className={item.side2 ? "w-4 h-4 bg-green-500 rounded-full":"w-4 h-4 bg-red-500 rounded-full"}></span>
            <span className={item.socket ? "w-4 h-4 bg-green-500 rounded-full":"w-4 h-4 bg-red-500 rounded-full"}></span>
          </div>
        </div>
        ))
      }


      {/* Section 3 */}
      
    </div>
  );
  
}

export default GarageCard