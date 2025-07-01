import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Re-export TanStack Query hooks for consistent imports throughout the app
export { useQuery, useMutation, useQueryClient };

// Define custom hook types
export type UseQueryOptions<TData, TError> = Parameters<typeof useQuery<TData, TError>>[0];

// Add custom hooks as needed