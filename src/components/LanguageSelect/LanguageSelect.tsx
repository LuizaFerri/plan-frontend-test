import { ChevronDown } from 'lucide-react'

import { colors } from '@/styles/colors'

interface LanguageSelectProps {
  value: string
  onChange: (value: string) => void
}

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  return (
    <div className="relative input-container-responsive">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Filtrar por idioma"
        className="w-full h-full appearance-none px-6 rounded-full text-black font-medium focus:outline-none cursor-pointer"
        style={{ backgroundColor: colors.primaryAlt, fontStyle: 'italic', borderWidth: '3px', borderColor: colors.white, borderStyle: 'solid' }}
      >
        <option value="" style={{ backgroundColor: colors.primaryAlt, color: colors.black }}>Selecione o idioma</option>
        <option value="portuguese" style={{ backgroundColor: colors.primaryAlt, color: colors.black }}>Português</option>
        <option value="english" style={{ backgroundColor: colors.primaryAlt, color: colors.black }}>Inglês</option>
        <option value="spanish" style={{ backgroundColor: colors.primaryAlt, color: colors.black }}>Espanhol</option>
        <option value="french" style={{ backgroundColor: colors.primaryAlt, color: colors.black }}>Francês</option>
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}
