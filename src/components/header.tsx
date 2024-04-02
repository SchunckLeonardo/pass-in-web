import LogoNLW from '../assets/logo_nlw.svg'

export function Header() {
  return (
    <header className='flex gap-5 items-center py-2'>
      <img src={LogoNLW} />
      <nav className='flex items-center gap-5'>
        <a href='' className='font-medium text-md text-zinc-300'>Eventos</a>
        <a href='' className='font-medium text-md'>Participantes</a>
      </nav>
    </header>
  )
}
