import './scss/ListOfAuthors.css'
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
    <section className='ListOfAuthors'>
      <div className='main_body'>
        <header className='header_container'>
          <h1>List of Authors</h1>
        </header>
        <div className='container'>
          {membersOnPage.map((member) => {
            return (
              <div key={member.id} className='card'>
                <img className='img' src={member.photo} alt='' />
                <h2>{member.name}</h2>
                <p className='description_text'>Content Writer @Company</p>
                <div className='social_networks'>
                  <img className='imgIcon' src={iconFacebook} />
                  <img className='imgIcon' src={iconTwitter} />
                  <img className='imgIcon' src={iconInstagram} />
                  <img className='imgIcon' src={iconLinkedln} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ListOfAuthors
