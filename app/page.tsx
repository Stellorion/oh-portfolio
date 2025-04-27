"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowUpCircle,
  Code,
  ExternalLink,
  GraduationCap,
  Layers,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import FooterUI from "@/components/footer-ui";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show/hide scroll to top button
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Update active section based on scroll position
      const scrollPosition = window.scrollY + 100;

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "education", ref: educationRef },
        { id: "skills", ref: skillsRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition
        ) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <div className="text-xl font-bold text-red-500">
              <span className="text-white">PORT</span>FOLIO
            </div>
            <ul className="hidden md:flex space-x-8">
              {[
                {
                  id: "home",
                  label: "Home",
                  icon: <Layers className="w-4 h-4" />,
                  ref: homeRef,
                },
                {
                  id: "about",
                  label: "About",
                  icon: <User className="w-4 h-4" />,
                  ref: aboutRef,
                },
                {
                  id: "projects",
                  label: "Projects",
                  icon: <Code className="w-4 h-4" />,
                  ref: projectsRef,
                },
                {
                  id: "education",
                  label: "Education",
                  icon: <GraduationCap className="w-4 h-4" />,
                  ref: educationRef,
                },
                {
                  id: "skills",
                  label: "Skills",
                  icon: <Layers className="w-4 h-4" />,
                  ref: skillsRef,
                },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.ref)}
                    className={cn(
                      "flex items-center gap-2 py-2 px-1 relative transition-colors",
                      activeSection === item.id
                        ? "text-red-500"
                        : "text-gray-400 hover:text-white"
                    )}
                  >
                    {item.icon}
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={homeRef}
        className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-black to-red-900/20 opacity-90" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-white">Hello, I'm </span>
              <span className="text-red-500">Osher Haimi</span>
            </h1>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Junior Software Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="px-6 py-3 bg-transparent border border-red-500 text-red-500 hover:text-white hover:bg-red-500/20 rounded-md transition-colors"
              >
                About Me
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-red-500 relative z-10">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Profile"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 border-2 border-red-500/50 rounded-lg" />
                <div className="absolute -top-4 -left-4 w-20 h-20 border border-red-500/30 rounded-md" />
              </div>
            </div>

            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <span className="text-red-500">&lt;</span>
                About Me
                <span className="text-red-500">/&gt;</span>
              </h2>
              <div className="h-1 w-20 bg-red-500 mb-6 rounded-full" />

              <p className="text-gray-300 mb-6">
                Passionate and self-motivated programmer with expertise in
                Next.js, Node.js, React, C#, and Python. I thrive on solving
                complex problems and continuously expanding my skill set. With a
                diploma in Software Engineering and a CEFR certificate, I have a
                strong foundation in both technical and communication skills.
                Always eager to take on new challenges, learn independently, and
                build efficient, scalable solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h3 className="text-red-500 font-medium mb-2">Name:</h3>
                  <p className="text-gray-300">Osher Haimi</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-2">Email:</h3>
                  <p className="text-gray-300">osher5209@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-2">Location:</h3>
                  <p className="text-gray-300">Israel</p>
                </div>
                <div>
                  <h3 className="text-red-500 font-medium mb-2">
                    Availability:
                  </h3>
                  <p className="text-gray-300">Full-time</p>
                </div>
              </div>

              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-flex items-center gap-2">
              <span className="text-red-500">&lt;</span>
              My Projects
              <span className="text-red-500">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project represents a
              unique challenge and showcases different aspects of my technical
              skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enter Planner",
                description:
                  "A to-do list app with a calendar and user authentication (login/signup) using Next.js.",
                tech: ["Next.js", "Prisma/Neon", "Tailwind css"],
                url: "https://github.com/Stellorion/enter-planner-prototype",
              },
              {
                title: "Portfolio Website",
                description:
                  "A responsive portfolio website with dark mode and animations.",
                tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
                url: "https://github.com/Stellorion/oh-portfolio",
              },
              {
                title: "Weekly Quickly",
                description: "Soon to be a web app for healthy food.",
                tech: ["Next.js", "Tailwind CSS"],
                url: "https://github.com/Stellorion/weekly-quickly",
              },
              {
                title: "My Store MGT",
                description:
                  "A Node.js and React-based store management app that allows users to browse and order products, using MongoDB for data management.",
                tech: ["React", "Node.js", "MongoDB"],
                url: "https://github.com/Stellorion/my-store-mgt",
              },
              {
                title: "PixelMaster",
                description:
                  "A desktop app in C# with Windows Forms and OpenCV for image processing, allowing users to draw, apply filters, and add text overlays.",
                tech: ["C#", "OpenCV", "Windows Forms"],
                url: "https://github.com/Stellorion/PixelMaster",
              },
              {
                title: "Py-Encryption",
                description:
                  "A Python script encrypts and decrypts text using XOR encoding and shuffling, allowing users to process file contents and save the result.",
                tech: ["Python", "XOR", "File Handling"],
                url: "https://github.com/Stellorion/Py-Encryption",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-red-500/50 transition-colors"
              >
                <div className="h-48 bg-zinc-800 relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    {/* Link the button to the project's URL */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center gap-2"
                    >
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-zinc-800 text-xs text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section ref={educationRef} className="py-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-flex items-center gap-2">
              <span className="text-red-500">&lt;</span>
              Education & Experience
              <span className="text-red-500">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              My academic background and professional journey that have shaped
              my skills and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-500">
                Education
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-red-500 before:to-transparent">
                {[
                  {
                    degree: "Software Engineering Diploma",
                    school: "Technological College",
                    years: "2022 - 2025",
                    description:
                      "Gained a strong foundation in software development, algorithms, data structures, and system design. Developed practical skills through hands-on projects in web development, databases, and object-oriented programming.",
                  },
                  {
                    degree: "CEFR B2 Certificate",
                    school: "TALMA",
                    years: "2023",
                    description:
                      "Achieved an upper-intermediate level of English proficiency (B2), demonstrating strong communication skills in both spoken and written contexts. Certified in grammar, vocabulary, listening, reading, and writing.",
                  },
                ].map((edu, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-zinc-900 border-2 border-red-500 rounded-full flex items-center justify-center z-10">
                      <GraduationCap className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-red-500 mb-2">{edu.school}</p>
                      <p className="text-sm text-gray-400 mb-3">{edu.years}</p>
                      <p className="text-gray-300 text-sm">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-500">
                Experience
              </h3>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-1/2 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-red-500 before:to-transparent">
                {[
                  {
                    position: "Personal Project",
                    company: "Freelance",
                    years: "2025 - Present",
                    description:
                      "Developing a to-do list app with a calendar and user authentication (login/signup) using Next.js. The project is connected to a database via Prisma to manage user data.",
                  },
                  {
                    position: "Final Year College Project",
                    company: "Technological College",
                    years: "2024-2025",
                    description:
                      "Developed a desktop application with a classmate using C# and Windows Forms (.NET), integrating OpenCV for image processing. The app enabled users to draw on images, apply filters, and add text overlays. Focused on core image manipulation algorithms and building a user-friendly interface.",
                  },
                ].map((exp, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute left-0 top-1 w-10 h-10 bg-zinc-900 border-2 border-red-500 rounded-full flex items-center justify-center z-10">
                      <Code className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-white mb-1">
                        {exp.position}
                      </h4>
                      <p className="text-red-500 mb-2">{exp.company}</p>
                      <p className="text-sm text-gray-400 mb-3">{exp.years}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-zinc-950 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 inline-flex items-center gap-2">
              <span className="text-red-500">&lt;</span>
              Skills & Expertise
              <span className="text-red-500">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-red-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              My technical skills and areas of expertise that I've developed
              throughout my career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {[
                  { name: "JavaScript / TypeScript", level: 95 },
                  { name: "React / Next.js", level: 90 },
                  { name: "HTML5 / CSS3", level: 95 },
                  { name: "Node.js / Express", level: 85 },
                  { name: "MongoDB / SQL", level: 75 },
                  { name: "C# / Java", level: 90 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-red-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-white">
                Other Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Git & GitHub",
                  "Responsive Design",
                  "RESTful APIs",
                  "Linux",
                  "Prisma",
                  "AWS",
                  "Firebase",
                  "Redux",
                  ".NET",
                  "QA",
                  "Python",
                  "C / C++",
                  "React Native",
                  "Performance Optimization",
                  "GraphQL",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center justify-center text-center hover:border-red-500 hover:text-red-500 transition-colors"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterUI />

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center z-50 transition-all duration-300",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <ArrowUpCircle className="w-6 h-6" />
      </button>
    </div>
  );
}
