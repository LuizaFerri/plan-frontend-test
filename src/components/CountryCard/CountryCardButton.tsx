'use client'

import Link from 'next/link'

import { colors } from '@/styles/colors'

interface CountryCardButtonProps {
    code: string
}

export default function CountryCardButton({ code }: CountryCardButtonProps) {
  return (
    <Link
      href={`/country/${code}`}
      className="w-full text-white font-bold py-3 px-6 rounded-full text-center transition-colors"
      style={{ backgroundColor: colors.primary }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.primaryHover)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.primary)}
    >
            Ver mais
    </Link>
  )
}
