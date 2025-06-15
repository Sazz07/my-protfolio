"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center">
            <Button asChild variant="ghost" size="sm" className="mr-4">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
          <Button asChild className="rounded-full">
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            RESUME
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Resume</h1>
          <p className="text-muted-foreground">
            A comprehensive overview of my professional experience, skills, and education.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg mb-12">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h2 className="text-3xl font-bold">Md. Sazzad Hossain</h2>
                  <p className="text-xl text-muted-foreground">Software Developer</p>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1 text-muted-foreground">
                  <p>Faridabad, Grand-area, Dhaka-1204</p>
                  <p>+8801706419870</p>
                  <p>sazzad.hossain882@gmail.com</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Summary</h3>
                <p className="text-muted-foreground">
                  Creative and detail-oriented full-stack developer with over 2 years of hands-on experience designing
                  and building robust, scalable web applications. Skilled in front-end and back-end technologies with a
                  passion for clean code, elegant design systems, and delivering value through thoughtful user
                  experiences. Strong collaborator with a problem-solving mindset, experience in international teams,
                  and a constant drive to learn and improve.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="experience" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Software Developer</h3>
                    <p className="text-muted-foreground">Tutors Finland Oy, Helsinki, Finland</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                    March 2024 - Present
                  </Badge>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Contributed to the development of NeduAI, an AI-powered career planning platform, using React.js
                      and TypeScript to deliver high-performance, scalable UI components.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Collaborated with a globally distributed team to integrate RESTful APIs, secure authentication,
                      and data-driven features across projects.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Focused on SSR optimization, reusable architecture, and accessibility to enhance mobile and
                      desktop user experience.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Frontend Developer</h3>
                    <p className="text-muted-foreground">Repliq Limited, Dhaka, Bangladesh</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                    April 2023 - March 2024
                  </Badge>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Developed front-end modules for Pharmik, a pharmaceutical e-commerce platform, implementing
                      real-time chat and multi-client features using Next.js.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Engineered the Pro HR dashboard using Next.js and Tailwind-UI, streamlining recruiter workflows
                      and automating CV parsing and tracking.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2"></div>
                    <span>
                      Integrated REST APIs and contributed to UI performance enhancements across high-traffic business
                      tools.
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Frontend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "HTML5",
                        "CSS3",
                        "SCSS",
                        "JavaScript",
                        "TypeScript",
                        "React.js",
                        "Next.js",
                        "Angular",
                        "Tailwind CSS",
                        "ShadCN",
                        "Ant Design",
                        "Material UI",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Backend</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Mongoose"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">State Management & Data Fetching</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Redux Toolkit",
                        "RTK Query",
                        "Context API",
                        "TanStack Query",
                        "TanStack Router",
                        "Local State",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Authentication & API</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["REST APIs", "Firebase Auth", "NextAuth", "Auth0", "Axios"].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Tools & Platforms</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Git",
                        "GitHub",
                        "VS Code",
                        "Chrome DevTools",
                        "Netlify",
                        "Vercel",
                        "Figma",
                        "Slack",
                        "ClickUp",
                        "Discord",
                        "MS Teams",
                        "Postman",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Soft Skills</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Communication",
                        "Teamwork",
                        "Time Management",
                        "Problem Solving",
                        "Adaptability",
                        "Critical Thinking",
                        "Calm Under Pressure",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="mb-2">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="education" className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold">Bachelor of Science in Computer Science & Engineering</h3>
                    <p className="text-muted-foreground">Northern University Bangladesh</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0">
                    2017 - 2022
                  </Badge>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <p>• Focused on software development, algorithms, and data structures</p>
                  <p>• Participated in programming competitions and hackathons</p>
                  <p>• Completed capstone project on web application development</p>
                  <p>• Gained foundational knowledge in computer science principles and practices</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Professional Certifications</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="font-medium">Advanced React and Redux</p>
                    <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                      2023
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="font-medium">Next.js Fundamentals</p>
                    <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                      2023
                    </Badge>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between">
                    <p className="font-medium">TypeScript for Professionals</p>
                    <Badge variant="outline" className="w-fit mt-1 sm:mt-0">
                      2022
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
