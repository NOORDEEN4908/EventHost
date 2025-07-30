import React from 'react';
import img1 from '../assets/1s.png';
import img2 from '../assets/2s.jpg';
import img3 from '../assets/3s.jpg';
import img4 from '../assets/4s.jpg';
import leftDecor from '../assets/download.jpg';    
import rightDecor from '../assets/Brainstormin.jpg';  

const speakers = [
  { name: "Ali Hassan", image: img1 },
  { name: "Sara Kamil", image: img2 },
  { name: "Youssef Amir", image: img3 },
  { name: "Mina Adel", image: img4 },
];

const EventCard = () => {
  return (
    <div className="relative">
    
      <img
        src={leftDecor}
        alt="Decoration Left"
        className=" w-96 min-h-10/12 md:block absolute top-0 left-0 w-28 opacity-60 z-0 pointer-events-none"
      />

   
      <img
        src={rightDecor}
        alt="Decoration Right"
        className="hidden w-fit min-h-10/12 md:block absolute bottom-0 right-0 w-32 opacity-40 z-0 pointer-events-none"
      />

      <section className="relative bg-white shadow-md rounded-2xl scroll-pt-20 pb-16 md:p-12 max-w-5xl mx-auto mt-10 z-10" id="#agenda" >
        <p className="text-blue-600 text-sm uppercase font-medium mb-2">About the Event</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Reimagine Banking: Adapt. Evolve. Thrive.
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          Join us on <strong>April 9th in Cairo, Egypt</strong>, for Finastra's Universal Banking Forum.
          This exclusive event is designed to help you navigate and excel in the rapidly evolving banking landscape.
          <br /><br />
          You'll gain insights into Generative AI, volatility, globalization, supply chains, recession risks, regulations, and more.
          Learn strategies, hear from top experts, and network with other professionals in the financial space.
        </p>

        <div className="flex flex-wrap gap-6 text-gray-700 text-sm mb-8">
          <div className="flex items-center gap-2">
            📅 <span>9th April 2025 | 9:30 AM – 2:00 PM (GMT+2)</span>
          </div>
          <div className="flex items-center gap-2">
            📍 <span>The Nile Ritz-Carlton, Cairo, Egypt</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Featured Speakers</h3>
          <div className="flex flex-wrap gap-4">
            {speakers.map((speaker, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-100 p-3 rounded-xl hover:shadow-sm transition"
              >
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-18 h-20 rounded-full object-cover"
                />
                <span className="text-sm font-medium text-gray-800">{speaker.name}</span>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#register"
          className="inline-block border-2  text-black hover:text-white hover:bg-blue-600 font-semibold px-6 py-3 rounded-full transition-all duration-300"
        >
          Register Now
        </a>
      </section>
    </div>
  );
};

export default EventCard;
