import React from 'react'

const Title = ({ title, overview }) => {
  console.log(title, overview)
  return (
    <div className="w-screen aspect-video pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[12%] px-4 sm:px-8 md:px-16 lg:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
        {title}
      </h1>
      <p className="hidden md:block py-4 lg:py-6 text-sm md:text-base lg:text-lg w-full md:w-2/5 lg:w-1/3 line-clamp-3">
        {overview}
      </p>
      <div className="mt-3 sm:mt-4 md:mt-6">
        <button className="bg-white text-black py-2 px-4 sm:py-3 sm:px-8 md:py-4 md:px-12 text-base sm:text-lg md:text-xl rounded-md md:rounded-lg hover:bg-opacity-80 transition-opacity">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block ml-2 lg:ml-3 bg-gray-500 text-white py-3 px-8 md:py-4 md:px-12 text-lg md:text-xl bg-opacity-50 rounded-md md:rounded-lg hover:bg-opacity-70 transition-opacity">
          ℹ️ More Info
        </button>
      </div>
    </div>
  )
}

export default Title