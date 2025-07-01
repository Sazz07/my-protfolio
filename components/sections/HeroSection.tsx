import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import RoleTypewriter from '@/components/role-typewriter';

export default function HeroSection() {
  return (
    <section className='relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950'>
      <div className='absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 opacity-30 dark:opacity-20 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]'></div>
      <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl'></div>
      <div className='container mx-auto max-w-6xl px-4 py-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='space-y-2'>
              <div className='flex items-center gap-3'>
                <Badge
                  variant='outline'
                  className='px-3 py-1 text-sm bg-background/50 backdrop-blur-sm'
                >
                  <span className='relative flex h-2 w-2 mr-1'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
                  </span>
                  Available for work
                </Badge>
                <Badge
                  variant='outline'
                  className='px-3 py-1 text-sm bg-background/50 backdrop-blur-sm'
                >
                  Dhaka, Bangladesh
                </Badge>
              </div>
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-primary dark:from-slate-100 dark:via-slate-200 dark:to-primary-foreground text-transparent bg-clip-text'>
                Md. Sazzad Hossain
              </h1>
              <div className='h-14 md:h-16 overflow-hidden'>
                <RoleTypewriter />
              </div>
              <p className='text-xl md:text-2xl text-muted-foreground max-w-md leading-relaxed'>
                Building elegant, user-centric web experiences with modern
                technologies.
              </p>
            </div>
            <div className='flex flex-wrap gap-4 pt-2'>
              <Button asChild size='lg' className='rounded-full'>
                <Link href='/contact'>
                  Get in touch
                  <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                </Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='rounded-full'
              >
                <Link href='/projects'>View Projects</Link>
              </Button>
            </div>
            <div className='pt-2'>
              <div className='flex flex-wrap gap-6 text-sm'>
                <div className='flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                  <div className='h-1.5 w-1.5 rounded-full bg-blue-500'></div>
                  <span className='text-muted-foreground'>
                    2+ years experience
                  </span>
                </div>
                <div className='flex items-center gap-2 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full'>
                  <div className='h-1.5 w-1.5 rounded-full bg-purple-500'></div>
                  <span className='text-muted-foreground'>
                    Full Stack Developer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-primary/40 to-purple-600/40 rounded-lg blur opacity-20 dark:opacity-30 animate-pulse'></div>
            <div className='relative h-[450px] rounded-lg bg-white/90 dark:bg-slate-900/90 p-6 shadow-xl overflow-hidden backdrop-blur-sm'>
              <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600'></div>
              <div className='flex items-center gap-1.5 mb-4'>
                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
              </div>
              <div className='font-mono text-sm text-slate-700/90 dark:text-slate-300/90 space-y-2'>
                <p>
                  <span className='text-purple-600/90 dark:text-purple-400/90'>
                    const
                  </span>{' '}
                  <span className='text-blue-600/90 dark:text-blue-400/90'>
                    developer
                  </span>{' '}
                  = {'{'}
                </p>
                <p className='pl-4'>
                  <span className='text-slate-500/90'>name:</span>{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'Md. Sazzad Hossain'
                  </span>
                  ,
                </p>
                <p className='pl-4'>
                  <span className='text-slate-500/90'>role:</span>{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'Software Developer'
                  </span>
                  ,
                </p>
                <p className='pl-4'>
                  <span className='text-slate-500/90'>skills:</span> [
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'React'
                  </span>
                  ,{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'Next.js'
                  </span>
                  ,{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'TypeScript'
                  </span>
                  ,{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'Node.js'
                  </span>
                  ],
                </p>
                <p className='pl-4'>
                  <span className='text-slate-500/90'>experience:</span>{' '}
                  <span className='text-orange-600/90 dark:text-orange-400/90'>
                    2
                  </span>
                  ,
                </p>
                <p className='pl-4'>
                  <span className='text-purple-600/90 dark:text-purple-400/90'>
                    contact
                  </span>
                  : () {'=> {'}
                </p>
                <p className='pl-8'>
                  <span className='text-slate-500/90'>email:</span>{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'sazzad.hossain882@gmail.com'
                  </span>
                  ,
                </p>
                <p className='pl-8'>
                  <span className='text-slate-500/90'>phone:</span>{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    '+8801706419870'
                  </span>
                  ,
                </p>
                <p className='pl-4'>{'}'},</p>
                <p className='pl-4'>
                  <span className='text-purple-600/90 dark:text-purple-400/90'>
                    currentStatus
                  </span>
                  : () {'=> {'}
                </p>
                <p className='pl-8'>
                  <span className='text-blue-600/90 dark:text-blue-400/90'>
                    return
                  </span>{' '}
                  <span className='text-green-600/90 dark:text-green-400/90'>
                    'Building amazing web experiences'
                  </span>
                  ;
                </p>
                <p className='pl-4'>{'}'}</p>
                <p>{'}'}</p>
              </div>
              <div className='absolute bottom-6 right-6 flex gap-2'>
                <div className='h-2 w-2 rounded-full bg-green-500 animate-pulse'></div>
                <div className='h-2 w-2 rounded-full bg-blue-500 animate-pulse delay-150'></div>
                <div className='h-2 w-2 rounded-full bg-purple-500 animate-pulse delay-300'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent' />
    </section>
  );
}
