import React from 'react'
import './Footer.css'
import youtube from '../../assets/youtube_icon.png'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-icons">
     <img src={facebook} alt="" />
     <img src={youtube} alt="" />
     <img src={instagram} alt="" />
     <img src={twitter} alt="" />
    </div>

    <ul>
    <li>Audio Description</li>
    <li>Help Center</li>
    <li>Gift Cards</li>
    <li>Media Center</li>
    <li>Investor Relation</li>
    <li>Jobs</li>
    <li>Terms of Use</li>
    <li>Privacy</li>
    <li>Legal Notices</li>
    <li>Cookie Preference</li>
    <li>Corporate Information</li>
    <li>Contact Us</li>
    </ul>
    <p className='copyText'>Netflix 1997 - 2024</p>
    </div>
  )
}

export default Footer