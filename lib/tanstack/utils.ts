import { QueryKey } from '@tanstack/react-query';

/**
 * Creates a prefixed query key for better organization
 * @param prefix The prefix for the query key
 * @param parts Additional parts of the query key
 * @returns A properly formatted query key array
 */
export function createQueryKey(
  prefix: string,
  ...parts: (string | number | null | undefined)[]
): QueryKey {
  return [prefix, ...parts.filter(Boolean)];
}

/**
 * Standard query keys for the application
 */
export const queryKeys = {
  projects: (id?: string) => createQueryKey('projects', id),
  blogs: (id?: string) => createQueryKey('blogs', id),
  blogCategories: () => createQueryKey('blogCategories'),
  skills: (categoryId?: string) => createQueryKey('skills', categoryId),
  skillCategories: () => createQueryKey('skillCategories'),
  usedSkillCategories: () => createQueryKey('usedSkillCategories'),
  experiences: () => createQueryKey('experiences'),
  about: () => createQueryKey('about'),
};
