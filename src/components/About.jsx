import React from "react";

function About() {
  return (
    <section id="about" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading in Green */}
        <h2 className="text-4xl md:text-6xl font-black text-green-500 mb-10 tracking-tight">
          ABOUT ME
        </h2>

        {/* Card and Content in White */}
        <div className="bg-zinc-900/50 rounded-3xl p-8 md:p-14 border border-zinc-800 shadow-2xl transition-all duration-300">
          <p className="text-lg md:text-2xl leading-relaxed text-white font-light tracking-wide">
            I am a <span className="font-semibold text-green-400">Computer Engineering student</span> and a creative thinker who enjoys
            solving problems, connecting ideas, and learning new technologies.
            I am passionate about animation, design, and continuous learning.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;