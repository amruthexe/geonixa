"use client";
import { useState } from "react";

const stories = [
  {
    title: "Upskilling students for tech-ready careers",
    quote:
      "“The learning dashboard and mentorship features helped me track my progress and stay consistent.”",
    description:
      "Through Edutech’s personalized learning analytics, over 10,000 learners improved their coding and problem-solving efficiency by 60%.",
    stats: [
      { number: "4.8/5", text: "Average Course Rating" },
      { number: "92%", text: "Completion Rate" },
      { number: "10,000+", text: "Learners Upskilled" },
    ],
    ratings: [
      { label: "Frontend Development", percent: 90 },
      { label: "Data Science", percent: 82 },
      { label: "AI & ML", percent: 75 },
      { label: "UI/UX Design", percent: 88 },
    ],
  },
  {
    title: "Building AI-driven learning culture",
    quote:
      "“AI recommendations on Edutech saved me hours of searching — I learned exactly what mattered for my career goals.”",
    description:
      "Students across 50+ institutions are leveraging Edutech’s AI-based course mapping to build personalized skill paths.",
    stats: [
      { number: "50+", text: "Institutions Partnered" },
      { number: "87%", text: "Learner Satisfaction" },
    ],
    ratings: [
      { label: "Machine Learning", percent: 85 },
      { label: "Data Analytics", percent: 90 },
      { label: "Cloud Computing", percent: 80 },
    ],
  },
  {
    title: "Corporate learners mastering new-age skills",
    quote:
      "“Edutech’s practical modules made transitioning to tech roles seamless for our employees.”",
    description:
      "Corporates adopted Edutech to train professionals in AI, automation, and analytics — leading to measurable performance boosts.",
    stats: [
      { number: "5,000+", text: "Corporate Learners" },
      { number: "70%", text: "Skill Growth" },
    ],
    ratings: [
      { label: "AI & Automation", percent: 78 },
      { label: "Project Management", percent: 82 },
      { label: "Data Visualization", percent: 89 },
    ],
  },
];

export default function SuccessStories() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Headings */}
       
        <h2 className="text-3xl md:text-4xl text-[#eb4917] text-center font-bold mb-4">
          Real results from real learners 🚀
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-gray-300 mb-10">
          {stories.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setActive(i)}
              className={`relative pb-2 text-base font-medium transition-all ${
                active === i
                  ? "text-orange-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-orange-600"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              Case {i + 1}
            </button>
          ))}
        </div>

        {/* Active Story */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {stories[active].title}
            </h2>
            <h3 className="italic text-gray-600 mb-4">
              {stories[active].quote}
            </h3>
            <p className="text-gray-600 mb-4">{stories[active].description}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {stories[active].stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-orange-50 border border-orange-100 shadow-sm text-center"
                >
                  <p className="text-2xl font-bold text-orange-600">
                    {stat.number}
                  </p>
                  <p className="text-gray-700 text-sm">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Graphs */}
          <div className="space-y-5">
            {stories[active].ratings.map((r, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{r.label}</span>
                  <span className="text-orange-600 font-semibold">
                    {r.percent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-orange-500 h-3 rounded-full"
                    style={{ width: `${r.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all"
          >
            View All Learner Stories
          </a>
        </div>
      </div>
    </section>
  );
}
