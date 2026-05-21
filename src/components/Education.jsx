import React from "react";

function Edu() {
  return (
    // Transitions smoothly from the white background above into a soft, premium blue tint
    <section id="education" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Main section heading matches the deep dark theme text */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center">
          EDUCATION
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Card 1: Diploma */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 border border-slate-100">
            {/* Matches the vibrant theme blue from the Home CTA button */}
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Diploma in Computer Engineering
            </h3>

            {/* A slightly darker blue accent for date sub-headers */}
            <p className="text-blue-500 font-semibold mb-2">
              2024 – 2027
            </p>

            <p className="text-slate-700 text-lg">
              Govt. Women's Polytechnic College, Kerala
            </p>
          </div>

          {/* Card 2: Animator */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 border border-slate-100">
            {/* Matches the vibrant theme blue from the Home CTA button */}
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Animator Course
            </h3>

            {/* A slightly darker blue accent for date sub-headers */}
            <p className="text-blue-500 font-semibold mb-2">
              2025 – 2026
            </p>

            <p className="text-slate-700 text-lg">
              SDC Kottukal
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Edu;