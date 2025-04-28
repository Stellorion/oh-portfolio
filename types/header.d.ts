import { RefObject } from "react"

interface HeaderProps {
  activeSection: string
  scrollToSection: (ref: RefObject<HTMLElement | null>) => void
  homeRef: RefObject<HTMLElement | null>
  aboutRef: RefObject<HTMLElement | null>
  projectsRef: RefObject<HTMLElement | null>
  educationRef: RefObject<HTMLElement | null>
  skillsRef: RefObject<HTMLElement | null>
}

// Add these new types
type BaseProps = {
  scrollToSection: HeaderProps['scrollToSection']
}

type SectionRefs = {
  [K in 'homeRef' | 'aboutRef' | 'projectsRef' | 'educationRef' | 'skillsRef']?: HeaderProps[K]
}

export type SectionProps = BaseProps & SectionRefs

export type { HeaderProps }