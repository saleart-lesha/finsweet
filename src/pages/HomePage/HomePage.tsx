import AboutUsAndOurMission from '../../entities/AboutUsAndOurMission/AboutUsAndOurMission'
import ChooseACategory from '../../entities/ChooseACatagory/ChooseACategory'
import PostedOnStartup from '../../entities/PostedOnStartup/PostedOnStartup'
import HomePosts from '../../widget/HomePosts/HomePosts'

const HomePage = () => {
  return (
    <div>
      <PostedOnStartup />
      <HomePosts />
      <AboutUsAndOurMission />
      <ChooseACategory />
    </div>
  )
}

export default HomePage
