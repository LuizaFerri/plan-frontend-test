'use client'

import Link from 'next/link'

import { colors } from '@/styles/colors'

export default function BackButton() {
  return (
    <Link
      href="/"
      className="text-white font-bold rounded-full text-center transition-colors flex items-center justify-center back-button-responsive"
      style={{
        backgroundColor: colors.primaryAlt,
        fontStyle: 'italic',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = colors.primaryHover)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = colors.primaryAlt)
      }
    >
            Voltar
    </Link>
  )
}
