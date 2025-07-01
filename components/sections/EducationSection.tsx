import { Badge } from '@/components/ui/badge';

export default function EducationSection() {
  return (
    <section className='py-24 px-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full'></div>
      <div className='container mx-auto max-w-6xl relative z-10'>
        <div className='text-center mb-16'>
          <Badge variant='outline' className='mb-4'>
            EDUCATION
          </Badge>
          <h2 className='text-4xl font-bold mb-6'>Academic Background</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            My educational foundation that supports my professional expertise.
          </p>
        </div>
        <div className='max-w-3xl mx-auto'>
          <div className='relative'>
            <div className='absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-20 dark:opacity-30'></div>
            <div className='relative bg-white dark:bg-slate-900 rounded-lg p-8 shadow-lg'>
              <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4'>
                <h3 className='text-2xl font-bold'>
                  Bachelor of Science in Computer Science & Engineering
                </h3>
                <Badge variant='outline' className='whitespace-nowrap'>
                  2017 - 2022
                </Badge>
              </div>
              <p className='text-xl text-muted-foreground mb-4'>
                Northern University Bangladesh
              </p>
              <div className='space-y-2 text-muted-foreground'>
                <p>
                  • Focused on software development, algorithms, and data
                  structures
                </p>
                <p>• Participated in programming competitions and hackathons</p>
                <p>
                  • Completed capstone project on web application development
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
