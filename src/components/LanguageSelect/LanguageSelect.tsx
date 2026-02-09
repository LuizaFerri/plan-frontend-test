'use client'

import { useState, useRef, useEffect } from 'react'

import { ChevronDown } from 'lucide-react'

import { colors } from '@/styles/colors'

interface LanguageSelectProps {
  value: string
  onChange: (value: string) => void
  languages: Array<{ code: string; name: string }>
}

export function LanguageSelect({ value, onChange, languages }: LanguageSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = languages.find((lang) => lang.code === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (code: string) => {
    onChange(code)
    setIsOpen(false)
  }

  return (
    <div className="relative input-container-responsive" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full appearance-none px-6 font-semibold focus:outline-none cursor-pointer flex items-center justify-between"
        style={{
          backgroundColor: colors.primaryAlt,
          fontStyle: 'italic',
          borderWidth: '3px',
          borderColor: colors.white,
          borderStyle: 'solid',
          fontSize: '18px',
          fontWeight: 600,
          borderRadius: '25px',
          color: selectedLanguage ? colors.white : colors.black
        }}
        aria-label="Filtrar por idioma"
      >
        <span>{selectedLanguage ? selectedLanguage.name : 'Selecione o idioma'}</span>
        <ChevronDown className={`w-5 h-5 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="language-dropdown absolute top-full left-0 right-0 mt-2 overflow-y-auto"
          style={{
            backgroundColor: colors.primaryAlt,
            border: `3px solid ${colors.white}`,
            borderRadius: '20px',
            maxHeight: '520px', // ~13 itens
            zIndex: 50
          }}
        >
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className="language-option cursor-pointer px-6 py-3 hover:bg-white/10 transition-colors"
              style={{
                fontSize: '18px',
                fontWeight: 600,
                fontStyle: 'italic',
                color: colors.white
              }}
            >
              {lang.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
