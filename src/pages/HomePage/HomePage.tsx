import AboutUsAndOurMission from '../../entities/AboutUsAndOurMission/AboutUsAndOurMission'
import PostedOnStartup from '../../entities/PostedOnStartup/PostedOnStartup'
import HomePosts from '../../widget/HomePosts/HomePosts'

const HomePage = () => {
  return (
    <div>
      <PostedOnStartup />
      <HomePosts />
      <AboutUsAndOurMission />
    </div>
  )
}

export default HomePage
