import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProjectShowcase from "@/components/project-showcase"
import SkillsCloud from "@/components/skills-cloud"
import ExperienceTimeline from "@/components/experience-timeline"
import BlogPreview from "@/components/blog-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import RoleTypewriter from "@/components/role-typewriter"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"></div>

        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="px-3 py-1 text-sm bg-background/50 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for work
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1 text-sm bg-background/50 backdrop-blur-sm">
                    Dhaka, Bangladesh
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-primary dark:from-slate-100 dark:via-slate-200 dark:to-primary-foreground text-transparent bg-clip-text">
                  Md. Sazzad Hossain
                </h1>
                <div className="h-14 md:h-16 overflow-hidden">
                  <RoleTypewriter />
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed">
                  Building elegant, user-centric web experiences with modern technologies.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link href="/projects">View Projects</Link>
                </Button>
              </div>

              <div className="pt-2">
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-muted-foreground">2+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                    <span className="text-muted-foreground">Full Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/40 to-purple-600/40 rounded-lg blur opacity-20 dark:opacity-30 animate-pulse"></div>
              <div className="relative h-[450px] rounded-lg bg-white/90 dark:bg-slate-900/90 p-6 shadow-xl overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>

                <div className="font-mono text-sm text-slate-700/90 dark:text-slate-300/90 space-y-2">
                  <p>
                    <span className="text-purple-600/90 dark:text-purple-400/90">const</span>{" "}
                    <span className="text-blue-600/90 dark:text-blue-400/90">developer</span> = {"{"}
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500/90">name:</span>{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'Md. Sazzad Hossain'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500/90">role:</span>{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'Software Developer'</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500/90">skills:</span> [
                    <span className="text-green-600/90 dark:text-green-400/90">'React'</span>,{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'Next.js'</span>,{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'TypeScript'</span>,{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'Node.js'</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-500/90">experience:</span>{" "}
                    <span className="text-orange-600/90 dark:text-orange-400/90">2</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-purple-600/90 dark:text-purple-400/90">contact</span>: () {"=> {"}
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-500/90">email:</span>{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'sazzad.hossain882@gmail.com'</span>,
                  </p>
                  <p className="pl-8">
                    <span className="text-slate-500/90">phone:</span>{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'+8801706419870'</span>,
                  </p>
                  <p className="pl-4">{"}"},</p>
                  <p className="pl-4">
                    <span className="text-purple-600/90 dark:text-purple-400/90">currentStatus</span>: () {"=> {"}
                  </p>
                  <p className="pl-8">
                    <span className="text-blue-600/90 dark:text-blue-400/90">return</span>{" "}
                    <span className="text-green-600/90 dark:text-green-400/90">'Building amazing web experiences'</span>
                    ;
                  </p>
                  <p className="pl-4">{"}"}</p>
                  <p>{"}"}</p>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                  <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-150"></div>
                  <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              EXPERTISE
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies I've mastered to build modern, scalable applications.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="state">State</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-8">
              <SkillsCloud
                skills={[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Angular",
                  "Tailwind CSS",
                  "ShadCN",
                  "Ant Design",
                  "Material UI",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Prisma",
                  "Mongoose",
                  "Redux Toolkit",
                  "RTK Query",
                  "Context API",
                  "TanStack Query",
                  "TanStack Router",
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Chrome DevTools",
                  "Netlify",
                  "Vercel",
                  "Figma",
                  "REST APIs",
                ]}
              />
            </TabsContent>

            <TabsContent value="frontend" className="mt-8">
              <SkillsCloud
                skills={[
                  "HTML5",
                  "CSS3",
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Angular",
                  "Tailwind CSS",
                  "ShadCN",
                  "Ant Design",
                  "Material UI",
                  "Responsive Design",
                  "CSS Modules",
                  "SCSS",
                  "Framer Motion",
                  "Web Accessibility",
                ]}
              />
            </TabsContent>

            <TabsContent value="backend" className="mt-8">
              <SkillsCloud
                skills={[
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Prisma",
                  "Mongoose",
                  "RESTful APIs",
                  "API Design",
                  "Authentication",
                  "Authorization",
                  "Database Design",
                ]}
              />
            </TabsContent>

            <TabsContent value="state" className="mt-8">
              <SkillsCloud
                skills={[
                  "Redux Toolkit",
                  "RTK Query",
                  "Context API",
                  "TanStack Query",
                  "TanStack Router",
                  "Local State",
                  "Zustand",
                  "Recoil",
                  "State Machines",
                  "Immutable State",
                ]}
              />
            </TabsContent>

            <TabsContent value="tools" className="mt-8">
              <SkillsCloud
                skills={[
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
                  "Docker",
                  "CI/CD",
                ]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl rounded-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
            <div>
              <Badge variant="outline" className="mb-4">
                PORTFOLIO
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl">
                A selection of my recent work showcasing my technical skills and problem-solving abilities.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <ProjectShowcase />
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              CAREER
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Professional Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional experience building digital products and working with teams around the world.
            </p>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              EDUCATION
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Academic Background</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My educational foundation that supports my professional expertise.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science & Engineering</h3>
                  <Badge variant="outline" className="whitespace-nowrap">
                    2017 - 2022
                  </Badge>
                </div>
                <p className="text-xl text-muted-foreground mb-4">Northern University Bangladesh</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>• Focused on software development, algorithms, and data structures</p>
                  <p>• Participated in programming competitions and hackathons</p>
                  <p>• Completed capstone project on web application development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
            <div>
              <Badge variant="outline" className="mb-4">
                INSIGHTS
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
              <p className="text-muted-foreground max-w-2xl">
                Thoughts, insights, and tutorials on web development and technology.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <BlogPreview />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 blur-3xl rounded-full"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-xl blur opacity-30 dark:opacity-40"></div>
              <div className="relative bg-white/90 dark:bg-slate-900/90 rounded-xl p-10 shadow-lg text-center backdrop-blur-sm">
                <Badge variant="outline" className="mb-4">
                  CONNECT
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Have a project in mind or looking to hire a skilled developer? I'd love to hear from you and discuss
                  how we can collaborate.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <a href="mailto:sazzad.hossain882@gmail.com">sazzad.hossain882@gmail.com</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
