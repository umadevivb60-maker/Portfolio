import React from "react";

function Home() {
  return (
    <header
      id="home"
      className="min-h-screen flex items-center justify-center bg-black px-6 pt-16"
    >
      <div className="text-center max-w-3xl mx-auto space-y-6">
        
        

        {/* Heading in Green */}
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-green-500 py-2">
          UMADEVI V
        </h1>

        {/* Content in White */}
        <p className="text-lg md:text-2xl font-medium text-white max-w-xl mx-auto leading-relaxed">
          Computer Engineering Student | Creative Thinker
        </p>

        <div className="pt-4">
          <a 
            href="#about"
            className="inline-block px-8 py-4 bg-green-500 text-black font-bold uppercase tracking-widest text-sm rounded-full shadow-lg hover:bg-green-400 hover:-translate-y-1 transition-all duration-300"
          >
            Explore Portfolio
          </a>
        </div>

      </div>
    </header>
  );
}

export default Home;