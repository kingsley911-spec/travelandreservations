import Link from 'next/link';
import React from 'react';
import Nav from '../Nav/Nav';


export default function AboutUs() {

  return (
    <div>
      {/* <!-- Navigation --> */}
      <Nav />

      {/* <!-- Header Image --> */}
      <div className="top">
        <div className="header-img-container text-center py-4">
          <img src="/image/about-us-page-header-2023.jpg" className="img-fluid header-img"
            alt="All our holidays support local communities & nature" />
        </div>

        {/* <!-- Main Text --> */}
        <div className="container py-4">
          <p className="lead">We believe that when your trip benefits others, you gain too.</p>
          <p>Our holidays aim to support local communities and preserve nature which helps bring you closer to both.</p>

          <p className="lead">We want to maximise the benefits of tourism, and reduce its harmful impacts for people and planet.
          </p>
          <p>So we screen all of our trips for their commitment to responsible tourism. You can read about the specific good
            they do on each holiday page. Plus, when you travel with us, we'll fund a day out for a child from a
            disadvantaged background.</p>

          <p>There's no denying that holiday carbon emissions contribute to global heating. We're working to reduce these,
            but until low-carbon flights exist, you can help by choosing to fly less.</p>

          <p className="lead">A little bit about us:</p>
          <p>We are the world's first and largest responsible holiday company, founded in 2000. We have booked over 200,000
            customers, and are an independent business owned by our founder, directors and seed investors.</p>
        </div>

        {/* <!-- Reviews Section --> */}
        <div className="container my-4">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <h5><i>"The first place to look for environmentally friendly holidays"</i></h5>
              <img src="/image/guardianimage.svg" className="img-fluid" alt="The guardian logo" style={{ maxWidth: "190px" }} />
            </div>
            <div className="col-md-4">
              <h5><i>"Great source of travel ideas by a spokesperson for responsible tourism"</i></h5>
              <img src="/image/new-york-timesimage.svg" className="img-fluid" alt="New York Times logo"
                style={{ maxWidth: "400px" }} />
            </div>
            <div className="col-md-4">
              <h5><i>"The best website devoted to environmentally friendly travel across the world"</i></h5>
              <img src="/image/daily-mail image.svg" className="img-fluid" alt="Daily Mail logo" style={{ maxWidth: "300px" }} />
            </div>
          </div>
        </div>

        {/* <!-- Purpose Image --> */}
        <div className="text-center my-4">
          <img src="/image/about-us.jpg" className="img-fluid" alt="Our purpose is to inspire you..." />
        </div>

        {/* <!-- Footer --> */}
        <footer className="footer bg-dark text-white text-center py-4">
          <div className="container sub-footer row text-start">
            <div className="col-md-4 mb-3">
              <h5>About Us</h5>
              <a href="about-us.html" className="text-white d-block">About us</a>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Your holiday</h5>
              <a href="contact-us.html" className="text-white d-block">Contact us</a>
              <a href="/financial-protection.html" className="text-white d-block">Financial protection</a>
            </div>
            <div className="col-md-4 mb-3">
              <h5>Read more</h5>
              <a href="our-terms-and-conditions.html" className="text-white d-block">Terms and conditions</a>
              <a href="privacy-policy.html" className="text-white d-block">Privacy policy</a>
              <a href="refund-policy.html" className="text-white d-block">Refund policy</a>
            </div>
            <div className="text-center mt-4">
              <img src="/image/earthrise-image.png" className="img-fluid" alt="Earth rise" />
            </div>
          </div>
          <p className="mt-4">Our holidays are more enjoyable because they do good.<br />Pioneering Travel + Reservations since
            2001</p>
          <a className="top-link" href="#top" title="Back to the top">
            <i className="fa fa-angle-double-up"></i>
          </a>
        </footer>
      </div>
    </div>
  );
}