'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

import { colors } from '@/styles/colors'

interface PaginationButtonsProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function PaginationButtons({ currentPage, totalPages, onPageChange }: PaginationButtonsProps) {
  const maxVisibleDots = 5

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="flex items-center justify-center gap-6 py-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center justify-center bg-transparent hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        style={{ width: '50px', height: '50px', borderRadius: '20px', border: `3px solid ${colors.white}` }}
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-6 h-6" style={{ color: colors.white }} strokeWidth={3} />
      </button>

      <div className="flex gap-3 items-center">
        {Array.from({ length: Math.min(totalPages, maxVisibleDots) }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`rounded-full transition-all ${currentPage === index + 1
              ? 'w-4 h-4 bg-white'
              : 'w-3 h-3 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Página ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center bg-transparent hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        style={{ width: '50px', height: '50px', borderRadius: '20px', border: `3px solid ${colors.white}` }}
        aria-label="Próxima página"
      >
        <ChevronRight className="w-6 h-6" style={{ color: colors.white }} strokeWidth={3} />
      </button>
    </div>
  )
}
