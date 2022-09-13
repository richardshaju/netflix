import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className="list-items">
                <div className="column">
                    <a href="">Audio and Subtitles</a>
                    <a href="">Media Center</a>
                    <a href="">Privacy</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="column">
                    <a href="">Audio Description</a>
                    <a href="">Investaor Relations</a>
                    <a href="">Legal Notices</a>

                </div>
                <div className="column">
                    <a href="">Help Center</a>
                    <a href="">Jobs</a>
                    <a href="">Cookies Prefernces</a>

                </div>
                <div className="column">
                    <a href="">Gift Card</a>
                    <a href="">Terms of Use</a>
                    <a href="">Corpertae Information</a>

                </div>
            </div>
            <div className='bottom'>
                <button>Service Code</button>
                 <p>Copyright ©  <a href="https://www.instagram.com/richard_kuttikkadan/"> Richard Shaju </a></p>
            </div>
        </div>
    )
}

export default Footer