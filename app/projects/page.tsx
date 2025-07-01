'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useProjects } from '@/lib/tanstack';

// Static fallback data
const staticProjects = [
  {
    id: 'neduai',
    title: 'NeduAI',
    description:
      'AI-powered career planning platform with personalized recommendations and interactive roadmaps.',
    longDescription:
      'NeduAI is an innovative career planning platform that leverages artificial intelligence to provide personalized career recommendations and interactive learning roadmaps.',
    tags: ['React.js', 'TypeScript', 'RESTful API'],
    category: 'Web Application',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/neduai',
    demoLink: 'https://neduai.example.com',
    githubLink: 'https://github.com/example/neduai',
    type: 'personal', // personal project with GitHub link
  },
  {
    id: 'pharmik',
    title: 'Pharmik',
    description:
      'Pharmaceutical e-commerce platform with real-time chat and multi-client features.',
    longDescription:
      'Pharmik is a comprehensive pharmaceutical e-commerce platform designed to connect pharmacies, distributors, and customers with real-time communication features.',
    tags: ['Next.js', 'Tailwind CSS', 'WebSockets'],
    category: 'E-Commerce',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/pharmik',
    demoLink: 'https://pharmik.example.com',
    type: 'client', // client project without GitHub link
  },
  {
    id: 'pro-hr-dashboard',
    title: 'Pro HR Dashboard',
    description:
      'Streamlined recruiter workflows with automated CV parsing and candidate tracking.',
    longDescription:
      'Pro HR Dashboard is a comprehensive human resources management tool designed to streamline recruiter workflows with powerful automation features.',
    tags: ['Next.js', 'Tailwind UI', 'REST API'],
    category: 'Dashboard',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/pro-hr-dashboard',
    demoLink: 'https://prohr.example.com',
    type: 'client', // client project without GitHub link
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    description:
      'Full-featured online store with product management, cart functionality, and payment processing.',
    longDescription:
      'A complete e-commerce solution with advanced product management, shopping cart functionality, and secure payment processing integration.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'E-Commerce',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/ecommerce-platform',
    demoLink: 'https://ecommerce.example.com',
    githubLink: 'https://github.com/example/ecommerce',
    type: 'personal', // personal project with GitHub link
  },
  {
    id: 'task-management',
    title: 'Task Management App',
    description:
      'Collaborative task management tool with real-time updates and team collaboration features.',
    longDescription:
      'A productivity application that helps teams manage tasks, track progress, and collaborate effectively with real-time updates.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'Productivity',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/task-management',
    demoLink: 'https://tasks.example.com',
    githubLink: 'https://github.com/example/tasks',
    type: 'personal', // personal project with GitHub link
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'Modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    longDescription:
      'A personal portfolio website showcasing projects, skills, and professional experience with a modern, responsive design.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'Portfolio',
    image: '/placeholder.svg?height=600&width=800',
    link: '/projects/portfolio-website',
    demoLink: 'https://portfolio.example.com',
    githubLink: 'https://github.com/example/portfolio',
    type: 'personal', // personal project with GitHub link
  },
];

const categories = [
  'All',
  'Web Application',
  'E-Commerce',
  'Dashboard',
  'Productivity',
  'Portfolio',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [projects, setProjects] = useState(staticProjects);

  // Fetch projects using TanStack Query
  const { data: projectsData, isLoading, isError } = useProjects();

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className='min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950'>
      <div className='container mx-auto max-w-6xl'>
        <div className='mb-12'>
          <Button asChild variant='ghost' size='sm' className='mb-4'>
            <Link href='/'>
              <ArrowLeft className='mr-2 h-4 w-4' />
              Back to Home
            </Link>
          </Button>

          <div className='text-center max-w-3xl mx-auto'>
            <Badge variant='outline' className='mb-4'>
              PORTFOLIO
            </Badge>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>My Projects</h1>
            <p className='text-muted-foreground'>
              A collection of my work showcasing my skills in web development,
              from frontend interfaces to full-stack applications.
            </p>
          </div>
        </div>

        <Tabs defaultValue='All' className='w-full mb-12'>
          <div className='flex justify-center'>
            <TabsList className='grid grid-cols-3 md:grid-cols-6'>
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className='overflow-hidden h-full flex flex-col group hover:border-primary/50 transition-all duration-300'>
                <div className='relative aspect-video overflow-hidden'>
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4'>
                    <div className='flex gap-2'>
                      <Button
                        asChild
                        variant='secondary'
                        size='sm'
                        className='rounded-full'
                      >
                        <Link href={project.link}>View Details</Link>
                      </Button>
                      <Button
                        asChild
                        variant='secondary'
                        size='icon'
                        className='rounded-full'
                      >
                        <a
                          href={project.demoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          <ExternalLink className='h-4 w-4' />
                        </a>
                      </Button>
                      {project.type === 'personal' && project.githubLink && (
                        <Button
                          asChild
                          variant='secondary'
                          size='icon'
                          className='rounded-full'
                        >
                          <a
                            href={project.githubLink}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='h-4 w-4' />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className='p-6 flex-grow flex flex-col'>
                  <div className='mb-2'>
                    <Badge variant='outline'>{project.category}</Badge>
                  </div>
                  <Link href={project.link} className='group'>
                    <h2 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>
                      {project.title}
                    </h2>
                  </Link>
                  <p className='text-muted-foreground mb-4'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mt-auto'>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant='secondary' className='text-xs'>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
