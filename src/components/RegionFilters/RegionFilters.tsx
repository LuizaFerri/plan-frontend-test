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
    if (selectedRegions.includes(regionValue)) {
      onChange(selectedRegions.filter((r) => r !== regionValue))
    } else {
      onChange([...selectedRegions, regionValue])
    }
  }

  return (
    <div className="flex flex-wrap gap-6 items-center" style={{ width: '856px' }}>
      {REGIONS.map((region) => (
        <label
          key={region.value}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
            <input
              type="checkbox"
              checked={selectedRegions.includes(region.value)}
              onChange={() => handleToggle(region.value)}
              className="w-6 h-6 appearance-none cursor-pointer checked:bg-[#f68824] rounded-full"
              style={{ borderWidth: '3px', borderColor: colors.white, borderStyle: 'solid' }}
            />
            {selectedRegions.includes(region.value) && (
              <svg
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none"
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
        </label>
      ))}
    </div>
  )
}
