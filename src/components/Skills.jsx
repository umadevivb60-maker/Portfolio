import React from "react";

function Skill() {
  return (
    // Uses a solid light blue background to flow beautifully with your other sections
    <section id="skills" className="bg-blue-50 py-20 px-6 md:px-20">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Main section heading matches the deep dark theme text */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-14 text-left">
          SKILLS
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Technical Skills */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 border border-slate-100">
            
            {/* Heading matches your vibrant theme blue */}
            <h3 className="text-3xl font-bold text-blue-600 mb-6">
              Technical Skills
            </h3>

            {/* Shifted list tags from purple badges to premium blue badges */}
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
          <div className="bg-white rounded-3xl p-8 shadow-2xl hover:-translate-y-2 hover:scale-105 transition duration-300 border border-slate-100">
            
            {/* Heading matches your bright sky-blue accent */}
            <h3 className="text-3xl font-bold text-sky-600 mb-6">
              Creative Skills
            </h3>

            {/* Shifted list tags from pink badges to premium sky-blue badges */}
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