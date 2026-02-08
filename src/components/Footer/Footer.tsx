import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/img/logo-grupo-plan.png"
          alt="Grupo Plan Marketing"
          width={150}
          height={60}
          className="h-12 w-auto"
        />
        <p className="text-white text-sm footer-copyright">
          © Grupo Plan Marketing (C) Todos os direitos reservados - {currentYear}
        </p>
      </div>
    </footer>
  )
}
