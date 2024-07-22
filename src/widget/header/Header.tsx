import { Link } from 'react-router-dom'
import logo from './../../app/img/logoHeader/Logo.svg'
import './scss/Header.css'
import Button from '../../shared/subscribeBtn/Button'

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='' />
      <div className='menu'>
        <nav className='menu_body'>
          <ul className='menu_body_list'>
            <li className='menu_body_link'>
              <Link className='menu_body_text' to={'/'}>
                Home
              </Link>
            </li>
            <li className='menu_body_link'>
              <Link className='menu_body_text' to={'/'}>
                Blog
              </Link>
            </li>
            <li className='menu_body_link'>
              <Link className='menu_body_text' to={'/'}>
                About Us
              </Link>
            </li>
            <li className='menu_body_link'>
              <Link className='menu_body_text' to={'/'}>
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
