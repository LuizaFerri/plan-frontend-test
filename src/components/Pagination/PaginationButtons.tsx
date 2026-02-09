'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'

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
    <div className="flex items-center justify-center gap-4 py-8">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        aria-label="Página anterior"
      >
        <ChevronLeft className="w-6 h-6" style={{ color: '#f68824' }} />
      </button>

      <div className="flex gap-2">
        {Array.from({ length: Math.min(totalPages, maxVisibleDots) }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-3 h-3 rounded-full transition-all ${currentPage === index + 1
              ? 'bg-white scale-125'
              : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Página ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-white hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        aria-label="Próxima página"
      >
        <ChevronRight className="w-6 h-6" style={{ color: '#f68824' }} />
      </button>
    </div>
  )
}
