import Image from 'next/image'

import { LanguageSelect } from '../LanguageSelect'
import { RegionFilters } from '../RegionFilters'
import { SearchBar } from '../SearchBar'

interface HeaderProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedLanguage: string
  onLanguageChange: (value: string) => void
  selectedRegions: string[]
  onRegionsChange: (regions: string[]) => void
}

export function Header({
  searchQuery,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  selectedRegions,
  onRegionsChange
}: HeaderProps) {
  return (
    <header className="py-6 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center" style={{ gap: '112px', marginBottom: '19px' }}>
          <Image
            src="/img/logo.png"
            alt="Plan Marketing Digital"
            width={108}
            height={59}
            className="flex-shrink-0"
            style={{ width: '108px', height: '59px' }}
          />
          <div className="flex gap-4">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
            <LanguageSelect value={selectedLanguage} onChange={onLanguageChange} />
          </div>
        </div>
        <div className="flex justify-start" style={{ paddingLeft: '220px' }}>
          <RegionFilters
            selectedRegions={selectedRegions}
            onChange={onRegionsChange}
          />
        </div>
      </div>
    </header>
  )
}
