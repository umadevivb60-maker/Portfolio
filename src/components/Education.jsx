import React from "react";

function Edu() {
  return (
    <section id="education" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading in Green */}
        <h2 className="text-4xl md:text-6xl font-black text-green-500 mb-16 tracking-tight">
          EDUCATION
        </h2>

        {/* Content blocks in White */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Diploma Card */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider rounded-md bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
                2024 – 2027
              </span>
              <h3 className="text-2xl font-bold text-white">
                Diploma in Computer Engineering
              </h3>
            </div>
            <p className="text-white/70 text-base mt-6 border-t border-zinc-800/60 pt-4 font-medium">
              Govt. Women's Polytechnic College, Kerala
            </p>
          </div>

          {/* Animator Card */}
          <div className="bg-zinc-900/50 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-mono tracking-wider rounded-md bg-green-500/10 text-green-400 border border-green-500/20 mb-6">
                2025 – 2026
              </span>
              <h3 className="text-2xl font-bold text-white">
                Animator Course
              </h3>
            </div>
            <p className="text-white/70 text-base mt-6 border-t border-zinc-800/60 pt-4 font-medium">
              SDC Kottukal
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Edu;