"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Code, Server, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// In a real application, you would fetch this data from an API or CMS
const projects = {
  neduai: {
    title: "NeduAI",
    description: "AI-powered career planning platform with personalized recommendations and interactive roadmaps.",
    longDescription:
      "NeduAI is an innovative career planning platform that leverages artificial intelligence to provide personalized career recommendations and interactive learning roadmaps. The platform analyzes user skills, interests, and goals to create tailored career paths and learning resources.",
    role: "As a Software Developer at Tutors Finland Oy, I contributed to the development of NeduAI using React.js and TypeScript to deliver high-performance, scalable UI components. I collaborated with a globally distributed team to integrate RESTful APIs, secure authentication, and data-driven features across the platform.",
    technologies: ["React.js", "TypeScript", "RESTful API", "Authentication", "Responsive Design"],
    challenges:
      "One of the main challenges was creating an intuitive user interface that could present complex career data and learning paths in an accessible way. We also needed to ensure the platform was responsive and performed well across all devices.",
    solutions:
      "I implemented a modular component architecture that allowed for flexible and responsive UI elements. We used TypeScript to ensure type safety and reduce bugs in production. The team also implemented efficient data fetching strategies to optimize performance.",
    features: [
      "Personalized career recommendations based on user skills and interests",
      "Interactive learning roadmaps with progress tracking",
      "Resource library with curated learning materials",
      "User profile and skill assessment tools",
      "Integration with job boards and educational platforms",
    ],
    techStack: {
      frontend: ["React.js", "TypeScript", "Material UI", "Redux Toolkit", "Framer Motion"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
      devops: ["Docker", "GitHub Actions", "AWS"],
    },
    image: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    demoLink: "https://neduai.example.com",
    githubLink: "https://github.com/example/neduai",
    type: "personal", // personal project with GitHub link
  },
  pharmik: {
    title: "Pharmik",
    description: "Pharmaceutical e-commerce platform with real-time chat and multi-client features.",
    longDescription:
      "Pharmik is a comprehensive pharmaceutical e-commerce platform designed to connect pharmacies, distributors, and customers. The platform features real-time chat functionality, multi-client support, and a robust product management system.",
    role: "As a Frontend Developer at Repliq Limited, I developed front-end modules for Pharmik, implementing real-time chat and multi-client features using Next.js. I worked closely with the backend team to integrate APIs and ensure seamless data flow throughout the application.",
    technologies: ["Next.js", "Tailwind CSS", "WebSockets", "State Management", "API Integration"],
    challenges:
      "The main challenge was implementing real-time communication features that would work reliably across different user roles and devices. We also needed to ensure the platform could handle a large catalog of pharmaceutical products with detailed information.",
    solutions:
      "I implemented WebSocket connections for real-time chat functionality and developed a responsive UI that adapted to different user roles. We used efficient state management techniques to handle complex product data and user interactions.",
    features: [
      "Real-time chat between pharmacies, distributors, and customers",
      "Multi-client support with role-based access control",
      "Comprehensive product catalog with search and filtering",
      "Order management and tracking system",
      "Secure payment processing integration",
    ],
    techStack: {
      frontend: ["Next.js", "Tailwind CSS", "React Query", "Socket.io Client", "Zustand"],
      backend: ["Node.js", "Express.js", "PostgreSQL", "Socket.io", "Redis"],
      devops: ["Vercel", "GitHub Actions", "Digital Ocean"],
    },
    image: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    demoLink: "https://pharmik.example.com",
    type: "client", // client project without GitHub link
  },
  "pro-hr-dashboard": {
    title: "Pro HR Dashboard",
    description: "Streamlined recruiter workflows with automated CV parsing and candidate tracking.",
    longDescription:
      "Pro HR Dashboard is a comprehensive human resources management tool designed to streamline recruiter workflows. The platform features automated CV parsing, candidate tracking, interview scheduling, and performance analytics.",
    role: "I engineered the Pro HR dashboard using Next.js and Tailwind-UI, focusing on creating an intuitive interface for HR professionals. I implemented features for CV parsing, candidate tracking, and reporting dashboards.",
    technologies: ["Next.js", "Tailwind UI", "REST API", "Data Visualization", "Form Handling"],
    challenges:
      "The main challenge was creating an efficient system for parsing and categorizing CV data from various formats. We also needed to design intuitive dashboards that could present complex HR metrics in an accessible way.",
    solutions:
      "I implemented a modular dashboard system with customizable widgets and filters. We used advanced form handling techniques for data entry and validation, and integrated with backend services for CV parsing and data processing.",
    features: [
      "Automated CV parsing and candidate data extraction",
      "Candidate tracking and pipeline management",
      "Interview scheduling and feedback collection",
      "Performance analytics and reporting dashboards",
      "Email notification system for recruiters and candidates",
    ],
    techStack: {
      frontend: ["Next.js", "Tailwind UI", "React Hook Form", "Recharts", "TanStack Query"],
      backend: ["Node.js", "Express.js", "MongoDB", "Natural Language Processing APIs"],
      devops: ["Vercel", "GitHub Actions", "MongoDB Atlas"],
    },
    image: "/placeholder.svg?height=600&width=1200",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    demoLink: "https://prohr.example.com",
    type: "client", // client project without GitHub link
  },
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const project = projects[slug as keyof typeof projects]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Button asChild>
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      <div className="container mx-auto max-w-5xl">
        <Button asChild variant="ghost" size="sm" className="mb-4">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                PROJECT
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.description}</p>
            </div>

            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-20 dark:opacity-30"></div>
              <div className="relative aspect-video rounded-xl overflow-hidden border">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoLink && (
                <Button asChild className="rounded-full">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.type === "personal" && project.githubLink && (
                <Button asChild variant="outline" className="rounded-full">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="tech-stack">Tech Stack</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{project.longDescription}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-4">My Role</h2>
                  <p className="text-muted-foreground">{project.role}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
                    <p className="text-muted-foreground">{project.challenges}</p>
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                    <h2 className="text-2xl font-semibold mb-4">Solutions</h2>
                    <p className="text-muted-foreground">{project.solutions}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tech-stack" className="mt-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-medium">Frontend</h3>
                      </div>
                      <ul className="space-y-2">
                        {project.techStack.frontend.map((tech, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-medium">Backend</h3>
                      </div>
                      <ul className="space-y-2">
                        {project.techStack.backend.map((tech, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Layers className="h-5 w-5 text-primary" />
                        <h3 className="text-lg font-medium">DevOps</h3>
                      </div>
                      <ul className="space-y-2">
                        {project.techStack.devops.map((tech, index) => (
                          <li key={index} className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="bg-white dark:bg-slate-900 rounded-lg p-6 shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.screenshots.map((screenshot, index) => (
                      <div key={index} className="relative aspect-video rounded-lg overflow-hidden border">
                        <Image
                          src={screenshot || "/placeholder.svg"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
