import { CountryCard } from '@/components/CountryCard'

interface Country {
  name: string
  capital: string
  region: string
  flag: string
  code: string
}

interface CountryGridProps {
  countries: Country[]
}

export function CountryGrid({ countries }: CountryGridProps) {
  if (countries.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-600 text-lg">Nenhum país encontrado</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center">
      {countries.map((country) => (
        <CountryCard
          key={country.code}
          name={country.name}
          capital={country.capital}
          region={country.region}
          flag={country.flag}
          code={country.code}
        />
      ))}
    </div>
  )
}
