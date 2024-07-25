import './scss/WeAreFeaturedIn.css'
import logo1 from './../../app/img/homePage/WeAreFeaturedIn/Logo 1.svg'
import logo2 from './../../app/img/homePage/WeAreFeaturedIn/Logo 2.svg'
import logo3 from './../../app/img/homePage/WeAreFeaturedIn/Logo 3.svg'
import logo4 from './../../app/img/homePage/WeAreFeaturedIn/Logo 4.svg'
import logo5 from './../../app/img/homePage/WeAreFeaturedIn/Logo 5.svg'

const WeAreFeaturedIn = () => {
  return (
    <section className='WeAreFeaturedIn'>
      <div className='main_body'>
        <div className='text'>
          <p className='firs_text'>We are</p>
          <p className='second_text'>Featured in</p>
        </div>
        <img src={logo1} alt='' />
        <img src={logo2} alt='' />
        <img src={logo3} alt='' />
        <img src={logo4} alt='' />
        <img src={logo5} alt='' />
      </div>
    </section>
  )
}

export default WeAreFeaturedIn
