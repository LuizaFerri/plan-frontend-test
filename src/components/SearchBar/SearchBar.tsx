import { Search } from 'lucide-react'

import { colors } from '@/styles/colors'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function SearchBar({ value, onChange, placeholder = 'Informe o país que deseja conhecer...' }: SearchBarProps) {
  return (
    <div className="relative input-container-responsive">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label="Buscar país"
        className="w-full h-full pl-6 pr-12 border-3 rounded-full bg-transparent focus:outline-none placeholder:text-black"
        style={{ color: colors.black, fontStyle: 'italic', borderWidth: '3px', borderColor: colors.white, borderStyle: 'solid' }}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <Search className="w-5 h-5" style={{ color: colors.white }} />
      </div>
    </div>
  )
}
