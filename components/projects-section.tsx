import { SectionProps } from "@/types/header"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

type Project = {
  title: string
  description: string
  tech: string[]
  url: string
  image: string
}

const projects: Project[] = [
  {
    title: "Enter Planner",
    description: "A to-do list app with a calendar and user authentication (login/signup) using Next.js.",
    tech: ["Next.js", "Prisma/Neon", "Tailwind css"],
    url: "https://github.com/Stellorion/enter-planner-prototype",
    image: "/enter-planner.png" // Add your image path here
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode and animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/Stellorion/oh-portfolio",
    image: "/oh-portfolio.png"
  },
  {
    title: "Weekly Quickly",
    description: "Soon to be a web app for healthy food.",
    tech: ["Next.js", "Tailwind CSS"],
    url: "https://github.com/Stellorion/weekly-quickly",
    image: "/weekly-quickly.png"
  },
  {
    title: "My Store MGT",
    description:
      "A Node.js and React-based store management app that allows users to browse and order products, using MongoDB for data management.",
    tech: ["React", "Node.js", "MongoDB"],
    url: "https://github.com/Stellorion/my-store-mgt",
    image: "/placeholder.svg"
  },
  {
    title: "PixelMaster",
    description:
      "A desktop app in C# with Windows Forms and OpenCV for image processing, allowing users to draw, apply filters, and add text overlays.",
    tech: ["C#", "OpenCV", "Windows Forms"],
    url: "https://github.com/Stellorion/PixelMaster",
    image: "/placeholder.svg"
  },
  {
    title: "Py-Encryption",
    description:
      "A Python script encrypts and decrypts text using XOR encoding and shuffling, allowing users to process file contents and save the result.",
    tech: ["Python", "XOR", "File Handling"],
    url: "https://github.com/Stellorion/Py-Encryption",
    image: "/placeholder.svg"
  },
]

type ProjectsSectionProps = Pick<SectionProps, 'projectsRef' | 'scrollToSection'>

const ProjectsSection = ({ projectsRef, scrollToSection }: ProjectsSectionProps) => {
  return (
    <section ref={projectsRef} className="w-full py-20 bg-zinc-950 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden group hover:border-red-500/50 transition-colors"
            >
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors flex items-center gap-2"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </Link>
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
  )
}

export default ProjectsSection
