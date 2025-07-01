import { Badge } from '@/components/ui/badge';
import ExperienceTimeline from '@/components/experience-timeline';

export default function ExperienceSection() {
  return (
    <section className='py-24 px-4 bg-white dark:bg-slate-900'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <Badge variant='outline' className='mb-4'>
            CAREER
          </Badge>
          <h2 className='text-4xl font-bold mb-6'>Professional Journey</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            My professional experience building digital products and working
            with teams around the world.
          </p>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
