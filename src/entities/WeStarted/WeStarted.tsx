import bgimage from './../../app/img/homePage/WeStarted/close-up-photography-of-man-wearing-sunglasses-1212984.svg'
import Button from '../../shared/subscribeBtn/Button'

const WeStarted = () => {
  return (
    <section className='weStarted'>
      <div className='weStarted__main__body'>
        <img src={bgimage} alt=''></img>
        <div className='weStarted__container'>
          <div className='weStarted__container__content'>
            <h2>WHY WE STARTED </h2>
            <h1>It started out as a simple idea and evolved into our passion</h1>
            <p className='weStarted__container__description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>
            <Button color='yellow' text='Discover our story >' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WeStarted
