import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = React.lazy(() => import("./Navbar"));

export const Home = () => {
  const skills = [
    { name: "Machine Leaning", icon: "/ml.png" },
    { name: "Deep Learning", icon: "/dl.png" },
    { name: "React Js", icon: "/react.png" },
    { name: "JavaScript", icon: "/js.png" },
    { name: "TypeScript", icon: "/ts.png" },
    { name: "TailWind CSS", icon: "/tailwind.png" },
    { name: "Math", icon: "/math.png" },
    { name: "SQL", icon: "/sql.png" },
    { name: "Git", icon: "/git.png" },
    { name: "Python", icon: "/python.png" },
  ];

  const experiences = [
    {
      year: "2024 December - Present",
      side: "left",
      role: "Frontend Developer",
      company: "Central Institute of Classical Tamil",
      description:
        "Built interactive Web Pages with React, Tailwind, and TypeScript.",
    },
    {
      year: "2024",
      side: "right",
      role: "Developer",
      company: "LiveWires",
      description: "Engaged in Developing Projects in my College Club",
    },
    {
      year: "2022 - Present",
      side: "left",
      role: "Math Tutor",
      company: "Freelance",
      description:
        "Tutored students in Mathematics, focusing on problem-solving and conceptual understanding.",
    },
  ];

  const projects = [
    {
      name: "Leaderboard",
      tech: ["Python", "Selenium"],
      description:
        "A web scraping project that fetches data from a website and displays it in a leaderboard format.",
      hovercontenrt:
        "A Python-based web scraping project that extracts dynamic data from a live website using Selenium and displays it in a clean, sortable leaderboard format using Flask for the frontend. Ideal for learning automation, DOM parsing, and backend integration.",
      image: "",
    },
    {
      name: "Document Retrieval using RAG",
      tech: ["Python", "LangChain", "HuggingFace"],
      description:
        "A project that uses LangChain and HuggingFace to retrieve documents based on user queries.",
      hovercontenrt:
        "A project that utilizes LangChain and HuggingFace to retrieve documents based on user queries. It demonstrates the integration of natural language processing and document retrieval techniques.",
      image: "",
    },
  ];

  const [hover,setHover] = useState<number|null>(null);

  return (
    <div className="w-full">
      <div className="w-full flex">
        <Navbar />
      </div>
      <section id="home" className="scroll-smooth">
        <div className="flex w-full bg-black p-6 montserrat">
          <div className="flex w-full flex-row justify-between items-stretch gap-4">
            <div className="flex w-1/2 rounded-lg flex-col p-4">
              <div className="flex w-full flex-row border-2 border-red-900 p-4">
                <img
                  src="/goku.jpg"
                  alt="pfp"
                  className="rounded-full w-[400px] h-[200px]"
                />
                <div className="flex flex-col w-full justify-center items-center text-white text-xl gap-3 ">
                  <h1>HEERAJETH M</h1>
                  <p>Frontend Developer And Data Analyst</p>
                  <p>M.Sc Graduate</p>
                </div>
              </div>
            </div>
            <div className="flex w-1/2 flex-col justify-center items-center text-white text-xl p-4 rounded-lg border-2 border-red-900">
              <p>
                I'm a passionate frontend developer with hands-on experience
                building scalable, accessible, and performance-focused web
                applications using React and Tailwind CSS. My academic
                foundation in Data Science empowers me to understand complex
                data, optimize user experiences, and build smarter UIs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-start items-center bg-red-900 p-6 montserrat flex-col gap-4">
          <h1 className="text-5xl">SKILLS</h1>
          <div className="flex w-full flex-row gap-2">
            <div className="flex flex-col justify-start gap-4 items-start w-1/2 border-2 p-4 rounded-lg">
              {skills.slice(0, 5).map((skill, index) => (
                <motion.span
                  key={index}
                  className={`flex flex-row justify-start items-center gap-3 rounded-lg bg-black p-4 w-[300px]`}
                  style={{ marginLeft: `${(index + 1) * 10}%` }}
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-10 h-10`}
                  />
                  <span className="text-white text-lg">{skill.name}</span>
                </motion.span>
              ))}
            </div>
            <div className="flex flex-col justify-start gap-4 items-end w-1/2 border-2 p-4 rounded-lg">
              {skills.slice(5, 10).map((skill, index) => (
                <motion.span
                  key={index}
                  className={`flex flex-row justify-start items-center gap-3 rounded-lg bg-black p-4 w-[300px]`}
                  style={{ marginRight: `${(index + 1) * 10}%` }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10"
                  />
                  <span className="text-white text-lg">{skill.name}</span>
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="exp">
        <div className="flex w-full p-6 bg-black montserrat flex-col gap-4">
          <h1 className="w-full flex justify-center text-4xl text-white">
            EXPERIENCE
          </h1>
          <div className="relative mx-auto py-6">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative w-full my-8 flex ${
                  exp.side === "left"
                    ? "justify-start pr-8"
                    : "justify-end pl-8"
                }`}
              >
                <div
                  className={`absolute top-3 h-px w-6 border-t  border-gray-400 z-0 ${
                    exp.side === "left"
                      ? "left-1/2 -translate-x-full"
                      : "left-1/2"
                  }`}
                ></div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-700 rounded-full z-10"></div>

                <div className="w-1/2 flex flex-col items-center z-10">
                  <div
                    className={`bg-white shadow-md rounded-lg p-4  ${
                      exp.side === "left" ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="font-semibold text-red-900">{exp.role}</h3>
                    <h3>{exp.company}</h3>
                    <p className="text-sm text-gray-500 mb-2">{exp.year}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="proj">
        <div className="flex w-full p-6 bg-red-900 montserrat items-center text-white flex-col gap-4">
          <h1 className="flex w-full justify-center text-4xl text-white">
            PROJECTS
          </h1>
          <div className="flex w-full flex-col justify-center gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex w-full ${
                  index % 2 == 0 ? "justify-start" : "justify-end"
                } items-center flex-row`}
              >
                <div className={`flex flex-col bg-black p-4 rounded-lg text-white gap-4 ${hover==index?'w-2/3 h-[600px]':'w-1/2'} transition-all duration-300 h-[400px]`} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(null)}>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-4xl montserrat">
                      {project.name}
                    </h1>
                    <p className="flex flex-row gap-3 mt-2">
                      {project.tech.map((t, idx) => (
                        <p key={idx}>{t}</p>
                      ))}
                    </p>
                    <p className="text-sm text-white mt-2">
                      {project.description}
                    </p>
                    {hover==index && <p className="text-sm text-white mt-2 transition-all duration-300">{project.hovercontenrt}</p>}
                  </div>
                  <div className="flex justify-center items-start">
                    <img src="/goku.jpg" />
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
