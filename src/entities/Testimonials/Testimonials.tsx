import ProfilePic from './../../app/img/homePage/Testimonials/Profile picture.svg'

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <div className='testimonials__container'>
        <div className='testimonials__first__block'>
          <h2>TESTIMONIALS</h2>
          <h1>What people say about our blog</h1>
          <p className='testimonials__first__block__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
        </div>
        <hr className='testimonials__separation'></hr>
        <div className='testimonials__second__block'>
          <p className='testimonials__second__block__description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <figure className='testimonials__author'>
            <img src={ProfilePic} alt='' />
            <div>
              <p className='testimonials__author__name'>Jonathan Vallem</p>
              <p className='testimonials__author__place'>New york, USA</p>
            </div>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
