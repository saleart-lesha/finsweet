import './scss/JoinNow.css'
import Button from '../../shared/subscribeBtn/Button'

const JoinNow = () => {
  return (
    <section className='JoinNow'>
      <div className='main_body'>
        <div className='text'>
          <h1>Join our team to be a part of our story</h1>
          <p className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt.
          </p>
        </div>

        <Button color='yellow' text='Join Now' />
      </div>
    </section>
  )
}

export default JoinNow
