import logo1 from './../../app/img/homePage/WeAreFeaturedIn/Logo 1.svg'
import logo2 from './../../app/img/homePage/WeAreFeaturedIn/Logo 2.svg'
import logo3 from './../../app/img/homePage/WeAreFeaturedIn/Logo 3.svg'
import logo4 from './../../app/img/homePage/WeAreFeaturedIn/Logo 4.svg'
import logo5 from './../../app/img/homePage/WeAreFeaturedIn/Logo 5.svg'

const WeAreFeaturedIn = () => {
  return (
    <section className='weAreFeaturedIn'>
      <div className='weAreFeaturedIn__container'>
        <p className='weAreFeaturedIn__container__first__text'>We are</p>
        <p className='weAreFeaturedIn__container__second__text'>Featured in</p>
      </div>
      <img src={logo1} alt='' />
      <img src={logo2} alt='' />
      <img src={logo3} alt='' />
      <img src={logo4} alt='' />
      <img src={logo5} alt='' />
    </section>
  )
}

export default WeAreFeaturedIn
