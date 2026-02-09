import Image from 'next/image'

import { Footer, BackButton } from '@/components'
import { getCountryByCode } from '@/services/countries'
import { colors } from '@/styles/colors'

const REGION_MAP: Record<string, string> = {
  'Africa': 'África',
  'Americas': 'América do Norte',
  'Asia': 'Ásia',
  'Europe': 'Europa',
  'Oceania': 'Oceania',
}

const SUBREGION_MAP: Record<string, string> = {
  'South America': 'América do Sul',
  'Central America': 'América Central',
  'Caribbean': 'Caribe',
  'Northern Africa': 'Norte da África',
  'Western Africa': 'África Ocidental',
  'Eastern Africa': 'África Oriental',
  'Southern Africa': 'África Austral',
  'Middle Africa': 'África Central',
  'Western Europe': 'Europa Ocidental',
  'Eastern Europe': 'Europa Oriental',
  'Northern Europe': 'Europa Setentrional',
  'Southern Europe': 'Europa Meridional',
  'Southeast Europe': 'Sudeste Europeu',
  'Central Europe': 'Europa Central',
  'Western Asia': 'Ásia Ocidental',
  'Southern Asia': 'Ásia Meridional',
  'Eastern Asia': 'Ásia Oriental',
  'South-Eastern Asia': 'Sudeste Asiático',
  'Central Asia': 'Ásia Central',
  'Australia and New Zealand': 'Austrália e Nova Zelândia',
  'Melanesia': 'Melanésia',
  'Micronesia': 'Micronésia',
  'Polynesia': 'Polinésia',
  'Northern America': 'América do Norte',
}

function getRegionLabel(region: string, subregion?: string): string {
  if (subregion === 'South America') return 'América do Sul'
  return REGION_MAP[region] || region
}

const getRegionImage = (regionLabel: string) => {
  const regionMap: Record<string, string> = {
    'África': '/img/africa.png',
    'Europa': '/img/europa.png',
    'Ásia': '/img/asia.png',
    'América do Norte': '/img/northamerica.png',
    'América do Sul': '/img/southamerica.png',
    'Oceania': '/img/oceania.png',
  }
  return regionMap[regionLabel] || '/img/region-icon.png'
}

function formatPopulation(population: number): string {
  return population.toLocaleString('pt-BR')
}

function formatCurrencies(currencies?: Record<string, { name: string; symbol: string }>): string {
  if (!currencies) return '—'
  return Object.values(currencies).map((c) => c.name).join(', ')
}

function formatLanguages(languages?: Record<string, string>): string {
  if (!languages) return '—'
  return Object.values(languages).join(', ')
}

interface PageProps {
  params: Promise<{ code: string }>
}

export default async function CountryDetail({ params }: PageProps) {
  const { code } = await params
  const data = await getCountryByCode(code)

  const name = data.translations?.por?.common || data.name.common
  const officialName = data.translations?.por?.official || data.name.official
  const regionLabel = getRegionLabel(data.region, data.subregion)
  const subRegionLabel = SUBREGION_MAP[data.subregion || ''] || data.subregion || '—'

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
                {regionLabel}
              </span>
              <Image
                src={getRegionImage(regionLabel)}
                alt={regionLabel}
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
                      src={data.flags.svg}
                      alt={`Bandeira ${name}`}
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
                    {name}
                  </h1>

                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Nome oficial:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {officialName}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Capital:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {data.capital?.[0] || '—'}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        População:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {formatPopulation(data.population)}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Moeda:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {formatCurrencies(data.currencies)}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Idiomas:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {formatLanguages(data.languages)}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Região:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {regionLabel}
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="detail-field-label" style={{ fontWeight: 400, fontStyle: 'normal', color: colors.mediumGray }}>
                        Sub-Região:
                      </span>
                      <span className="detail-field-value" style={{ fontWeight: 700, fontStyle: 'normal', color: colors.mediumGray }}>
                        {subRegionLabel}
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
