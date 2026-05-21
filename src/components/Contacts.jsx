import React from "react";

function Con() {
  return (
    // Transitions from the white background of the About section into a deep blue base
    <section id="contacts" className="bg-gradient-to-b from-white via-blue-50 to-blue-700 py-20 px-6 md:px-20 flex justify-center">
      
      {/* Centered the container to align with the rest of your website layout */}
      <div className="max-w-4xl w-full mx-auto">
        
        {/* Changed heading to dark slate to stand out beautifully against the light top gradient */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-12 text-center md:text-left">
          CONTACT
        </h2>

        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:scale-105 transition duration-300">
          
          <div className="space-y-6 text-lg md:text-xl text-slate-700">

            {/* Email Field */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <span className="text-2xl"></span>
              <p>
                <strong className="text-blue-600">Email:</strong>{" "}
                <a href="mailto:umadevivb60@gmail.com" className="hover:text-blue-500 transition">animeanimator73@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Field */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <span className="text-2xl"></span>
              <p>
                <strong className="text-blue-600">Phone:</strong>{" "}
                <a href="tel:8157894735" className="hover:text-blue-500 transition">
                  8157894735
                </a>
              </p>
            </div>

            {/* Location Field */}
            <div className="flex items-center gap-4">
              <span className="text-2xl"></span>
              <p>
                <strong className="text-blue-600">Location:</strong>{" "}
                Thiruvananthapuram, India
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Con;