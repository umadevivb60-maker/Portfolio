import React from "react";

function Con() {
  return (
    <section
      id="contacts"
      className="bg-gradient-to-b from-black via-green-900 to-emerald-500 py-20 px-6 md:px-20 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto w-full">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-green-100 mb-12 border-b-4 border-emerald-400 inline-block pb-2">
          CONTACT
        </h2>

        {/* Contact Card */}
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-500/30 hover:-translate-y-2 hover:scale-105 transition duration-300">

          <div className="space-y-6 text-lg text-emerald-100">

            {/* Email */}
            <div className="border-b border-emerald-500/20 pb-4">
              <p>
                <strong className="text-emerald-400">Email:</strong>{" "}
                <a
                  href="mailto:animeanimator73@gmail.com"
                  className="hover:text-green-400 transition"
                >
                  animeanimator73@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="border-b border-emerald-500/20 pb-4">
              <p>
                <strong className="text-emerald-400">Phone:</strong>{" "}
                <a
                  href="tel:8157894735"
                  className="hover:text-green-400 transition"
                >
                  8157894735
                </a>
              </p>
            </div>

            {/* Location */}
            <div>
              <p>
                <strong className="text-emerald-400">Location:</strong>{" "}
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