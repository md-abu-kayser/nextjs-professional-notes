export async function cachedFetch(url: string, options?: RequestInit) {
  const res = await fetch(url, { ...options, next: { revalidate: 60 } });
  return res.json();
}
