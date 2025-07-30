// src/components/Timeline.jsx
import React from "react";
import { agenda } from "../assets/agenda";
import {
  FaUserCheck,
  FaPlay,
  FaMicrophoneAlt,
  FaCommentDots,
  FaUsers,
  FaCoffee,
  FaUtensils,
  FaFlagCheckered,
} from "react-icons/fa";


const typeStyles = {
  registration: "bg-gray-900 text-white",
  opening: "bg-gray-900 text-white",
  keynote: "bg-black text-white",
  talk: "bg-gray-800 text-white",
  panel: "bg-white text-gray-900 border",
  break: "bg-gray-100 text-gray-800",
  lunch: "bg-gray-100 text-gray-800",
  closing: "bg-gray-900 text-white",
};

const typeLabel = (type) => {
  switch (type) {
    case "registration": return "Registration";
    case "opening": return "Opening";
    case "keynote": return "Keynote";
    case "talk": return "Talk";
    case "panel": return "Panel";
    case "break": return "Break";
    case "lunch": return "Lunch";
    case "closing": return "Closing";
    default: return "Session";
  }
};

const getSessionIcon = (type) => {
  switch (type) {
    case "registration": return <FaUserCheck className="text-xl text-gray-500" />;
    case "opening": return <FaPlay className="text-xl text-gray-500" />;
    case "keynote": return <FaMicrophoneAlt className="text-xl text-gray-500" />;
    case "talk": return <FaCommentDots className="text-xl text-gray-500" />;
    case "panel": return <FaUsers className="text-xl text-gray-500" />;
    case "break": return <FaCoffee className="text-xl text-gray-500" />;
    case "lunch": return <FaUtensils className="text-xl text-gray-500" />;
    case "closing": return <FaFlagCheckered className="text-xl text-gray-500" />;
    default: return <FaUsers className="text-xl text-gray-500" />;
  }
};

const Timeline = () => {
  return (
    <section id="agenda" className="relative py-16 sm:py-20 bg-white">
 <div className="max-w-6xl mx-auto px-4 flex items-start">

        {/* Team Meeting Image - visible on md+ */}
   



        {/* Timeline Content */}
        <div className="flex-1">
          {/* Heading */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Agenda <span className="text-gray-500">Timeline</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-600">
              A high-impact day of insights, panels, and networking.
            </p>
            <div className="mx-auto mt-4 h-1 w-24 bg-gray-900/80 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gray-200" aria-hidden="true" />

            <ul role="list" className="space-y-10">
              {agenda.map((item, idx) => (
                <li key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {/* Left side */}
                  <div className="md:pr-10 md:text-right flex flex-col items-center md:items-end">
                    <div className="mb-2">{getSessionIcon(item.type)}</div>
                    <div className="inline-flex items-center gap-2">
                      <span className="text-xs font-medium tracking-wider uppercase text-gray-500">
                        {typeLabel(item.type)}
                      </span>
                    </div>
                    <div className="mt-1 text-lg font-semibold text-gray-900">{item.time}</div>
                  </div>

                  {/* Right side */}
                  <div className="relative md:pl-10">
                    <span className="hidden md:block absolute -left-[9px] top-2 h-4 w-4 rounded-full border-2 border-gray-900 bg-white" aria-hidden="true" />
                    
                    <div
                      className={[
                        "rounded-2xl p-5 shadow-sm",
                        item.type === "panel" ? "border" : "",
                        typeStyles[item.type] || "bg-white text-gray-900",
                      ].join(" ")}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base sm:text-lg font-semibold leading-snug">
                          {item.title}
                        </h3>
                        <span
                          className={[
                            "hidden sm:inline-flex items-center rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap",
                            item.type === "panel" ? "bg-gray-900 text-white" : "bg-white/20 text-white border-white/30",
                            item.type === "panel" ? "" : (item.type === "keynote" || item.type === "talk" || item.type === "opening" || item.type === "closing") ? "" : "bg-gray-200 text-gray-900 border-0",
                          ].join(" ")}
                        >
                          {typeLabel(item.type)}
                        </span>
                      </div>

                      {item.description && (
                        <p className="mt-2 text-sm leading-relaxed opacity-90">
                          {item.description}
                        </p>
                      )}

                      {Array.isArray(item.speakers) && item.speakers.length > 0 && (
                        <div className="mt-3">
                          <ul className="space-y-1">
                            {item.speakers.map((sp, i) => (
                              <li key={i} className="text-sm leading-relaxed opacity-90">
                                • {sp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
