import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="contact ">
      {/* Page Heading */}
      <header className="contact-header">
        <h1 data-aos="zoom-in">Contact us</h1>
       
      </header>

      <div className="contact-container">
        {/* Left Section - Contact Info */}
        <div className="contact-left" data-aos="fade-right">
          <h2>OPENING HOURS: <span className="highlight">24/7</span></h2>
          <p>
          Most car rental services operate during standard business hours, typically from 8:00 AM to 8:00 PM on weekdays. These hours cater to working professionals and travelers needing cars for daily commutes or trips.
          </p>
          <div className="contact-details">
            <p className="detail">
              📞 <strong>7798573786</strong>
            </p>
            <p className="detail">
              💬 <strong>GETTAXIPARK</strong>
            </p>
            <p className="detail">
              📍 <strong> Address : Daw, Mohammed Shafiq, Qureshi road Nagpur, plot number 115, Prashant Nagar, Police Line Takli, Nagpur, Maharashtra 440013</strong>
            </p>
          </div>
        
          <button className="get-taxi-btn">Get Taxi Online</button>
        </div>

       
        </div>
      </div>
 
  );
};

export default Contact;