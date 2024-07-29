import logo from './../../app/img/logoHeader/Logo.svg'
import { Link } from 'react-router-dom'
import Button from '../../shared/subscribeBtn/Button'
import iconFacebook from './../../app/img/socialNetworks/Facebook.svg'
import iconTwitter from './../../app/img/socialNetworks/Twitter.svg'
import iconInstagram from './../../app/img/socialNetworks/Instagram.svg'
import iconLinkedln from './../../app/img/socialNetworks/Linkedln.svg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__header'>
        <img src={logo} alt='' />
        <nav className='footer__menu'>
          <ul className='footer__menu__list'>
            <li className='footer__menu__link'>
              <Link className='footer__menu__text' to={'/'}>
                Home
              </Link>
            </li>
            <li className='footer__menu__link'>
              <Link className='footer__menu__text' to={'/'}>
                Blog
              </Link>
            </li>
            <li className='footer__menu__link'>
              <Link className='footer__menu__text' to={'/'}>
                About Us
              </Link>
            </li>
            <li className='footer__menu__link'>
              <Link className='footer__menu__text' to={'/'}>
                Contact us
              </Link>
            </li>
            <li className='footer__menu__link'>
              <Link className='footer__menu__text' to={'/'}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className='footer__subscribe'>
        <header className='footer__subscribe__header'>
          <h1>Subscribe to our news letter to get latest updates and news</h1>
        </header>
        <div className='footer__subscribe__form'>
          <input type='text' placeholder='Enter Your Email' />
          <Button color='yellow' text='Subscribe' />
        </div>
      </div>
      <div className='footer__contact'>
        <div className='footer__contact__container'>
          <p className='footer__contact__container__address'>Finstreet 118 2561 Fintown</p>
          <p className='footer__contact__container__mail'>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className='footer__social_network'>
          <img className='footer__social_network__imgIcon' src={iconFacebook} alt='' />
          <img className='footer__social_network__imgIcon' src={iconTwitter} alt='' />
          <img className='footer__social_network__imgIcon' src={iconInstagram} alt='' />
          <img className='footer__social_network__imgIcon' src={iconLinkedln} alt='' />
        </div>
      </div>
    </footer>
  )
}

export default Footer
