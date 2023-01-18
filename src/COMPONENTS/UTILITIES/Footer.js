import React from 'react'
// 
import '../../STYLESHEETS/Footer.css'
// 
import { BsFacebook, BsLinkedin } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaYelp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className=' bg1 color2 font1'>
      <h1>Everything Bagel Inc.</h1>
      <p className='footer-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a augue et tellus varius accumsan.
      </p>
      <div className='footer-links'>
        <Link className='footer-link color2' to="/">Home</Link>
        <Link className='footer-link color2' to="/">About</Link>
        <Link className='footer-link color2' to="/">Menu</Link>
        <Link className='footer-link color2' to="/">Products</Link>
        <Link className='footer-link color2' to="/">Contact Us</Link>
      </div>
      <div className='footer-divider'></div>
      <div className='footer-bottom'>
        <p className='footer-copy color3'>
          &copy; Happy Code 2023. All Rights Reserved.
        </p>
        <div className='socials'>
          <a href="" className='social-link'><BsFacebook color="1871E6" /></a>
          <a href="" className='social-link'><AiFillInstagram color="C12A79" /></a>
          <a href="" className='social-link'><AiOutlineTwitter color="1A93E3" /></a>
          <a href="" className='social-link'><FaYelp color="F1436B" /></a>
          <a href="" className='social-link'><BsLinkedin color="0370AE" /></a>
        </div>
      </div>
    </footer>
  )
}
