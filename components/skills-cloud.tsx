'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface SkillsCloudProps {
  skills: string[];
  isLoading?: boolean;
}

export default function SkillsCloud({
  skills,
  isLoading = false,
}: SkillsCloudProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isLoading) {
    return (
      <div className='flex flex-wrap justify-center gap-3 py-8'>
        {Array.from({ length: 12 }).map((_, index) => (
          <Skeleton key={index} className='h-8 w-20 rounded-full' />
        ))}
      </div>
    );
  }

  if (skills.length === 0) {
    return (
      <div className='text-center py-8'>
        <p className='text-muted-foreground'>
          No skills found in this category.
        </p>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap justify-center gap-3 py-8'>
      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.03,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <Badge
            variant='secondary'
            className='px-4 py-2 text-base font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300'
          >
            {skill}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}
