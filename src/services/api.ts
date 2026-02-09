const BASE_URL = 'https://restcountries.com/v3.1'

export async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 3600 },
  })

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }

  return response.json()
}
