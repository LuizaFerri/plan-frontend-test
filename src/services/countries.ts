import { fetchFromAPI } from './api'

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
  capital?: string[]
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

const FIELDS = 'name,translations,capital,flags,region,subregion,population,languages,currencies,cca3'

export async function getAllCountries(): Promise<Country[]> {
  return fetchFromAPI<Country[]>(`/all?fields=${FIELDS}`)
}

export async function getCountryByCode(code: string): Promise<Country> {
  return fetchFromAPI<Country>(`/alpha/${code}?fields=${FIELDS}`)
}
