import Image from 'next/image'

import { Footer, BackButton } from '@/components'
import { colors } from '@/styles/colors'

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
          colors.gradient,
      }}
    >
      {/* Logo */}
      <div className="px-4 lg:px-8 detail-logo-section">
        <Image
          src="/img/logo.png"
          alt="Plan Logo"
          width={108}
          height={59}
          priority
        />
      </div>

      <main className="flex-1 px-4 lg:px-8 pb-12 lg:pb-[205px]">
        <div className="mx-auto detail-container">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
            {/* Header */}
            <div
              className="relative px-6 flex items-center justify-between"
              style={{ backgroundColor: colors.darkGray, height: '69px' }}
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
            <div className="pt-4 px-4 lg:pt-[22px] lg:pl-[20px] lg:pr-[48px]">
              <div className="flex detail-content-flex">
                {/* Left side - Flag */}
                <div className="flex flex-col">
                  <div className="relative detail-flag mx-auto lg:mx-0">
                    <Image
                      src={country.flag}
                      alt={`Bandeira ${country.name}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="mt-4 text-gray-600 font-medium text-center">Bandeira</p>
                </div>

                {/* Right side - Info */}
                <div className="detail-info">
                  <h1
                    className="font-bold detail-title"
                    style={{ fontStyle: 'italic', color: colors.mediumGray, marginBottom: '15px' }}
                  >
                    {country.name}
                  </h1>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Nome oficial:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.officialName}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Capital:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.capital}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        População:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.population}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Moeda:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.currency}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Idiomas:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.languages}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Região:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.region}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Sub-Região:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {country.subRegion}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center detail-button-area">
              <BackButton />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
