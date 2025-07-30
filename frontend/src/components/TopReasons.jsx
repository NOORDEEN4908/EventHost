import { FaLightbulb, FaChartLine, FaHandshake, FaGraduationCap, FaShareAlt } from 'react-icons/fa';

const TopReasons = () => {
  const reasons = [
    {
      icon: <FaLightbulb className="text-3xl text-blue-600" />,
      title: "Learn",
      description: "Learn from industry experts and thought leaders.",
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Trends",
      description: "Stay ahead of emerging trends in banking.",
    },
    {
      icon: <FaHandshake className="text-3xl text-purple-600" />,
      title: "Connect",
      description: "Network with fellow banking professionals.",
    },
    {
      icon: <FaGraduationCap className="text-3xl text-orange-500" />,
      title: "Enhance",
      description: "Grow your knowledge, skills, and career network.",
    },
    {
      icon: <FaShareAlt className="text-3xl text-pink-600" />,
      title: "Share",
      description: "Share your insights and experiences with peers.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Top Reasons Why This Is the Only Conference You Need to Attend in 2025
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="font-semibold text-lg text-gray-700 mb-2">{reason.title}</h3>
            <p className="text-sm text-gray-500">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopReasons;
