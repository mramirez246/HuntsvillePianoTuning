import React from 'react'
// 
import '../../STYLESHEETS/Footer.css'
// 
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { c_businessDesc, c_businessName, c_facebook, c_footerLinks, c_instagram, c_twitter, c_yelp } from '../../Constants'
import { useNavigate } from 'react-router'

export default function Footer() {
  const navigate = useNavigate()
  return (
    <footer className=' bg1 color2 font1'>
      <h1 onClick={() => { navigate('/') }}>{c_businessName}</h1>
      <p className='footer-desc'>{c_businessDesc}
      </p>
      {c_footerLinks()}
      <div className='footer-divider'></div>
      <div className='footer-bottom'>
        <p className='footer-copy color3'>
          &copy; {c_businessName} 2023. All Rights Reserved.
        </p>
        <div className='socials'>
          <a target='_blank' href={c_facebook} className='social-link'><BsFacebook color="1871E6" /></a>
          <a target='_blank' href={c_instagram} className='social-link'><AiFillInstagram color="C12A79" /></a>
          <a target='_blank' href={c_twitter} className='social-link'><AiOutlineTwitter color="1A93E3" /></a>
          <a target='_blank' href={c_yelp} className='social-link'><FaYelp color="F1436B" /></a>
        </div>
      </div>
    </footer>
  )
}
