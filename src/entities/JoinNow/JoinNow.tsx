import Button from '../../shared/subscribeBtn/Button'

const JoinNow = () => {
  return (
    <section className='joinNow'>
      <div className='joinNow__container'>
        <h1>Join our team to be a part of our story</h1>
        <p className='joinNow__container__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
      </div>
      <Button color='yellow' text='Join Now' />
    </section>
  )
}

export default JoinNow
