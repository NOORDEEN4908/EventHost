import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Who should attend?", a: "Banking leaders, product managers, IT decision makers, and fintech innovators." },
  { q: "Where is the venue?", a: "The Nile Ritz-Carlton, Cairo, Egypt." },
  { q: "What’s the dress code?", a: "Business casual." },
  { q: "Is there a registration fee?", a: "Attendance is by invitation and complimentary for qualified guests." },
];

const AboutEvent = () => {
  const [open, setOpen] = useState(0);


  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });


  const faqVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
   
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs font-semibold tracking-wider uppercase text-gray-500">About the event</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Reimagine Banking with Finastra
          </h2>
          <p className="mt-3 text-gray-600">
            A high‑impact day in Cairo bringing together leaders from banking and fintech to explore
            next‑gen digital banking, customer growth, and operational excellence.
          </p>

          <ul className="mt-6 space-y-2 text-gray-800">
            <li>• Learn from 10+ industry speakers</li>
            <li>• Deep dives on acquisition, retention, and cost‑to‑serve</li>
            <li>• Network with peers and partners</li>
          </ul>

   
          <div ref={ref} className="mt-6 grid grid-cols-3 gap-4">
            {[
              { k: "Speakers", start: 1, end: 15, suffix: "+" },
              { k: "Sessions", start: 1, end: 8, suffix: "" },
              { k: "Attendees", start: 10, end: 200, suffix: "+" },
            ].map(({ k, start, end, suffix }) => (
              <div key={k} className="rounded-2xl border p-4 text-center">
                <div className="text-2xl font-bold text-black">
                  {inView ? (
                    <CountUp start={start} end={end} duration={2.5} separator="," suffix={suffix} />
                  ) : (
                    start
                  )}
                </div>
                <div className="text-xs text-gray-500">{k}</div>
              </div>
            ))}
          </div>

          <button className="mt-6 inline-flex items-center rounded-full border px-5 py-2.5 text-sm font-medium text-black hover:text-white hover:bg-blue-600">
            Register Now
          </button>
        </motion.div>


        <div className="grid gap-6">
          <motion.img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1200&auto=format&fit=crop"
            alt="Event ambiance"
            className="w-full h-56 md:h-64 object-cover rounded-2xl shadow-sm filter grayscale"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-gray-500">FAQ’s</p>
            <h3 className="mt-1 text-2xl font-bold text-black">Looking for an answer?</h3>
            <p className="mt-2 text-gray-600">
              Common questions about the event, venue, and registration.
            </p>

            <div className="mt-4 divide-y border rounded-2xl overflow-hidden">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    animate="visible"
                    variants={faqVariants}
                    className="bg-white"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between text-left px-4 py-4 hover:bg-gray-50"
                      aria-expanded={isOpen}
                      aria-controls={`faq-${i}`}
                    >
                      <span className="font-medium text-black">{item.q}</span>
                      <span className="text-gray-500">{isOpen ? "−" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          id={`faq-${i}`}
                          className="px-4 pb-4 text-sm text-gray-700"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
