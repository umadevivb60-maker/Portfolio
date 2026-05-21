import React from "react";

function Con() {
  return (
    <section
      id="contacts"
      className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-20"
    >
      {/* Container aligned like Education section */}
      <div className="max-w-4xl mx-auto">

        {/* Heading style matching Education */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-12 border-b-4 border-sky-400 inline-block pb-2">
          CONTACT
        </h2>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 hover:-translate-y-2 hover:scale-105 transition duration-300">

          <div className="space-y-6 text-lg text-slate-700">

            {/* Email */}
            <div className="border-b border-slate-100 pb-4">
              <p>
                <strong className="text-blue-600">Email:</strong>{" "}
                <a
                  href="mailto:animeanimator73@gmail.com"
                  className="hover:text-blue-500 transition"
                >
                  animeanimator73@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="border-b border-slate-100 pb-4">
              <p>
                <strong className="text-blue-600">Phone:</strong>{" "}
                <a
                  href="tel:8157894735"
                  className="hover:text-blue-500 transition"
                >
                  8157894735
                </a>
              </p>
            </div>

            {/* Location */}
            <div>
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