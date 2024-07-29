import { Link } from 'react-router-dom'
import logo from './../../app/img/logoHeader/Logo.svg'
import Button from '../../shared/subscribeBtn/Button'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='' />
      <div className='header__menu'>
        <nav className='header__menu__body'>
          <ul className='header__menu__body__list'>
            <li className='header__menu__body__link'>
              <Link className='header__menu__body__text' to={'/'}>
                Home
              </Link>
            </li>
            <li className='header__menu__body__link'>
              <Link className='header__menu__body__text' to={'/'}>
                Blog
              </Link>
            </li>
            <li className='header__menu__body__link'>
              <Link className='header__menu__body__text' to={'/'}>
                About Us
              </Link>
            </li>
            <li className='header__menu__body__link'>
              <Link className='header__menu__body__text' to={'/'}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <Button color={'white'} text='Subscribe' />
      </div>
    </header>
  )
}

export default Header
