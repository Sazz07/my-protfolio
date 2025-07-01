import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectShowcase from '@/components/project-showcase';

export default function ProjectsSection() {
  return (
    <section className='py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-purple-500/20 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 blur-3xl rounded-full'></div>
      <div className='container mx-auto max-w-6xl relative z-10'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16'>
          <div>
            <Badge variant='outline' className='mb-4'>
              PORTFOLIO
            </Badge>
            <h2 className='text-4xl font-bold mb-4'>Featured Projects</h2>
            <p className='text-muted-foreground max-w-2xl'>
              A selection of my recent work showcasing my technical skills and
              problem-solving abilities.
            </p>
          </div>
          <Button asChild variant='outline' className='rounded-full'>
            <Link href='/projects'>
              View All Projects
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>
        <ProjectShowcase />
      </div>
    </section>
  );
}
