import React, { useState } from 'react';
import  logo from '../Images/png-03.png'
const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
<nav className="flex items-center justify-between px-20 py-2 text-white" style={{ backgroundColor: 'bg-gray-900' }}>
  <div className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-12 mr-2"
    />
    <h1 className="text-3xl font-bold">BizzAI</h1>
  </div>

  <ul className={`hidden md:flex items-center space-x-4 ${isDrawerOpen ? 'hidden' : ''}`}>
    <li><a href="#" style={{ color: '#e86e9f', fontWeight: 'bold' }}>Why Cody ?</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Use Cases</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Pricing</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>API</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Discord</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Affiliates</a></li>
  </ul>

  <div className="hidden md:flex items-center space-x-4">
    <a className="px-4 py-2 text-white font-bold" href="#">
      Login
    </a>
    <a
      className="px-4 py-2"
      style={{
        alignItems: "center",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        backgroundColor: "#2a48df",
        borderRadius: "3.75rem",
        color: "#fff",
        display: "flex",
        fontFamily: "Manrope, sans-serif",
        fontSize: "1.125rem",
        fontWeight: 600,
        justifyContent: "center",
        margin: "auto",
        maxWidth: "17.5rem",
        padding: "1.25rem 3.1875rem",
        position: "relative",
      }}
      href="#"
    >
      Join Free
    </a>
  </div>

  <button className="block md:hidden" onClick={toggleDrawer}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>

  {isDrawerOpen && (
    <div className="md:hidden fixed inset-0 bg-gray-900 text-white flex flex-col items-center">
      <div className="flex items-center justify-between px-4 py-2 w-full">
      <div className="flex items-center">
    <img
      src={logo}
      alt="Logo"
      className="h-12 mr-2"
    />
    <h1 className="text-3xl font-bold">BizzAI</h1>
  </div>
        <button className="text-white" onClick={toggleDrawer}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-center">
        <ul className="mt-4 space-y-4">
        <li><a href="#" style={{ color: '#e86e9f', fontWeight: 'bold' }}>Why Cody ?</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Use Cases</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Pricing</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>API</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Discord</a></li>
    <li><a href="#" style={{ fontWeight: 'bold' }}>Affiliates</a></li>
        </ul>
        <div className="mt-8 px-4">
          <a
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded"
            style={{
              alignItems: "center",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              backgroundColor: "#2a48df",
              borderRadius: "3.75rem",
              color: "#fff",
              display: "flex",
              fontFamily: "Manrope, sans-serif",
              fontSize: "1.125rem",
              fontWeight: 600,
              justifyContent: "center",
              margin: "auto",
              maxWidth: "17.5rem",
              padding: "1.25rem 3.1875rem",
              position: "relative",
            }}
            href="#"
          >
            Join Free
          </a>
        </div>
      </div>
    </div>
  )}
</nav>






  
  );
};

export default Navbar;
