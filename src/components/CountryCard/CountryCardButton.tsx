'use client'

import Link from 'next/link'

interface CountryCardButtonProps {
    code: string
}

export default function CountryCardButton({ code }: CountryCardButtonProps) {
    return (
        <Link
            href={`/country/${code}`}
            className="w-full text-white font-bold py-3 px-6 rounded-full text-center transition-colors"
            style={{ backgroundColor: '#f68824' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fcbb4f')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#f68824')}
        >
            Ver mais
        </Link>
    )
}
