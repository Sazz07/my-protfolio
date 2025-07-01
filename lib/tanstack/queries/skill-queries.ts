import { apiClient } from '../api-client';
import { queryKeys } from '../utils';
import { useQuery } from '../hooks';

// Types
export type SkillCategory = {
  id: string;
  name: string;
};

export type Skill = {
  id: string;
  name: string;
  proficiency: number;
  categoryId: string;
  category: SkillCategory;
  profileId: string;
  createdAt: string;
  updatedAt: string;
};

export type SkillsResponse = {
  success: boolean;
  message: string;
  data: Skill[];
};

export type CategoriesResponse = {
  success: boolean;
  message: string;
  data: SkillCategory[];
};

// API functions
export const skillApi = {
  getSkills: (categoryId?: string) => {
    const params = categoryId ? `?categoryId=${categoryId}` : '';
    return apiClient.get<SkillsResponse>(`/skills${params}`);
  },
  getCategories: () => apiClient.get<CategoriesResponse>('/skill-categories'),
  getUsedCategories: () =>
    apiClient.get<CategoriesResponse>('/skills/categories/used'),
};

// Query hooks
export function useSkills(categoryId?: string) {
  return useQuery({
    queryKey: queryKeys.skills(categoryId),
    queryFn: () => skillApi.getSkills(categoryId),
  });
}

export function useSkillCategories() {
  return useQuery({
    queryKey: queryKeys.skillCategories(),
    queryFn: () => skillApi.getCategories(),
  });
}

export function useUsedSkillCategories() {
  return useQuery({
    queryKey: queryKeys.usedSkillCategories(),
    queryFn: () => skillApi.getUsedCategories(),
  });
}
