"use client"

import { useEffect, useRef, useState } from "react"
import Header from "@/components/header"
import ProjectsSection from "@/components/projects-section"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import SkillsSection from "@/components/skills-section"
import ScrollToTop from "@/components/scroll-to-top"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [showScrollTop, setShowScrollTop] = useState(false)

  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const educationRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }

      const scrollPosition = window.scrollY + 100

      const sections = [
        { id: "home", ref: homeRef },
        { id: "about", ref: aboutRef },
        { id: "projects", ref: projectsRef },
        { id: "education", ref: educationRef },
        { id: "skills", ref: skillsRef },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (
          section.ref.current &&
          section.ref.current.offsetTop <= scrollPosition
        ) {
          setActiveSection(section.id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-full min-h-screen bg-black text-white overflow-x-hidden">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        skillsRef={skillsRef}
      />

      <HeroSection
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        scrollToSection={scrollToSection}
      />

      <AboutSection aboutRef={aboutRef} />

      <ProjectsSection
        projectsRef={projectsRef}
        scrollToSection={scrollToSection}
      />

      <EducationSection educationRef={educationRef} />

      <SkillsSection skillsRef={skillsRef} />

      <Footer />

      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
    </div>
  )
}
