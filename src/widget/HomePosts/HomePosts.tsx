import AllPosts from '../../entities/AllPosts/AllPosts'
import FeaturedPost from '../../entities/FeaturedPost/FeaturedPost'

const HomePosts = () => {
  return (
    <div className='homePosts__main__body'>
      <FeaturedPost />
      <AllPosts />
    </div>
  )
}

export default HomePosts
