import React from "react";

function Skill() {
  const technical = ["C Programming", "Java", "HTML", "CSS", "JavaScript"];
  const creative = ["Matte Painting", "Storyboard Writing", "Animation", "Video Editing"];

  return (
    <section id="skills" className="py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">

        {/* Heading in Green */}
        <h2 className="text-4xl md:text-6xl font-black text-green-500 mb-16 tracking-tight">
          SKILLS
        </h2>

        <div className="grid gap-12 md:grid-cols-2">

          {/* Technical Skills Sub-category */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold tracking-wider text-green-400 uppercase border-b border-zinc-800 pb-2">
              Technical Skills
            </h3>
            <ul className="space-y-3">
              {technical.map((item) => (
                <li key={item} className="bg-zinc-900/40 border border-zinc-800 px-5 py-3.5 rounded-2xl text-white font-medium transition duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Creative Skills Sub-category */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold tracking-wider text-green-400 uppercase border-b border-zinc-800 pb-2">
              Creative Skills
            </h3>
            <ul className="space-y-3">
              {creative.map((item) => (
                <li key={item} className="bg-zinc-900/40 border border-zinc-800 px-5 py-3.5 rounded-2xl text-white font-medium transition duration-200">
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skill;