import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black relative" style={{ height: '130px', paddingLeft: '75px' }}>
      <div className="h-full flex items-start justify-between" style={{ paddingTop: '19px' }}>
        <Image
          src="/img/logo-grupo-plan.png"
          alt="Grupo Plan Marketing"
          width={126}
          height={92.41}
          style={{ width: '126px', height: '92.41px' }}
        />
        <p className="text-white footer-copyright absolute bottom-0 right-0" style={{ fontSize: '12px', fontWeight: 'bold', paddingRight: '75px', paddingBottom: '22.59px' }}>
          © Grupo Plan Marketing (C) Todos os direitos reservados - {currentYear}
        </p>
      </div>
    </footer>
  )
}
