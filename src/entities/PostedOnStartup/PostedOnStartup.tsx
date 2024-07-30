import Button from '../../shared/subscribeBtn/Button'

const PostedOnStartup = () => {
  return (
    <section className='postedOnStartup__main__body'>
      <div className='postedOnStartup__container'>
        <p className='postedOnStartup__container__name'>POSTED ON STARTUP</p>
        <p className='postedOnStartup__container__slogan'>
          Step-by-step guide to choosing great font pairs
        </p>
        <div className='postedOnStartup__author'>
          <p className='postedOnStartup__author__name'>
            By <span>James West</span>
          </p>
          <p className='postedOnStartup__author__separator'> | </p>
          <p className='postedOnStartup__author__date'> May 23, 2022</p>
        </div>
        <p className='postedOnStartup__container__about'>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <Button color='yellow' text='Read More >' />
      </div>
    </section>
  )
}

export default PostedOnStartup
