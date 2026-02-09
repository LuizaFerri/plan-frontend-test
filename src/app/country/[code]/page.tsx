import Image from 'next/image'

import { Footer, BackButton } from '@/components'

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

export default function CountryDetail() {
  const country = {
    name: 'Afeganistão',
    officialName: 'Emirado Islâmico do Afeganistão',
    capital: 'Cabul',
    population: '32.225.560',
    currency: 'Afegani afegão',
    languages: 'Pashto e Dari',
    region: 'Ásia',
    subRegion: 'Oriente-Médio',
    flag: 'https://flagcdn.com/af.svg',
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
                    'linear-gradient(to bottom, #f68824 0%, #fcbb4f 50%, #fdc759 100%)',
      }}
    >
      {/* Logo */}
      <div className="px-8" style={{ paddingTop: '67px', paddingBottom: '88px' }}>
        <Image
          src="/img/logo.png"
          alt="Plan Logo"
          width={108}
          height={59}
          priority
        />
      </div>

      <main className="flex-1 px-8" style={{ paddingBottom: '205px' }}>
        <div className="mx-auto" style={{ width: '1300px', height: '566px' }}>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Header */}
            <div
              className="relative px-6 flex items-center justify-between"
              style={{ backgroundColor: '#58595B', height: '69px' }}
            >
              <span
                className="text-white font-bold text-xl"
                style={{ fontStyle: 'italic' }}
              >
                {country.region}
              </span>
              <Image
                src={getRegionImage(country.region)}
                alt={country.region}
                width={60}
                height={60}
                className="opacity-50"
                style={{ width: 'auto', height: '50px' }}
              />
            </div>

            {/* Content */}
            <div className="p-12">
              <div className="flex gap-20 mb-12">
                {/* Left side - Flag */}
                <div className="flex flex-col items-center">
                  <div
                    className="relative"
                    style={{ width: '290px', height: '220px' }}
                  >
                    <Image
                      src={country.flag}
                      alt={`Bandeira ${country.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-4 text-gray-600 font-medium">Bandeira</p>
                </div>

                {/* Right side - Info */}
                <div className="flex-1">
                  <h1
                    className="text-5xl font-bold text-gray-700 mb-8"
                    style={{ fontStyle: 'italic' }}
                  >
                    {country.name}
                  </h1>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Nome oficial:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.officialName}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Capital:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.capital}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                População:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.population}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Moeda:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.currency}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Idiomas:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.languages}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Região:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.region}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-600 font-medium min-w-[140px]">
                                                Sub-Região:
                      </span>
                      <span className="text-gray-800 font-bold">
                        {country.subRegion}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center" style={{ paddingBottom: '30px' }}>
              <BackButton />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
