import React from 'react';
import {FaFire} from "react-icons/fa";
import {FaYoutube } from "react-icons/fa";
import {FaDiscord } from "react-icons/fa";
import {FaCloudUploadAlt} from "react-icons/fa";
import './footer.css';

const Footer = () => {
     return ( 
          <div>
               
          <div className="Footer">

 <p className='head'> < FaFire className='icon1' />Favorites</p>

 <h1 className='head1'>THE Box Office</h1>
 <p className='paras'>Set In A Beautiful Seaside Town On The Italian Riviera , The Original Animated Features Is Acoming-Of-Age
      Story About One young Boy Ezperiencing An Unforgettable Summer Filled With Gelato , Pasta And Endless Scooter Rides.
      <br />
<div className="unique">
     <FaYoutube className='icon'/>
     <FaDiscord className='icon'/>
     <FaCloudUploadAlt className='icon'/>
</div>
 </p>
 <div className='content'>

               <div className='direction'>
               <h5 className='theme'>COMPANY</h5>
               <li><a href='/'>Our Team</a></li>
               <li><a href='/'>Our Career</a></li>
               <li><a href='/'>Our Partners</a></li>
               <li><a href='/'>Charity</a></li>
               <li><a href='/'>Press Room</a></li>
               <li><a href='/'>Plex Lab</a></li>

          </div>

          <div className='direction'>
               <h5 className='theme'>WATCH</h5>
               <li><a href='/'>Movies</a></li>
               <li><a href='/'>TV Shows</a></li>
               <li><a href='/'> Commedy </a></li>
                <li><a href='/'>Cartoons</a></li>
               <li><a href='/'>Horror</a></li>
               <li><a href='/'>Funny Shows</a></li>

          </div>
          

          <div className='direction'>
               <h5 className='theme'>HELP</h5>
               <li><a href='/'>About Us </a></li>
               <li><a href='/'>Customer Support</a></li>
               <li><a href='/'>Contact Us</a></li>
               <li><a href='/'>Advertise</a></li>
               <li><a href='/'>Forums</a></li>
               <li><a href='/'>Others</a></li>
</div>


        <p className='end'>All Right Reserved &copy; 2022 The Associates &&  Accessibility  </p>
        <p className='end1'> Language :<span className='language'>  English (US)</span></p>
     </div>
          </div>
          </div>
      );
}
 
export default Footer;