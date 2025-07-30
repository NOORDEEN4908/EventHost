import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
  // Variants for staggering the child animations
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="relative pt-32 pb-0 px-4 sm:px-8 min-h-screen overflow-visible bg-gradient-to-b from-[#ffffff] via-[#741f6c] to-[#1d1d44]"  >
   
      <div className="absolute bottom-0 left-0 z-0">

      </div>

      <div className="absolute top-0 right-0 z-0">
   
      </div>

      <main className="relative z-10 flex flex-col items-center max-w-7xl mx-auto text-center">
 
        <motion.button
          className="mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span>Reimagine Banking with Finastra</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </motion.button>

    
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
      
          <motion.h1
            variants={fadeUp}
            className="text-white font-bold text-3xl sm:text-4xl md:text-5xl leading-tight"
          >
            Shape the Future of Finance with Finastra and <br />
            <span className="text-black">Cogent Solutions</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-white text-base sm:text-lg leading-relaxed"
          >
            Join global banking leaders, innovators, and Finastra experts for a powerful day of insights, networking, and next‑gen digital banking strategies — live in Dubai.
          </motion.p>

          {/* Date/Time/Location */}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-col md:flex-row justify-center items-center gap-4 mb-6 text-sm md:text-base text-white/90"
          >
            <div className="flex items-center gap-2">📅 <span>9th April 2025</span></div>
            <div className="flex items-center gap-2">⏰ <span>9:30 AM – 2:00 PM (GMT+2)</span></div>
            <div className="flex items-center gap-2">📍 <span>The Nile Ritz-Carlton, Cairo, Egypt</span></div>
          </motion.div>
        </motion.div>

        {/* Register button */}
        <motion.button
          className="mt-6 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span>Register for the Event</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>

        {/* Image below */}
        <div className="relative -z-50 -mb-24 w-full flex justify-center">
          <img
            className="rounded-[32px] mt-8 h-72 w-full max-w-5xl object-cover shadow-2xl ring-1 ring-black/10"
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop"
            alt="Hero"
          />
        </div>
      </main>
    </section>
  )
}

export default Hero
