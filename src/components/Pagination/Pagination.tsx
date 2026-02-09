import PaginationButtons from './PaginationButtons'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    return <PaginationButtons currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
}
