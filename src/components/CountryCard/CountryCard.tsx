import { MapPin } from 'lucide-react'
import Image from 'next/image'

import { colors } from '@/styles/colors'

import CountryCardButton from './CountryCardButton'

interface CountryCardProps {
    name: string
    capital: string
    region: string
    flag: string
    code: string
}

const getRegionImage = (region: string) => {
  const regionMap: { [key: string]: string } = {
    'África': '/img/africa.png',
    'Europa': '/img/europa.png',
    'Ásia': '/img/asia.png',
    'América do Norte': '/img/northamerica.png',
    'América do Sul': '/img/southamerica.png',
    'Oceania': '/img/oceania.png',
  }
  return regionMap[region] || '/img/region-icon.png'
}

export function CountryCard({ name, capital, region, flag, code }: CountryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow" style={{ width: '310px', height: '238px' }}>
      <div className="relative px-4 py-3 flex items-center justify-between" style={{ backgroundColor: colors.darkGray, height: '60px' }}>
        <span className="text-white font-bold text-lg" style={{ fontStyle: 'italic' }}>{region}</span>
        <Image
          src={getRegionImage(region)}
          alt={region}
          width={50}
          height={50}
          className="opacity-50"
          style={{ width: 'auto', height: '40px' }}
        />
      </div>

      <div className="p-6 flex flex-col items-center">
        <div className="mb-4">
          <Image
            src={flag}
            alt={`Bandeira ${name}`}
            width={24}
            height={18}
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-6" style={{ color: colors.primary }}>
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">{capital}</span>
        </div>

        <CountryCardButton code={code} />
      </div>
    </div>
  )
}
