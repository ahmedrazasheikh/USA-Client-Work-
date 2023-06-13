import React from 'react'

const MainHeading = () => {
  return (
    <div>
      
      <div className="my-8 pt-8 text-center bg-gray-900">
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold" style={{ color: '#abb8c3' }}>
        Your <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">AI-Assistant</span>
      </h2>
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold pb-8" style={{ color: '#abb8c3' }}>for Business</h2>
      <button
        className="px-4 py-2 mt-4 bg-black text-white rounded mx-auto w-full max-w-md lg:max-w-lg xl:max-w-xl md:w-auto"
        style={{
          alignItems: "center",
          background: "#2a48df",
          borderRadius: "3.75rem",
          color: "#fff",
          display: "flex",
          fontFamily: "Manrope, sans-serif",
          fontSize: "1.5rem",
          fontWeight: 600,
          justifyContent: "center",
          padding: "0.6rem 3.1875rem",
        }}
      >
        Get Started Free
      </button>
      <p className="mt-2 text-gray-500">No credit card required</p>
    </div>












    </div>
  )
}

export default MainHeading