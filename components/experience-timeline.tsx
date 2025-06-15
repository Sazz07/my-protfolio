"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"

// This array can be expanded with more experiences in the future
const experiences = [
  {
    title: "Software Developer",
    company: "Tutors Finland Oy",
    location: "Helsinki, Finland",
    period: "March 2024 - Present",
    description: [
      "Contributed to the development of NeduAI, an AI-powered career planning platform, using React.js and TypeScript to deliver high-performance, scalable UI components.",
      "Collaborated with a globally distributed team to integrate RESTful APIs, secure authentication, and data-driven features across projects.",
      "Focused on SSR optimization, reusable architecture, and accessibility to enhance mobile and desktop user experience.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Repliq Limited",
    location: "Dhaka, Bangladesh",
    period: "April 2023 - March 2024",
    description: [
      "Developed front-end modules for Pharmik, a pharmaceutical e-commerce platform, implementing real-time chat and multi-client features using Next.js.",
      "Engineered the Pro HR dashboard using Next.js and Tailwind-UI, streamlining recruiter workflows and automating CV parsing and tracking.",
      "Integrated REST APIs and contributed to UI performance enhancements across high-traffic business tools.",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "TechSolutions Inc.",
    location: "Remote",
    period: "September 2022 - March 2023",
    description: [
      "Developed and maintained responsive websites for various clients using HTML, CSS, JavaScript, and React.",
      "Collaborated with designers to implement pixel-perfect UI components and ensure cross-browser compatibility.",
      "Participated in code reviews and contributed to improving development standards and practices.",
    ],
  },
  {
    title: "Web Development Intern",
    company: "Digital Innovators",
    location: "Dhaka, Bangladesh",
    period: "May 2022 - August 2022",
    description: [
      "Assisted in the development of web applications using React and Node.js under senior developer supervision.",
      "Implemented UI designs and helped troubleshoot frontend issues across multiple projects.",
      "Gained hands-on experience with version control systems, agile methodologies, and collaborative development.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Self-employed",
    location: "Remote",
    period: "January 2022 - May 2022",
    description: [
      "Designed and developed custom websites for small businesses and individual clients.",
      "Created responsive layouts and interactive elements using modern CSS and JavaScript.",
      "Managed client relationships and delivered projects within agreed timelines and budgets.",
    ],
  },
]

export default function ExperienceTimeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="relative max-w-3xl mx-auto">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10 transform md:-translate-x-1/2"></div>

      {/* Experience items */}
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-1/2 z-10"></div>

            {/* Content */}
            <div className={`md:w-1/2 pl-8 ${index % 2 === 0 ? "md:pl-0 md:pr-8" : "md:pl-8 md:pr-0"}`}>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30"></div>
                <div className="relative bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg">
                  <div className="flex flex-col gap-2 mb-4">
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-muted-foreground">
                      <span>{experience.company}</span>
                      <span>•</span>
                      <span>{experience.location}</span>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.period}
                    </Badge>
                  </div>

                  <ul className="space-y-4 text-muted-foreground">
                    {experience.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
