import './scss/WeStarted.css'
import bgimage from './../../app/img/homePage/WeStarted/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
import Button from '../../shared/subscribeBtn/Button'

const WeStarted = () => {
  return (
    <section className='WeStarted'>
      <div className='main_body'>
        <div className='container'>
          <img src={bgimage} alt=''></img>
          <div className='content_container'>
            <div className='content'>
              <div className='we_started'>
                <h2>WHY WE STARTED </h2>
                <h1>It started out as a simple idea and evolved into our passion</h1>
                <p className='description_text'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip.
                </p>
                <Button color='yellow' text='Discover our story >' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeStarted
