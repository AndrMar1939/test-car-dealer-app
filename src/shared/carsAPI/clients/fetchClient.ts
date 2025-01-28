type NextFetchRequestConfig = RequestInit & {
  nextConfig?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

export async function fetchClient<T>(
  url: string,
  options?: NextFetchRequestConfig,
): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    // eslint-disable-next-line no-console
    console.error(`HTTP error! status: ${response?.status}`);
  }

  return response.json() as Promise<T>;
}
