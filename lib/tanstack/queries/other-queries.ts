import { apiClient } from '../api-client';
import { queryKeys } from '../utils';
import { useQuery } from '../hooks';

// Types
export type Experience = {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
};

export type About = {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  avatarUrl?: string;
  resumeUrl?: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type ExperiencesResponse = {
  success: boolean;
  message: string;
  data: Experience[];
};

export type AboutResponse = {
  success: boolean;
  message: string;
  data: About;
};

// API functions
export const otherApi = {
  getExperiences: () => apiClient.get<ExperiencesResponse>('/experiences'),
  getAbout: () => apiClient.get<AboutResponse>('/about'),
};

// Query hooks
export function useExperiences() {
  return useQuery({
    queryKey: queryKeys.experiences(),
    queryFn: () => otherApi.getExperiences(),
  });
}

export function useAbout() {
  return useQuery({
    queryKey: queryKeys.about(),
    queryFn: () => otherApi.getAbout(),
  });
}
