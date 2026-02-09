'use client'

import { useState, useMemo } from 'react'

import { Header, CountryGrid, Pagination, Footer } from '@/components'
import type { Country } from '@/services/countries'
import { colors } from '@/styles/colors'

const REGION_MAP: Record<string, string> = {
  'Africa': 'África',
  'Americas': 'América do Norte',
  'Asia': 'Ásia',
  'Europe': 'Europa',
  'Oceania': 'Oceania',
}

const SUBREGION_OVERRIDE: Record<string, string> = {
  'South America': 'América do Sul',
}

function getRegionLabel(country: Country): string {
  if (country.subregion && SUBREGION_OVERRIDE[country.subregion]) {
    return SUBREGION_OVERRIDE[country.subregion]
  }
  return REGION_MAP[country.region] || country.region
}

function mapCountryToCard(country: Country) {
  return {
    name: country.translations?.por?.common || country.name.common,
    capital: country.capital?.[0] || '—',
    region: getRegionLabel(country),
    flag: country.flags.svg,
    code: country.cca3.toLowerCase(),
  }
}

interface HomeContentProps {
  countries: Country[]
}

export default function HomeContent({ countries }: HomeContentProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 8

  const availableLanguages = useMemo(() => {
    const languagesSet = new Map<string, string>()

    countries.forEach((country) => {
      if (country.languages) {
        Object.entries(country.languages).forEach(([code, name]) => {
          if (!languagesSet.has(code)) {
            languagesSet.set(code, name)
          }
        })
      }
    })

    return Array.from(languagesSet.entries())
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [countries])

  const filteredCountries = useMemo(() => {
    let result = countries

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter((c) => {
        const namePt = c.translations?.por?.common?.toLowerCase() || ''
        const nameEn = c.name.common.toLowerCase()
        return namePt.includes(query) || nameEn.includes(query)
      })
    }

    if (selectedRegions.length > 0) {
      result = result.filter((c) => {
        return selectedRegions.some((r) => {
          if (r === 'South America') return c.subregion === 'South America'
          if (r === 'Americas') return c.region === 'Americas' && c.subregion !== 'South America'
          return c.region === r
        })
      })
    }

    if (selectedLanguage) {
      result = result.filter((c) => c.languages && selectedLanguage in c.languages)
    }

    result.sort((a, b) => {
      const nameA = a.translations?.por?.common || a.name.common
      const nameB = b.translations?.por?.common || b.name.common
      return nameA.localeCompare(nameB, 'pt-BR')
    })

    return result
  }, [countries, searchQuery, selectedRegions, selectedLanguage])

  const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    setCurrentPage(1)
  }

  const handleRegionsChange = (regions: string[]) => {
    setSelectedRegions(regions)
    setCurrentPage(1)
  }

  const handleLanguageChange = (value: string) => {
    setSelectedLanguage(value)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: colors.gradient }}>
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        selectedRegions={selectedRegions}
        onRegionsChange={handleRegionsChange}
        languages={availableLanguages}
      />

      <main className="flex-1 py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CountryGrid countries={paginatedCountries.map(mapCountryToCard)} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
