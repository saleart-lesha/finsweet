import Button from '../../shared/subscribeBtn/Button'
import imgFeaturedPost from './../../app/img/homePage/featuredPost/white-concrete-building-1838640.svg'
import './scss/FeaturedPost.css'
const FeaturedPost = () => {
  return (
    <section className='FeaturedPost'>
      <div className='container'>
        <header className='header_text'>
          <h1>Featured Post</h1>
        </header>
        <div className='container_content'>
          <img src={imgFeaturedPost} alt='' />
          <div className='about_author_text'>
            <p className='author'>
              By <span>John Doe</span>
            </p>
            <p className='separator'>|</p>
            <p className='date'>May 23, 2022</p>
          </div>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
          <p className='content_text'>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <Button color='yellow' text='Read More >' />
        </div>
      </div>
    </section>
  )
}

export default FeaturedPost
