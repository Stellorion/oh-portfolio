import { HeaderProps } from "@/types/header"

type HeroSectionProps = Pick<HeaderProps, 'scrollToSection' | 'homeRef' | 'projectsRef' | 'aboutRef'>

const HeroSection = ({ scrollToSection, homeRef, projectsRef, aboutRef }: HeroSectionProps) => {
  return (
    <section
      ref={homeRef}
      className="flex h-screen items-center justify-center relative pt-20 overflow-hidden"
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
  )
}

export default HeroSection
