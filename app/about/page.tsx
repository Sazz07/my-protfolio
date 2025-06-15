'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Code,
  Heart,
  Lightbulb,
  Coffee,
  BookOpen,
  Target,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <main className='min-h-screen py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950'>
      <div className='container mx-auto max-w-5xl'>
        <Button asChild variant='ghost' size='sm' className='mb-4'>
          <Link href='/'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back to Home
          </Link>
        </Button>

        <div className='text-center max-w-3xl mx-auto mb-12'>
          <Badge variant='outline' className='mb-4'>
            ABOUT ME
          </Badge>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            The Story Behind the Code
          </h1>
          <p className='text-muted-foreground'>
            Get to know me beyond the resume — my journey, values, and what
            drives me as a developer.
          </p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mb-16'>
          <div className='md:col-span-1'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='sticky top-24'
            >
              <div className='relative rounded-lg overflow-hidden aspect-square mb-6'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30'></div>
                <div className='relative h-full'>
                  <Image
                    src='/images/me.png'
                    alt='Md. Sazzad Hossain'
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-green-500'></div>
                  <span className='text-muted-foreground'>
                    Available for work
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-blue-500'></div>
                  <span className='text-muted-foreground'>
                    Dhaka, Bangladesh
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='h-1.5 w-1.5 rounded-full bg-purple-500'></div>
                  <span className='text-muted-foreground'>
                    2+ years experience
                  </span>
                </div>
              </div>

              <div className='mt-6'>
                <Button asChild className='w-full rounded-full'>
                  <Link href='/contact'>Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <div className='md:col-span-2 space-y-12'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <Code className='h-5 w-5 text-primary' />
                My Journey
              </h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  My path to becoming a software developer began with a
                  curiosity about how digital experiences are created. While
                  studying Computer Science at Northern University Bangladesh, I
                  discovered my passion for web development through building
                  small projects and experimenting with different technologies.
                </p>
                <p>
                  After graduating in 2022, I joined Repliq Limited as a
                  Frontend Developer where I had the opportunity to work on
                  real-world projects and collaborate with experienced
                  developers. This experience taught me not just technical
                  skills, but also the importance of teamwork, communication,
                  and delivering user-centered solutions.
                </p>
                <p>
                  In 2024, I took on a new challenge as a Software Developer at
                  Tutors Finland Oy, where I've been expanding my skills in
                  full-stack development and working with a globally distributed
                  team. Each step of my journey has deepened my appreciation for
                  clean code, thoughtful design, and the impact that
                  well-crafted digital experiences can have.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <Heart className='h-5 w-5 text-primary' />
                My Values
              </h2>
              <div className='grid sm:grid-cols-2 gap-4'>
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-primary'></div>
                      User-Centered Design
                    </h3>
                    <p className='text-muted-foreground'>
                      I believe that technology should serve people, not the
                      other way around. I approach every project with empathy
                      for the end user.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-primary'></div>
                      Continuous Learning
                    </h3>
                    <p className='text-muted-foreground'>
                      The tech landscape evolves rapidly, and I'm committed to
                      growing my skills and staying current with best practices
                      and new technologies.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-primary'></div>
                      Collaboration
                    </h3>
                    <p className='text-muted-foreground'>
                      I thrive in collaborative environments and believe that
                      diverse perspectives lead to better solutions and more
                      innovative products.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className='p-6'>
                    <h3 className='font-semibold mb-2 flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-primary'></div>
                      Quality & Attention to Detail
                    </h3>
                    <p className='text-muted-foreground'>
                      I take pride in writing clean, maintainable code and
                      paying attention to the small details that elevate good
                      products to great ones.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <Lightbulb className='h-5 w-5 text-primary' />
                My Approach
              </h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  I approach software development as both a science and an art.
                  The technical implementation needs to be solid, efficient, and
                  maintainable, but the user experience should also be
                  intuitive, engaging, and even delightful.
                </p>
                <p>
                  When tackling a new project, I start by understanding the core
                  problem and user needs before diving into code. I believe in
                  the power of planning and thoughtful architecture, but also in
                  the importance of iteration and feedback.
                </p>
                <p>
                  I'm particularly passionate about creating responsive,
                  accessible interfaces that work well for everyone, and I enjoy
                  the challenge of optimizing performance to deliver smooth
                  experiences even in constrained environments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <Coffee className='h-5 w-5 text-primary' />
                Beyond Coding
              </h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  When I'm not in front of a computer, you might find me
                  exploring photography, reading about design and technology
                  trends, or enjoying a good cup of coffee. I believe that
                  diverse interests and experiences enrich my perspective as a
                  developer.
                </p>
                <p>
                  I'm also passionate about mentoring and sharing knowledge. I
                  regularly participate in local tech meetups and occasionally
                  contribute to open-source projects. I find that teaching
                  others often deepens my own understanding and keeps me
                  connected to the broader developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className='text-2xl font-bold mb-4 flex items-center gap-2'>
                <Target className='h-5 w-5 text-primary' />
                Looking Forward
              </h2>
              <div className='space-y-4 text-muted-foreground'>
                <p>
                  As I continue to grow as a developer, I'm particularly excited
                  about deepening my expertise in modern web frameworks,
                  exploring more advanced state management patterns, and
                  learning more about cloud infrastructure and DevOps practices.
                </p>
                <p>
                  I'm also interested in the intersection of design and
                  development, and how tools and processes can bridge these
                  disciplines to create more cohesive products. In the long
                  term, I aspire to lead development teams and contribute to
                  products that make a meaningful difference in people's lives.
                </p>
                <p>
                  I'm always open to new challenges and opportunities to
                  collaborate with passionate teams on interesting problems. If
                  you're working on something exciting, I'd love to hear about
                  it!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='pt-4'
            >
              <div className='relative'>
                <div className='absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30'></div>
                <div className='relative bg-white dark:bg-slate-900 rounded-lg p-6 shadow-lg'>
                  <div className='flex items-center gap-2 mb-4'>
                    <BookOpen className='h-5 w-5 text-primary' />
                    <h2 className='text-xl font-bold'>A Quote I Live By</h2>
                  </div>
                  <blockquote className='border-l-4 border-primary/30 pl-4 italic text-muted-foreground'>
                    "The best way to predict the future is to create it."
                  </blockquote>
                  <p className='text-right text-sm text-muted-foreground mt-2'>
                    — Peter Drucker
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
