import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <p className='footer__question'>Questions? Call 0 801-000-723</p>
        <div className="footer__main">
            <ul>
                <li>
                    <a href="#">FAQ</a>
                </li>
                <li>
                    <a href="#">Investor Relations</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="#">Help Center</a>
                </li>
                <li>
                    <a href="#">Jobs</a>
                </li>
                <li>
                    <a href="#">Privacy</a>
                </li>
                <li>
                    <a href="#">Speed</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Account</a>
                </li>
                <li>
                    <a href="#">Redeem Gift Cards</a>
                </li>
                <li>
                    <a href="#">Cookie Preferences</a>
                </li>
                <li>
                    <a href="#">Legal Notices</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#">Media Center</a>
                </li>
                <li>
                    <a href="#">Ways to Watch</a>
                </li>
                <li>
                    <a href="#">Corporate Information</a>
                </li>
                <li>
                    <a href="#">Only on Netflix</a>
                </li>
            </ul>
        </div>
        <p className='footer__copyright'>Netflix South Africa 2022 &copy;</p>
    </div>
  )
}

export default Footer