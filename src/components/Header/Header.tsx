import Image from 'next/image'
import Link from 'next/link'

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
  languages: Array<{ code: string; name: string }>
}

export function Header({
  searchQuery,
  onSearchChange,
  selectedLanguage,
  onLanguageChange,
  selectedRegions,
  onRegionsChange,
  languages
}: HeaderProps) {
  return (
    <header className="py-4 px-4 lg:py-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center header-top-row">
          <Link href="/" className="flex-shrink-0 cursor-pointer">
            <Image
              src="/img/logo.png"
              alt="Plan Marketing Digital"
              width={108}
              height={59}
              className="w-[80px] h-[44px] lg:w-[108px] lg:h-[59px]"
            />
          </Link>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto">
            <SearchBar value={searchQuery} onChange={onSearchChange} />
            <LanguageSelect value={selectedLanguage} onChange={onLanguageChange} languages={languages} />
          </div>
        </div>
        <div className="flex justify-start region-filters-row">
          <RegionFilters
            selectedRegions={selectedRegions}
            onChange={onRegionsChange}
          />
        </div>
      </div>
    </header>
  )
}
