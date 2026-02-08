import { api } from './api'

export interface Country {
  name: {
    common: string
    official: string
  }
  translations: {
    por?: {
      common: string
      official: string
    }
  }
  flags: {
    svg: string
    png: string
  }
  region: string
  subregion?: string
  population: number
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol: string }>
  cca3: string
}

export async function getAllCountries(): Promise<Country[]> {
  const response = await api.get<Country[]>('/all')
  return response.data
}

export async function getCountryByCode(code: string): Promise<Country> {
  const response = await api.get<Country[]>(`/alpha/${code}`)
  return response.data[0]
}
