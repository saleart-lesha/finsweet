import { Link } from 'react-router-dom'

const AllPosts = () => {
  return (
    <section className='homePosts__allPost'>
      <header className='homePosts__allPost__header'>
        <h1>All Posts</h1>
        <nav>
          <Link to='/'>View All</Link>
        </nav>
      </header>
      <div className='homePosts__allPost__container'>
        <div className='homePosts__allPost__card'>
          <div className='homePosts__allPost__author'>
            <p className='homePosts__allPost__author__name'>
              By <span>John Doe</span>
            </p>
            <p className='homePosts__allPost__author__separator'>|</p>
            <p className='homePosts__allPost__author__date'>May 23, 2022</p>
          </div>
          <p className='homePosts__allPost__card__description'>
            8 Figma design systems that you can download for free today.
          </p>
        </div>
        <div className='homePosts__allPost__card'>
          <div className='homePosts__allPost__author'>
            <p className='homePosts__allPost__author__name'>
              By <span>John Doe</span>
            </p>
            <p className='homePosts__allPost__author__separator'>|</p>
            <p className='homePosts__allPost__author__date'>May 23, 2022</p>
          </div>
          <p className='homePosts__allPost__card__description'>
            8 Figma design systems that you can download for free today.
          </p>
        </div>
        <div className='homePosts__allPost__card'>
          <div className='homePosts__allPost__author'>
            <p className='homePosts__allPost__author__name'>
              By <span>John Doe</span>
            </p>
            <p className='homePosts__allPost__author__separator'>|</p>
            <p className='homePosts__allPost__author__date'>May 23, 2022</p>
          </div>
          <p className='homePosts__allPost__card__description'>
            8 Figma design systems that you can download for free today.
          </p>
        </div>
        <div className='homePosts__allPost__card'>
          <div className='homePosts__allPost__author'>
            <p className='homePosts__allPost__author__name'>
              By <span>John Doe</span>
            </p>
            <p className='homePosts__allPost__author__separator'>|</p>
            <p className='homePosts__allPost__author__date'>May 23, 2022</p>
          </div>
          <p className='homePosts__allPost__card__description'>
            8 Figma design systems that you can download for free today.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AllPosts
