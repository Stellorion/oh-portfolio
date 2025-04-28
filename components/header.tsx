'use client'

import { Code, GraduationCap, Layers, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { HeaderProps } from "@/types/header"

export default function Header({
  activeSection,
  scrollToSection,
  homeRef,
  aboutRef,
  projectsRef,
  educationRef,
  skillsRef,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
        </nav>
      </div>
    </header>
  )
}