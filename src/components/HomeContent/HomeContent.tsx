'use client'

import { useState } from 'react'

import { Header, CountryGrid, Pagination, Footer } from '@/components'
import { colors } from '@/styles/colors'

const MOCK_COUNTRIES = [
  {
    name: 'Afeganistão',
    capital: 'Cabul',
    region: 'Ásia',
    flag: 'https://flagcdn.com/af.svg',
    code: 'afg',
  },
  {
    name: 'África do Sul',
    capital: 'Pretória',
    region: 'África',
    flag: 'https://flagcdn.com/za.svg',
    code: 'zaf',
  },
  {
    name: 'Albânia',
    capital: 'Tirana',
    region: 'Europa',
    flag: 'https://flagcdn.com/al.svg',
    code: 'alb',
  },
  {
    name: 'Alemanha',
    capital: 'Berlim',
    region: 'Europa',
    flag: 'https://flagcdn.com/de.svg',
    code: 'deu',
  },
  {
    name: 'Andorra',
    capital: 'Andorra-a-Velha',
    region: 'Europa',
    flag: 'https://flagcdn.com/ad.svg',
    code: 'and',
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    region: 'África',
    flag: 'https://flagcdn.com/ao.svg',
    code: 'ago',
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    region: 'América do Norte',
    flag: 'https://flagcdn.com/ai.svg',
    code: 'aia',
  },
  {
    name: 'Antigua e Barbuda',
    capital: "Saint John's",
    region: 'América do Norte',
    flag: 'https://flagcdn.com/ag.svg',
    code: 'atg',
  },
]

export default function HomeContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 8
  const totalPages = Math.ceil(MOCK_COUNTRIES.length / itemsPerPage)

  return (
    <div className="min-h-screen flex flex-col" style={{ background: colors.gradient }}>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedLanguage={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
        selectedRegions={selectedRegions}
        onRegionsChange={setSelectedRegions}
      />

      <main className="flex-1 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <CountryGrid countries={MOCK_COUNTRIES} />
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
