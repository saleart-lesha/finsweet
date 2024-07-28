import ProfilePic from './../../app/img/homePage/Testimonials/Profile picture.svg'
import './scss/Testtimonials.css'

const Testimonials = () => {
  return (
    <section className='Testimonials'>
      <div className='main_body'>
        <div className='content'>
          <div className='first_block'>
            <h2>TESTIMONIALS</h2>
            <h1>What people say about our blog</h1>
            <p className='text_description'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </div>
          <hr className='separation'></hr>
          <div className='second_block'>
            <p className='main_text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <figure className='author'>
              <img src={ProfilePic} alt='' />
              <div className='author_description'>
                <p className='name'>Jonathan Vallem</p>
                <p className='place'>New york, USA</p>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
