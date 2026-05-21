import React from "react";

function Skill() {
  return (
    <section
      id="skills"
      className="bg-blue-50 py-20 px-6 md:px-20"
    >
      {/* Alignment matched with Education section */}
      <div className="max-w-4xl mx-auto">

        {/* Heading style matched with Education */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-12 border-b-4 border-sky-400 inline-block pb-2">
          SKILLS
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">

          {/* Technical Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Technical Skills
            </h3>

            <ul className="space-y-4 text-lg text-slate-700">
              <li className="bg-blue-50 px-4 py-3 rounded-xl hover:bg-blue-100 transition font-medium">
                C Programming
              </li>

              <li className="bg-blue-50 px-4 py-3 rounded-xl hover:bg-blue-100 transition font-medium">
                Java
              </li>

              <li className="bg-blue-50 px-4 py-3 rounded-xl hover:bg-blue-100 transition font-medium">
                HTML
              </li>

              <li className="bg-blue-50 px-4 py-3 rounded-xl hover:bg-blue-100 transition font-medium">
                CSS
              </li>

              <li className="bg-blue-50 px-4 py-3 rounded-xl hover:bg-blue-100 transition font-medium">
                JavaScript
              </li>
            </ul>
          </div>

          {/* Creative Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:-translate-y-2 hover:scale-105 transition duration-300">

            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              Creative Skills
            </h3>

            <ul className="space-y-4 text-lg text-slate-700">
              <li className="bg-sky-50 px-4 py-3 rounded-xl hover:bg-sky-100 transition font-medium">
                Matte Painting
              </li>

              <li className="bg-sky-50 px-4 py-3 rounded-xl hover:bg-sky-100 transition font-medium">
                Storyboard Writing
              </li>

              <li className="bg-sky-50 px-4 py-3 rounded-xl hover:bg-sky-100 transition font-medium">
                Animation
              </li>

              <li className="bg-sky-50 px-4 py-3 rounded-xl hover:bg-sky-100 transition font-medium">
                Video Editing
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;