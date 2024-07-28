import './scss/Footer.css'
import logo from './../../app/img/logoHeader/Logo.svg'
import { Link } from 'react-router-dom'
import Button from '../../shared/subscribeBtn/Button'
import iconFacebook from './../../app/img/socialNetworks/Facebook.svg'
import iconTwitter from './../../app/img/socialNetworks/Twitter.svg'
import iconInstagram from './../../app/img/socialNetworks/Instagram.svg'
import iconLinkedln from './../../app/img/socialNetworks/Linkedln.svg'

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='header_footer'>
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
              <li className='menu_body_link'>
                <Link className='menu_body_text' to={'/'}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='subscribe'>
        <header className='subscribe_header'>
          <h1>Subscribe to our news letter to get latest updates and news</h1>
        </header>
        <div className='subscribe_form'>
          <input type='text' placeholder='Enter Your Email' />
          <Button color='yellow' text='Subscribe' />
        </div>
      </div>
      <div className='contact'>
        <div className='address_container'>
          <p className='address'>Finstreet 118 2561 Fintown</p>
          <p className='mail'>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className='social_network'>
          <img className='imgIcon' src={iconFacebook} alt='' />
          <img className='imgIcon' src={iconTwitter} alt='' />
          <img className='imgIcon' src={iconInstagram} alt='' />
          <img className='imgIcon' src={iconLinkedln} alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
