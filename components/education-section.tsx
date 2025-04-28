import { SectionProps } from "@/types/header"
import { Code, GraduationCap } from "lucide-react"

type EducationSectionProps = Pick<SectionProps, 'educationRef'>

export default function EducationSection({ educationRef }: EducationSectionProps) {
  return (
    <section ref={educationRef} className="w-full py-20 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
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
  )
}
