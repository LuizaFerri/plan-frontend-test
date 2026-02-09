import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black relative footer-responsive">
      <div className="h-full flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-0" style={{ paddingTop: '19px' }}>
        <Image
          src="/img/logo-grupo-plan.png"
          alt="Grupo Plan Marketing"
          width={126}
          height={92.41}
          className="w-[90px] h-[66px] lg:w-[126px] lg:h-[92.41px]"
        />
        <p className="text-white footer-copyright static lg:absolute lg:bottom-0 lg:right-0 text-center lg:text-left pr-4 pb-3 lg:pr-[75px] lg:pb-[22.59px]" style={{ fontSize: '12px', fontWeight: 'bold' }}>
          © Grupo Plan Marketing (C) Todos os direitos reservados - {currentYear}
        </p>
      </div>
    </footer>
  )
}
