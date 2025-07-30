// AboutFinastra.jsx

import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div>
          <img
            src="https://officesnapshots.com/wp-content/uploads/2020/03/finastra-offices-toronto-6-700x401.jpg"
            alt="Finastra Global"
            className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Right: Content */}
        <div>
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-500">
            About Finastra
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Accelerating the Future of Open Finance
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Finastra is a global provider of financial services software applications 
            across Lending, Payments, Treasury and Capital Markets, and Universal 
            (retail and digital) Banking. Committed to unlocking the potential of 
            people, businesses and communities everywhere, its vision is to accelerate 
            the future of Open Finance through technology and collaboration.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Today, Finastra’s pioneering approach is trusted by nearly{" "}
            <span className="font-semibold">8,100 financial institutions</span>, 
            including <span className="font-semibold">45 of the world’s top 50 banks</span>.
          </p>

          <a
            href="https://www.finastra.com"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium text-black hover:text-amber-50  hover:bg-blue-600"
          >
            Visit finastra.com
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}



export default About





