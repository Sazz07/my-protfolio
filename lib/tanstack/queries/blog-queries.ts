import { apiClient } from '../api-client';
import { queryKeys } from '../utils';
import { useQuery } from '../hooks';

// Types
export type BlogCategory = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Blog = {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category: BlogCategory;
  date: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogsResponse = {
  success: boolean;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data: Blog[];
};

export type BlogResponse = {
  success: boolean;
  message: string;
  data: Blog;
};

export type BlogCategoriesResponse = {
  success: boolean;
  message: string;
  data: BlogCategory[];
};

// API functions
export const blogApi = {
  getBlogs: () => apiClient.get<BlogsResponse>('/blogs'),
  getBlog: (idOrSlug: string) => apiClient.get<BlogResponse>(`/blogs/${idOrSlug}`),
  getBlogCategories: () => apiClient.get<BlogCategoriesResponse>('/blogs/categories'),
};

// Query hooks
export function useBlogs() {
  return useQuery({
    queryKey: queryKeys.blogs(),
    queryFn: () => blogApi.getBlogs(),
  });
}

export function useBlog(idOrSlug: string) {
  return useQuery({
    queryKey: queryKeys.blogs(idOrSlug),
    queryFn: () => blogApi.getBlog(idOrSlug),
    enabled: !!idOrSlug,
  });
}

export function useBlogCategories() {
  return useQuery({
    queryKey: queryKeys.blogCategories(),
    queryFn: () => blogApi.getBlogCategories(),
  });
}