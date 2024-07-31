import iconBusiness from './../../app/img/homePage/chooseACategory/IconBusiness.svg'
import IconStartup from './../../app/img/homePage/chooseACategory/IconStartup.svg'
import iconEconomy from './../../app/img/homePage/chooseACategory/iconEconomy.svg'
import iconTechnology from './../../app/img/homePage/chooseACategory/iconTechnology.svg'

const ChooseACategory = () => {
  return (
    <section className='chooseACategory'>
      <header className='chooseACategory__header'>
        <h1>Choose A Category</h1>
      </header>
      <div className='chooseACategory__container'>
        <div className='chooseACategory__card'>
          <img src={iconBusiness} alt='' />
          <h2>Business</h2>
          <p className='chooseACategory__card__description'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className='chooseACategory__card'>
          <img src={IconStartup} alt='' />
          <h2>Startup</h2>
          <p className='chooseACategory__card__description'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className='chooseACategory__card'>
          <img src={iconEconomy} alt='' />
          <h2>Economy</h2>
          <p className='chooseACategory__card__description'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className='chooseACategory__card'>
          <img src={iconTechnology} alt='' />
          <h2>Technology</h2>
          <p className='chooseACategory__card__description'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ChooseACategory
