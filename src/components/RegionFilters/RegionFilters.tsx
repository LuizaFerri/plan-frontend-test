import { colors } from '@/styles/colors'

interface Region {
  name: string
  value: string
}

interface RegionFiltersProps {
  selectedRegions: string[]
  onChange: (regions: string[]) => void
}

const REGIONS: Region[] = [
  { name: 'África', value: 'Africa' },
  { name: 'América do Norte', value: 'Americas' },
  { name: 'América do Sul', value: 'South America' },
  { name: 'Ásia', value: 'Asia' },
  { name: 'Europa', value: 'Europe' },
  { name: 'Oceania', value: 'Oceania' },
]

export function RegionFilters({ selectedRegions, onChange }: RegionFiltersProps) {
  const handleToggle = (regionValue: string) => {
    const newRegions = selectedRegions.includes(regionValue)
      ? selectedRegions.filter((r) => r !== regionValue)
      : [...selectedRegions, regionValue]

    onChange(newRegions)
  }

  return (
    <div className="flex flex-wrap gap-3 lg:gap-6 items-center region-filters-container">
      {REGIONS.map((region) => {
        const isSelected = selectedRegions.includes(region.value)

        return (
          <div
            key={region.value}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleToggle(region.value)}
          >
            <div
              className="relative w-6 h-6 rounded-full flex items-center justify-center"
              style={{
                border: `3px solid ${colors.white}`,
                backgroundColor: isSelected ? colors.primaryAlt : 'transparent'
              }}
            >
              {isSelected && (
                <svg
                  className="w-3.5 h-3.5 text-white pointer-events-none"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-black font-medium" style={{ fontStyle: 'italic' }}>
              {region.name}
            </span>
          </div>
        )
      })}
    </div>
  )
}
