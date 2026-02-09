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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow country-card">
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
        <div className="mb-4 relative w-[24px] h-[18px]">
          <Image
            src={flag}
            alt={`Bandeira ${name}`}
            width={24}
            height={18}
            unoptimized
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>

        <h3 className="font-bold text-center mb-2" style={{ fontSize: '23px', color: '#707070' }}>
          {name}
        </h3>

        <div className="flex items-center gap-2 mb-6">
          <Image
            src="/img/region-icon.png"
            alt="Capital"
            width={20}
            height={20}
          />
          <span className="font-bold" style={{ fontSize: '18px', color: '#707070' }}>{capital}</span>
        </div>

        <CountryCardButton code={code} />
      </div>
    </div>
  )
}
