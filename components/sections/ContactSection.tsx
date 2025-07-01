import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function ContactSection() {
  return (
    <section className='py-24 px-4 bg-white dark:bg-slate-900 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5'></div>
      <div className='absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 blur-3xl rounded-full'></div>
      <div className='absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/10 blur-3xl rounded-full'></div>
      <div className='container mx-auto max-w-6xl relative z-10'>
        <div className='max-w-3xl mx-auto'>
          <div className='relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-600/30 rounded-xl blur opacity-30 dark:opacity-40'></div>
            <div className='relative bg-white/90 dark:bg-slate-900/90 rounded-xl p-10 shadow-lg text-center backdrop-blur-sm'>
              <Badge variant='outline' className='mb-4'>
                CONNECT
              </Badge>
              <h2 className='text-4xl font-bold mb-6'>
                Let&apos;s Work Together
              </h2>
              <p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
                Have a project in mind or looking to hire a skilled developer?
                I&apos;d love to hear from you and discuss how we can
                collaborate.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button asChild size='lg' className='rounded-full'>
                  <Link href='/contact'>Get in Touch</Link>
                </Button>
                <Button
                  asChild
                  variant='outline'
                  size='lg'
                  className='rounded-full'
                >
                  <a href='mailto:sazzad.hossain882@gmail.com'>
                    sazzad.hossain882@gmail.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
