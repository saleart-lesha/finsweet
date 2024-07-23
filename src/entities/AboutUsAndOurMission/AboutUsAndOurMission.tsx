import { Link } from 'react-router-dom'
import './scss/AboutUsAndOurMission.css'

const AboutUsAndOurMission = () => {
  return (
    <section className='AboutUsAndOurMission'>
      <div className='main_body'>
        <div className='separation'>
          <div className='first_block'></div>
          <div className='second_block'></div>
          <div className='third_block'></div>
        </div>
        <div className='container'>
          <div className='about_us'>
            <h2>ABOUT US</h2>
            <h1>We are a community of content writers who share their learnings</h1>
            <p className='description_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <Link to='/' className='reed_more'>
              {'Read More >'}
            </Link>
          </div>
          <div className='our_mission'>
            <h2>OUR MISSION</h2>
            <h1>Creating valuable content for creatives all around the world</h1>
            <p className='description_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsAndOurMission
