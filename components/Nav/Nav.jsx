"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="nav px-3">
      <div className="logo pl-3 ">
        <Link className='text-white text-xl ' href="/">TRAVEL +<br />RESERVATION</Link>
      </div>
      <button
        className="hamburger"
        aria-label="Toggle navigation menu"
        onClick={toggleNav}
      >
        <GiHamburgerMenu />
      </button>
      <div className={`nav-content ${isNavOpen ? 'open' : ''}`}>
        <Link href="/bookvip">BOOK VIP</Link>
        <Link href="/aboutus">ABOUT US</Link>
        <Link href="/contactus">CONTACT US</Link>
      </div>
      <div className="contact-info">
        <a href="https://wa.me/15632068827" target="_blank" rel="noopener noreferrer">
          +1 563 206 8827
        </a><br />
        <span>Contact us after 9am</span>
      </div>
    </nav>
  );
};

export default Nav;