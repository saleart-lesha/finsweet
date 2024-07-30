import Button from '../../shared/subscribeBtn/Button'
import imgFeaturedPost from './../../app/img/homePage/featuredPost/white-concrete-building-1838640.svg'
const FeaturedPost = () => {
  return (
    <section className='homePosts__featured'>
      <header className='homePosts__featured__header'>
        <h1>Featured Post</h1>
      </header>
      <div className='homePosts__featured__content'>
        <img src={imgFeaturedPost} alt='' />
        <div className='homePosts__featured__author'>
          <p className='homePosts__featured__author__name'>
            By <span>John Doe</span>
          </p>
          <p className='homePosts__featured__author__separator'>|</p>
          <p className='homePosts__featured__author__date'>May 23, 2022</p>
        </div>
        <h2 className='homePosts__featured__content__header'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h2>
        <p className='homePosts__featured__content__description'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button color='yellow' text='Read More >' />
      </div>
    </section>
  )
}

export default FeaturedPost
