export async function fetchClient<T>(
  url: string,
  options?: RequestInit,
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
