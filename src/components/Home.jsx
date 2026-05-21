import React from "react";

function Home() {
  return (
    <header
      id="home"
      className="bg-gradient-to-b from-blue-700 via-blue-500 to-white min-h-screen flex items-center justify-center"
    >
      <div className="text-center px-6">

        {/* Profile Image */}
        <img
          src="public/Images/kathu1.jpg"
          alt="Umadevi"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-white shadow-2xl mx-auto mb-8 hover:scale-105 transition duration-300"
        />

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-4 text-slate-900">
          UMADEVI V
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl font-medium text-blue-900">
          Computer Engineering Student | Creative Thinker
        </p>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
          Explore Portfolio
        </button>

      </div>
    </header>
  );
}

export default Home;