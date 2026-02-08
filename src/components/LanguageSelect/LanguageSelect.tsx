import { ChevronDown } from 'lucide-react'

interface LanguageSelectProps {
  value: string
  onChange: (value: string) => void
}

export function LanguageSelect({ value, onChange }: LanguageSelectProps) {
  return (
    <div className="relative" style={{ width: '420px', height: '50px' }}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full appearance-none px-6 rounded-full text-black font-medium focus:outline-none cursor-pointer"
        style={{ backgroundColor: '#f68824', fontStyle: 'italic', borderWidth: '3px', borderColor: 'white', borderStyle: 'solid' }}
      >
        <option value="" style={{ backgroundColor: '#f68824', color: 'black' }}>Selecione o idioma</option>
        <option value="portuguese" style={{ backgroundColor: '#f68824', color: 'black' }}>Português</option>
        <option value="english" style={{ backgroundColor: '#f68824', color: 'black' }}>Inglês</option>
        <option value="spanish" style={{ backgroundColor: '#f68824', color: 'black' }}>Espanhol</option>
        <option value="french" style={{ backgroundColor: '#f68824', color: 'black' }}>Francês</option>
      </select>
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}
