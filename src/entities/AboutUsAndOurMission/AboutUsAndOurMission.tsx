import { Link } from 'react-router-dom'

const AboutUsAndOurMission = () => {
  return (
    <section className='aboutUsAndOurMission'>
      <div className='aboutUsAndOurMission__separation'>
        <div className='aboutUsAndOurMission__separation__first__block'></div>
        <div className='aboutUsAndOurMission__separation__second__block'></div>
        <div className='aboutUsAndOurMission__separation__third__block'></div>
      </div>
      <div className='aboutUsAndOurMission__container'>
        <div className='aboutUsAndOurMission__card'>
          <h2>ABOUT US</h2>
          <h1>We are a community of content writers who share their learnings</h1>
          <p className='aboutUsAndOurMission__card__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to='/' className='aboutUsAndOurMission__reed__more_btn'>
            {'Read More >'}
          </Link>
        </div>
        <div className='aboutUsAndOurMission__card'>
          <h2>OUR MISSION</h2>
          <h1>Creating valuable content for creatives all around the world</h1>
          <p className='aboutUsAndOurMission__card__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutUsAndOurMission
