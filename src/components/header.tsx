import LogoNLW from '../assets/logo_nlw.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <header className='flex gap-5 items-center py-2'>
      <img src={LogoNLW} />
      <nav className='flex items-center gap-5'>
        <NavLink>Eventos</NavLink>
        <NavLink active>Participantes</NavLink>
      </nav>
    </header>
  )
}
