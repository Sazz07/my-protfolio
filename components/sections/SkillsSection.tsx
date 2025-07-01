'use client';

import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillsCloud from '@/components/skills-cloud';
import { useSkills, useUsedSkillCategories } from '@/lib/tanstack/queries';

export default function SkillsSection() {
  const { data: skillsResponse, isLoading: isLoadingSkills } = useSkills();
  const { data: categoriesResponse, isLoading: isLoadingCategories } =
    useUsedSkillCategories();

  const skills = skillsResponse?.data || [];
  const categories = categoriesResponse?.data || [];
  const isLoading = isLoadingSkills || isLoadingCategories;

  // Group skills by category for the "All" tab
  const allSkills = skills.map((skill) => skill.name);

  // Group skills by category for individual tabs
  const skillsByCategory = categories.reduce((acc, category) => {
    const categorySkills = skills
      .filter((skill) => skill.categoryId === category.id)
      .map((skill) => skill.name);
    acc[category.id] = categorySkills;
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section className='py-24 px-4 bg-white dark:bg-slate-900'>
      <div className='container mx-auto max-w-6xl'>
        <div className='text-center mb-16'>
          <Badge variant='outline' className='mb-4'>
            EXPERTISE
          </Badge>
          <h2 className='text-4xl font-bold mb-6'>Technical Skills</h2>
          <p className='text-muted-foreground max-w-2xl mx-auto'>
            A comprehensive toolkit of technologies I&apos;ve mastered to build
            modern, scalable applications.
          </p>
        </div>

        <Tabs defaultValue='all' className='w-full'>
          <div className='flex justify-center mb-8'>
            <TabsList className='grid grid-cols-3'>
              <TabsTrigger value='all'>All</TabsTrigger>
              {categories.slice(0, 4).map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value='all' className='mt-8'>
            <SkillsCloud skills={allSkills} isLoading={isLoading} />
          </TabsContent>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className='mt-8'>
              <SkillsCloud
                skills={skillsByCategory[category.id] || []}
                isLoading={isLoading}
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
