import React from "react";

function About() {
  return (
    
    <section id="about" className="bg-white py-20 px-6 md:px-20">
      
      {/* Container box with a subtle sky-blue tint/border to match the home screen accents */}
      <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 hover:scale-102 transition duration-300">
        
        {/* Heading matches the blue accents from the landing page button */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6 border-b-4 border-sky-400 inline-block pb-2">
          ABOUT ME
        </h2>

        {/* Text color matches the dark tone of the Home header text */}
        <p className="text-lg md:text-xl leading-9 text-slate-800 tracking-wide">
          I am a Computer Engineering student and a creative thinker who enjoys
          solving problems, connecting ideas, and learning new technologies.
          I am passionate about animation, design, and continuous learning.
        </p>

      </div>

    </section>
  );
}

export default About;