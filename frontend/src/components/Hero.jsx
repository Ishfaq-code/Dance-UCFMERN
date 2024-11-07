import React from 'react'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 md:p-16 bg-gray-950 font-title text-white">
    {/* Left Side - Text and CTA */}
    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <h1 className="text-4xl md:text-7xl font-bold ">
        Search <span className='text-amber-400'>Locate</span> <br />Reserve
      </h1>
      <p className="text-lg md:text-xl ">
      Lorem ipsum odor amet, consectetuer adipiscing elit. Inceptos urna at orci ridiculus 
      </p>
      
      <button className="mt-24 px-6 py-3 bg-amber-400 text-white font-semibold rounded-lg hover:bg-amber-500 transition duration-300 text-xl">
        Get Started
      </button>
    </div>

    {/* Right Side - Image */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="https://via.placeholder.com/400x300" // Replace with your image source
        alt="Hero Image"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </section>  )
}

export default Hero