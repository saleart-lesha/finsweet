import AboutUsAndOurMission from '../../entities/AboutUsAndOurMission/AboutUsAndOurMission'
import ChooseACategory from '../../entities/ChooseACatagory/ChooseACategory'
import JoinNow from '../../entities/JoinNow/JoinNow'
import ListOfAuthors from '../../entities/ListOfAuthors/ListOfAuthors'
import PostedOnStartup from '../../entities/PostedOnStartup/PostedOnStartup'
import Testimonials from '../../entities/Testimonials/Testimonials'
import WeAreFeaturedIn from '../../entities/WeAreFeaturedIn/WeAreFeaturedIn'
import WeStarted from '../../entities/WeStarted/WeStarted'
import HomePosts from '../../widget/HomePosts/HomePosts'

const HomePage = () => {
  return (
    <div className='home__page'>
      <PostedOnStartup />
      <div className='home__page__content'>
        <HomePosts />
        <AboutUsAndOurMission />
        <ChooseACategory />
        <WeStarted />
        <ListOfAuthors />
        <WeAreFeaturedIn />
        <Testimonials />
        <JoinNow />
      </div>
    </div>
  )
}

export default HomePage
