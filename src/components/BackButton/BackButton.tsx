'use client'

import Link from 'next/link'

export default function BackButton() {
  return (
    <Link
      href="/"
      className="text-white font-bold rounded-full text-center transition-colors flex items-center justify-center"
      style={{
        backgroundColor: '#F58220',
        width: '270px',
        height: '47px',
        fontStyle: 'italic',
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = '#fcbb4f')
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = '#F58220')
      }
    >
            Voltar
    </Link>
  )
}
