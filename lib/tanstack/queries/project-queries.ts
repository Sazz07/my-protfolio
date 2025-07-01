import { apiClient } from '../api-client';
import { queryKeys } from '../utils';
import { useQuery } from '../hooks';

// Types
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  githubLink?: string;
  liveLink?: string;
  status: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
};

export type ProjectsResponse = {
  success: boolean;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data: Project[];
};

export type ProjectResponse = {
  success: boolean;
  message: string;
  data: Project;
};

// API functions
export const projectApi = {
  getProjects: () => apiClient.get<ProjectsResponse>('/projects'),
  getProject: (id: string) => apiClient.get<ProjectResponse>(`/projects/${id}`),
};

// Query hooks
export function useProjects() {
  return useQuery({
    queryKey: queryKeys.projects(),
    queryFn: () => projectApi.getProjects(),
  });
}

export function useProject(id: string) {
  return useQuery({
    queryKey: queryKeys.projects(id),
    queryFn: () => projectApi.getProject(id),
    enabled: !!id,
  });
}