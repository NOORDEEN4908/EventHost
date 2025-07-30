import React from 'react';
import img1 from '../assets/1s.png';
import img2 from '../assets/2s.jpg';
import img3 from '../assets/3s.jpg';
import img4 from '../assets/4s.jpg';
import img5 from '../assets/5s.jpg';
import img6 from '../assets/6s.jpg';
import img7 from '../assets/7s.png';
import img8 from '../assets/8s.png';
import img9 from '../assets/9s.jpg';
import img10 from '../assets/10s.jpg';
import img11 from '../assets/11s.jpg';
import img12 from '../assets/12s.jpg';
import img13 from '../assets/13s.jpg';
import img14 from '../assets/14s.jpg';
import img15 from '../assets/15s.png';

const Speakers = () => {
  const [stopScroll, setStopScroll] = React.useState(false);
  const [selected, setSelected] = React.useState(null); // card object or null
  const dialogRef = React.useRef(null);

  // Close with ESC and focus modal on open
  React.useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };
    document.addEventListener('keydown', onKey);
    setTimeout(() => dialogRef.current?.focus(), 0);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  const cardData = [
    {
      name: "Mr. Mohamed Elazzazy",
      image: img1,
      title: "Head of IT Governance & Change Management",
      company: "Al‑Baraka Bank Egypt",
      bio:
        "Leads enterprise IT governance and change programs, aligning risk, resilience, and business outcomes across the bank.",
      session: "Modernizing Governance for Next‑Gen Core Banking",
      time: "10:30 – 11:00 AM",
      tags: ["Governance", "Change", "Risk"],
      links: { linkedin: "", website: "" },
      // keep empty strings if you don't have links yet
    },
    {
      name: "Mr. Shehab Moustafa",
      image: img2,
      title: "Country Center of Excellence Director",
      company: "Money Fellows",
      session: "Scaling Fintech Ops with Centers of Excellence",
      time: "11:00 – 11:30 AM",
      tags: ["Fintech", "Operations"],
    },
    {
      name: "Mr. Marwan Abouzeid",
      image: img3,
      title: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
      company: "Finastra",
    },
    {
      name: "Mr. Karim El Mourabet",
      image: img4,
      title: "Solution Consulting Director - MEA",
      company: "Finastra",
    },
    {
      name: "Ms. Siobhan Byron",
      image: img5,
      title: "Executive Vice President, Universal Banking",
      company: "Finastra",
    },
    {
      name: "Mr. Narendra Mistry",
      image: img6,
      title: "Chief Product and Technology Officer, Universal Banking",
      company: "Finastra",
    },
    {
      name: "Mr. Ahmed Hamdy Bahey El Din",
      image: img7,
      title: "Head of Information Technology",
      company: "Incolease",
    },
    {
      name: "Mr. Emad Shawky Habib Hanna",
      image: img8,
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
    },
    {
      name: "Ms. Heba Yehia",
      image: img9,
      title: "Head of Digital Products",
      company: "Arab African International Bank",
    },
    {
      name: "Mr. Hamid Nirouzad",
      image: img10,
      title: "Managing Director - Africa",
      company: "Finastra Universal",
    },
    {
      name: "Mr. Rudy Kawmi",
      image: img11,
      title: "Managing Director - Middle East, Africa & Asia-Pacific",
      company: "Finastra Universal Banking",
    },
    {
      name: "Mr. Matthew Hughes",
      image: img12,
      title: "Head of FS&I, International Markets",
      company: "Atos",
    },
    {
      name: "Mr. Daragh O'Byrne",
      image: img13,
      title: "Senior Director, Marketing, Universal Banking",
      company: "Finastra",
    },
    {
      name: "Dr. Ismail Ali",
      image: img14,
      title: "Co‑Founder and CEO",
      company: "CARITech",
    },
    {
      name: "Ms. Riham Muhammad",
      image: img15,
      title: "Corporate CEX Senior Analyst",
      company: "FABMISR",
    },
  ];

  const hasDetails = (c) =>
    c?.title || c?.company || c?.bio || c?.session || c?.time || (Array.isArray(c?.tags) && c.tags.length) || c?.links?.linkedin || c?.links?.website;

  return (
    <section id="speakers" className="py-16 sm:py-20">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Our <span className="text-gray-500">Speakers</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600">
          Industry leaders and innovators sharing insights on the future of banking.
        </p>
        <div className="mx-auto mt-4 h-1 w-24 bg-gray-900/80 rounded-full" />
      </div>

      {/* Local styles for marquee */}
      <style>{`
        .marquee-inner { animation: marqueeScroll linear infinite; }
        @keyframes marqueeScroll { 0% { transform: translateX(0%);} 100% { transform: translateX(-50%);} }
      `}</style>

      {/* Marquee container */}
      <div
        className="overflow-hidden w-full relative max-w-6xl mx-auto px-4 pt-8"
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
        aria-labelledby="speakers-title"
      >
        {/* Fade masks (switch to from-black if this sits on a dark bg) */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 h-full w-16 sm:w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        {/* Track */}
        <div
          className="marquee-inner flex w-fit"
          style={{
            animationPlayState: stopScroll ? 'paused' : 'running',
            animationDuration: cardData.length * 2500 + 'ms',
          }}
        >
          <div className="flex">
            {[...cardData, ...cardData].map((card, index) => (
              <button
                key={index}
                type="button"
                className="w-56 mx-4 h-[20rem] relative group transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1"
                onClick={() => hasDetails(card) && setSelected(card)}
                aria-label={hasDetails(card) ? `Open details for ${card.name}` : card.name}
              >
                {/* Image */}
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-full object-cover rounded-2xl shadow-md"
                />

                {/* Name chip (always visible) */}
                <div className="absolute bottom-2 left-2">
                  <div className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-gray-900 shadow">
                    {card.name}
                  </div>
                </div>

                {/* Hover overlay with quick details */}
                {hasDetails(card) && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-full rounded-xl bg-black/50 backdrop-blur-md text-white p-3">
                        {(card.title || card.company) && (
                          <p className="text-sm leading-snug">
                            {card.title}
                            {card.title && card.company ? ' • ' : ''}
                            {card.company}
                          </p>
                        )}
                        <div className="mt-2 flex justify-end">
                          <span className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/20">
                            View profile
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={() => setSelected(null)} />

          {/* Dialog */}
          <div
            ref={dialogRef}
            tabIndex={-1}
            className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden outline-none"
          >
            {/* Header image */}
            <div className="h-56 w-full overflow-hidden">
              <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Title row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 id="speakers-title" className="text-xl font-semibold text-gray-900">{selected.name}</h3>
                  {(selected.title || selected.company) && (
                    <p className="mt-1 text-sm text-gray-600">
                      {selected.title}
                      {selected.title && selected.company ? ' • ' : ''}
                      {selected.company}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition"
                  aria-label="Close"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Bio */}
              {selected.bio && (
                <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                  {selected.bio}
                </p>
              )}

              {/* Session info */}
              {(selected.session || selected.time) && (
                <div className="mt-4 rounded-xl border p-3">
                  <div className="text-sm font-medium text-gray-900">
                    {selected.session || 'Session'}
                  </div>
                  {selected.time && (
                    <div className="text-xs text-gray-600 mt-1">{selected.time}</div>
                  )}
                </div>
              )}

              {/* Tags */}
              {Array.isArray(selected.tags) && selected.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.tags.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-full bg-gray-100 border text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Links */}
              {(selected?.links?.linkedin || selected?.links?.website) && (
                <div className="mt-5 flex gap-2">
                  {selected.links.linkedin ? (
                    <a
                      href={selected.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-2.1 3.7-2.1 4 0 4.8 2.6 4.8 6v7.5h-4v-6.6c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V24h-4V8.5z" />
                      </svg>
                      LinkedIn
                    </a>
                  ) : null}
                  {selected.links?.website ? (
                    <a
                      href={selected.links.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20Z" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M2 12h20M12 2c3 3.5 4.5 7.5 4.5 10S15 18.5 12 22M12 2C9 5.5 7.5 9.5 7.5 12S9 18.5 12 22" stroke="currentColor" strokeWidth="1.6" />
                      </svg>
                      Website
                    </a>
                  ) : null}
                </div>
              )}

              {/* Actions */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelected(null)}
                  className="rounded-full border px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Speakers;
