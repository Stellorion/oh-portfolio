import { SectionProps } from "@/types/header"

type SkillsSectionProps = Pick<SectionProps, 'skillsRef'>

export default function SkillsSection({ skillsRef }: SkillsSectionProps) {
  return (
    <section ref={skillsRef} className="w-full py-20 bg-zinc-950 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
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
                "GraphQL",
                "Firebase",
                "React Native",
                ".NET",
                "QA",
                "Python",
                "C / C++",
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
  )
}