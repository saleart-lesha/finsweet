import Button from '../../shared/subscribeBtn/Button'
import './scss/PostedOnStartup.css'

const PostedOnStartup = () => {
  return (
    <section className='main_body'>
      <div className='container'>
        <p className='first_text'>POSTED ON STARTUP</p>
        <p className='main_text'>Step-by-step guide to choosing great font pairs</p>
        <div className='about_author_text'>
          <p className='author'>
            By <span>James West</span>
          </p>
          <p className='separator'> | </p>
          <p className='date'> May 23, 2022</p>
        </div>
        <p className='about'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button color='yellow' text='Read More >' />
      </div>
    </section>
  )
}

export default PostedOnStartup
