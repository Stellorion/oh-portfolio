import { SectionProps } from "@/types/header"
import Image from "next/image"

type AboutSectionProps = Pick<SectionProps, 'aboutRef'>

const AboutSection = ({ aboutRef }: AboutSectionProps) => {
  return (
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
                        src="/stellorion.png"
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
                </div>
              </div>
            </div>
          </section>
  )
}

export default AboutSection