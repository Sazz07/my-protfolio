import React from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogPreview from '../blog-preview';

export default function BlogSection() {
  return (
    <section className='py-24 px-4 bg-white dark:bg-slate-900'>
      <div className='container mx-auto max-w-6xl'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16'>
          <div>
            <Badge variant='outline' className='mb-4'>
              INSIGHTS
            </Badge>
            <h2 className='text-4xl font-bold mb-4'>Latest Articles</h2>
            <p className='text-muted-foreground max-w-2xl'>
              Thoughts, insights, and tutorials on web development and
              technology.
            </p>
          </div>
          <Button asChild variant='outline' className='rounded-full'>
            <Link href='/blog'>
              View All Articles
              <ArrowRight className='ml-2 h-4 w-4' />
            </Link>
          </Button>
        </div>

        <BlogPreview />
      </div>
    </section>
  );
}
