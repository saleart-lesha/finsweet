import AboutUsAndOurMission from '../../entities/AboutUsAndOurMission/AboutUsAndOurMission'
import ChooseACategory from '../../entities/ChooseACatagory/ChooseACategory'
import PostedOnStartup from '../../entities/PostedOnStartup/PostedOnStartup'
import WeStarted from '../../entities/WeStarted/WeStarted'
import HomePosts from '../../widget/HomePosts/HomePosts'

const HomePage = () => {
  return (
    <div>
      <PostedOnStartup />
      <HomePosts />
      <AboutUsAndOurMission />
      <ChooseACategory />
      <WeStarted />
    </div>
  )
}

export default HomePage
