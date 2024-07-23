import { Link } from 'react-router-dom'
import './scss/AllPosts.css'

const AllPosts = () => {
  return (
    <section className='AllPosts'>
      <div className='container'>
        <header className='header_text'>
          <h1>All Posts</h1>
          <nav>
            <Link to='/'>View All</Link>
          </nav>
        </header>
        <div className='card_container'>
          <div className='card'>
            <div className='about_author_text'>
              <p className='author'>
                By <span>John Doe</span>
              </p>
              <p className='separator'>|</p>
              <p className='date'>May 23, 2022</p>
            </div>
            <p className='description_text'>
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className='card'>
            <div className='about_author_text'>
              <p className='author'>
                By <span>John Doe</span>
              </p>
              <p className='separator'>|</p>
              <p className='date'>May 23, 2022</p>
            </div>
            <p className='description_text'>
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className='card'>
            <div className='about_author_text'>
              <p className='author'>
                By <span>John Doe</span>
              </p>
              <p className='separator'>|</p>
              <p className='date'>May 23, 2022</p>
            </div>
            <p className='description_text'>
              8 Figma design systems that you can download for free today.
            </p>
          </div>
          <div className='card'>
            <div className='about_author_text'>
              <p className='author'>
                By <span>John Doe</span>
              </p>
              <p className='separator'>|</p>
              <p className='date'>May 23, 2022</p>
            </div>
            <p className='description_text'>
              8 Figma design systems that you can download for free today.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllPosts
