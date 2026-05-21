import React from "react";

function Edu() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20"
    >
      {/* Main container aligned like About section */}
      <div className="max-w-4xl mx-auto">
        
        {/* Heading style matching About */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-12 border-b-4 border-sky-400 inline-block pb-2">
          EDUCATION
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Diploma Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Diploma in Computer Engineering
            </h3>

            <p className="text-blue-500 font-semibold mb-2">
              2024 – 2027
            </p>

            <p className="text-slate-700 text-lg">
              Govt. Women's Polytechnic College, Kerala
            </p>
          </div>

          {/* Animator Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Animator Course
            </h3>

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