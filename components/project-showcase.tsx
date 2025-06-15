"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    id: "neduai",
    title: "NeduAI",
    description: "AI-powered career planning platform with personalized recommendations and interactive roadmaps.",
    tags: ["React.js", "TypeScript", "RESTful API"],
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/neduai",
    demoLink: "https://neduai.example.com",
    githubLink: "https://github.com/example/neduai",
    type: "personal", // personal project with GitHub link
  },
  {
    id: "pharmik",
    title: "Pharmik",
    description: "Pharmaceutical e-commerce platform with real-time chat and multi-client features.",
    tags: ["Next.js", "Tailwind CSS", "WebSockets"],
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/pharmik",
    demoLink: "https://pharmik.example.com",
    type: "client", // client project without GitHub link
  },
  {
    id: "pro-hr-dashboard",
    title: "Pro HR Dashboard",
    description: "Streamlined recruiter workflows with automated CV parsing and candidate tracking.",
    tags: ["Next.js", "Tailwind UI", "REST API"],
    image: "/placeholder.svg?height=600&width=800",
    link: "/projects/pro-hr-dashboard",
    demoLink: "https://prohr.example.com",
    type: "client", // client project without GitHub link
  },
]

export default function ProjectShowcase() {
  const [activeProject, setActiveProject] = useState(projects[0])

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {projects.map((project) => (
          <motion.div key={project.id} whileHover={{ x: 5 }} onClick={() => setActiveProject(project)}>
            <Card
              className={`cursor-pointer transition-all duration-300 ${
                activeProject.id === project.id
                  ? "border-primary/50 bg-primary/5 dark:bg-primary/10"
                  : "hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/5"
              }`}
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="lg:col-span-3">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden border">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30"></div>
            <div className="relative w-full h-full">
              <Image
                src={activeProject.image || "/placeholder.svg"}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="rounded-full">
              <Link href={activeProject.link}>
                View Project Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="icon" className="rounded-full">
              <a href={activeProject.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Live Demo</span>
              </a>
            </Button>

            {activeProject.type === "personal" && activeProject.githubLink && (
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
