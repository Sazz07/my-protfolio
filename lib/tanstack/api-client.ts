/**
 * API client for making HTTP requests
 */

const BASE_URL = 'http://localhost:5000/api/v1';

type FetchOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
};

/**
 * Custom fetch wrapper with error handling
 */
async function fetchApi<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { method = 'GET', headers = {}, body } = options;

  const config: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);

    // Handle non-JSON responses
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();

      // Handle API error responses
      if (!response.ok) {
        throw new Error(data.message || 'An error occurred');
      }

      return data;
    } else {
      // Handle non-JSON responses
      if (!response.ok) {
        throw new Error('An error occurred');
      }

      return (await response.text()) as unknown as T;
    }
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

/**
 * API client with methods for different HTTP verbs
 */
export const apiClient = {
  get: <T>(endpoint: string, headers?: Record<string, string>) =>
    fetchApi<T>(endpoint, { method: 'GET', headers }),

  post: <T>(endpoint: string, body: any, headers?: Record<string, string>) =>
    fetchApi<T>(endpoint, { method: 'POST', body, headers }),

  put: <T>(endpoint: string, body: any, headers?: Record<string, string>) =>
    fetchApi<T>(endpoint, { method: 'PUT', body, headers }),

  patch: <T>(endpoint: string, body: any, headers?: Record<string, string>) =>
    fetchApi<T>(endpoint, { method: 'PATCH', body, headers }),

  delete: <T>(endpoint: string, headers?: Record<string, string>) =>
    fetchApi<T>(endpoint, { method: 'DELETE', headers }),
};
