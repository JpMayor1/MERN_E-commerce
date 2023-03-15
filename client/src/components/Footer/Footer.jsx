import React from 'react'
import "./Footer.css"
import { FaFacebookF, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer" id='contact'>
    <div className="container">
        <div className="content-up">
            <div className="contact">
                <h1>Contact Us</h1>
                <p>0910 021 9750 </p>
                <p>Diner@gmail.com</p>
            </div>
            <div className="link">
                <h1>D&J Diner</h1>
                <div className="links-icons">
                    <Link className='icon' to="https://www.facebook.com/profile.php?id=100085932051209" target="blank"><FaFacebookF /></Link>
                    <Link className='icon' to="#"><FaTiktok /></Link>
                    <Link className='icon' to="#"><FaInstagram /></Link>
                </div>
            </div>
            <div className="work-hours">
                <h1>Working Hours</h1>
                <p>Mon - Sun : 8:00 am - 2:00 am</p>
            </div>
        </div>
        <div className="content-down">
            <p>2023 <span>JPm</span>. All Rights reserved</p>
        </div>
    </div>
</div>
  )
}

export default Footer