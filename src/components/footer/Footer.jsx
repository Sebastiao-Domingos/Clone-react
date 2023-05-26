import {SFooter } from './style'
import { world } from '../../assets/exports/exportSlider'
import {FaFacebook,FaGithub,FaTwitter,FaPinterest,FaDribbble } from 'react-icons/fa'
export default function Footer() {
  return (
    <SFooter photo ={ world }>

      <div className="container-footer">
        <div className="about">
            <h2>About Us</h2> 
            <p>Integer rutrum ligula eu dignissim laoreet. Pellentesque venenatis nibh sed tellus faucibus bibendum. Sed fermentum est vitae rhoncus molestie. Cum sociis natoque penatibus et magnis dis montes.</p>     
        
            <div className="icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaGithub /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaDribbble /></a>
              <a href="#"><FaPinterest /></a>
            </div>
        </div>

        <div className="inform">
            <h2>Information Link</h2>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
        </div>

        <div className="contact">
            <h2>Contact Details</h2>

            <ul>
              <li><a href="#">info@yoursite.com</a></li>
              <li><a href="#">www.yoursite.com</a></li>
              <li><a href="#">PO Box 16122 Collins Street West Victoria 8007 Australia</a></li>
              <li><a href="#">+61 3 8376 6284</a></li>
            </ul>
        </div>

      </div>
      <div className="end">
        <p>All Rights Reserved. © 2018 <span>SmartEDU</span> Design By : <span> html design</span></p>
      </div>
    </SFooter>
  )
}
