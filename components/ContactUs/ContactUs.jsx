import Link from 'next/link';
import React from 'react';
import Nav from '../Nav/Nav';


export default function ContactUs() {

  return (
    <div>
      {/* <!-- Navigation --> */}
      <Nav />

      {/* <!-- Contact Section --> */}
      <div className="contact-section">
        <div className="contact-card">
          <img src="image/call-icon.gif" alt="Phone icon" />
          <h1>Contact us today</h1>
          <p>No queues or robots, just passionate travellers ready to help you.</p>
          <ul>
            <li>
              <i className="fa-solid fa-map"></i> If you're in the <b>US</b>, call on
              <a href="wa.me/15632068827">+1 563 206 8827</a>
            </li>
            <li>
              <i className="fa-solid fa-earth-europe"></i> Or from <b>everywhere else</b>
            </li>
          </ul>
        </div>

        <div className="contact-card">
          <img src="image/email-icon-40.gif" alt="Email icon" />
          <h2>Email us</h2>
          <a href="mailto:mbookinglimited@gmail.com?subject=My%20holiday%20br/ief">mbookinglimited@gmail.com</a>
          <p>Tell us about your next adventure, and we will be delighted to help.</p>
        </div>
      </div>

      {/* <!-- Team Image --> */}
      <div className="team-image">
        <img src="image/Travel+leisurecontactteam.jpg" alt="Your Travel + Reservation Team" />
      </div>

    </div>
  );
}