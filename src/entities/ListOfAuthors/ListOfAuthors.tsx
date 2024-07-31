import { members } from './model/Members'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import iconFacebook from './../../app/img/socialNetworks/Facebook.svg'
import iconTwitter from './../../app/img/socialNetworks/Twitter.svg'
import iconInstagram from './../../app/img/socialNetworks/Instagram.svg'
import iconLinkedln from './../../app/img/socialNetworks/Linkedln.svg'

const ListOfAuthors = () => {
  let location = useLocation().pathname
  const [membersOnPage, setMembersOnPage] = useState<
    {
      id: number
      name: string
      photo: string
    }[]
  >([])
  useEffect(() => {
    if (location === '/') setMembersOnPage(members.slice(0, 4))
    if (location === '/aboutUs') setMembersOnPage(members)
  }, [location])

  return (
    <section className='listOfAuthors'>
      <header className='listOfAuthors__header'>
        <h1>List of Authors</h1>
      </header>
      <div className='listOfAuthors__container'>
        {membersOnPage.map((member) => {
          return (
            <div key={member.id} className='listOfAuthors__card'>
              <img className='listOfAuthors__card__img' src={member.photo} alt='' />
              <h2>{member.name}</h2>
              <p className='listOfAuthors__card__description'>Content Writer @Company</p>
              <div className='listOfAuthors__card__social_networks'>
                <img className='listOfAuthors__card__social_networks__imgIcon' src={iconFacebook} />
                <img className='listOfAuthors__card__social_networks__imgIcon' src={iconTwitter} />
                <img
                  className='listOfAuthors__card__social_networks__imgIcon'
                  src={iconInstagram}
                />
                <img className='listOfAuthors__card__social_networks__imgIcon' src={iconLinkedln} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ListOfAuthors
