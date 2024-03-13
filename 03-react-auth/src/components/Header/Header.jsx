import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import './header.scss'

const Header = () => {
  const { isAuth, logout } = useAuthContext()

  // Comparamos si el link está activo o no, con ayuda del NavLink
  const linkIsActive = ({ isActive, isPending }) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  // Documentación de NavLink
  // https://reactrouter.com/en/main/components/nav-link
  return (
    <nav className='header'>
      <NavLink className='header__logo' to='/'>Logo</NavLink>
      <ul className='header__nav-list'>
        <li className='header__list-item'>
          <NavLink className={linkIsActive} to='/'>Home</NavLink>
        </li>
        <li className='header__list-item'>
          <NavLink className={linkIsActive} to='/dashboard'>Dashboard</NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/secret'>Secret</NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  className='header__item-link'
                  to='/'
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/login'>Login</NavLink>
              </li>
              <li className='header__list-item'>
                <NavLink className={linkIsActive} to='/signup'>Signup</NavLink>
              </li>
            </>
            )}

      </ul>
    </nav>
  )
}

export default Header
