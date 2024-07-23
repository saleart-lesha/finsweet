import AllPosts from '../../entities/AllPosts/AllPosts'
import FeaturedPost from '../../entities/FeaturedPost/FeaturedPost'
import './scss/HomePosts.css'

const HomePosts = () => {
  return (
    <div className='HomePosts'>
      <FeaturedPost />
      <AllPosts />
    </div>
  )
}

export default HomePosts
