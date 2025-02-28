import React, { useState, useEffect } from "react";
import "../Homes/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faTimes, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import Stats from "../Stats/Stat";
import TaxiFares from "../TaxiRents/TaxiRent";
import Services from "../Services/Service";
import Destination from "../Destinations/Destination";
import AboutPage from "../Abouts/About";

function Home() {
  const [rideType, setRideType] = useState("Local");
  const [isOpen, setIsOpen] = useState(false);
  const [showButtons, setShowButtons] = useState(true);

  const whatsappNumber = "7798573786"; // Replace with the correct WhatsApp number
  const callNumber = "9876543210"; // Replace with the correct call number
  const message = `Hello, I would like to book a ${rideType} ride!`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const callLink = `tel:${callNumber}`;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowButtons(false); // Hide buttons when scrolling down
      } else {
        setShowButtons(true); // Show buttons when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBookNow = () => {
    // Redirect to the call link
    window.location.href = callLink;
  };

  return (
    <>
      <div className="home">
        {/* Ride Type Options */}
        <div className={`ride-options ${showButtons ? "visible" : "hidden"}`}>
          {["One Way", "Outstation", "Local", "Airport"].map((option) => (
            <button
              key={option}
              className={`ride-option-button ${rideType === option ? "active" : ""}`}
              onClick={() => setRideType(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Floating Button */}
        <div className="floating-button">
          <button className="main-button" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faPlus} size="2x" />
          </button>

          {isOpen && (
            <div className="expanded-buttons">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>

              <a href={callLink} className="call-button">
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              </a>
            </div>
          )}
        </div>

        {/* Home Content */}
        <div className="home-content">
          <h1>Welcome to ShriRam Cabs</h1>
          <p>Ride Comfortably, Arrive Safely!</p>

          {/* Booking Section */}
          <div className="booking-section">
            <h3>Selected Ride: {rideType}</h3>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="pickup-location">Pick-up Location</label>
                <select id="pickup-location">
                  <option>Nearby Nagpur</option>
                  <option>Airport</option>
                  <option>Railway Station</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="car-type">Choose a Car</label>
                <select id="car-type">
                  <option>Sedan - 5 Seats</option>
                  <option>SUV - 7 Seats</option>
                  <option>Hatchback - 4 Seats</option>
                  <option>Luxury - 5 Seats</option>
                </select>
              </div>
            </div>
            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="start-date">Start Date</label>
                <input type="text" id="start-date" placeholder="DD/MM/YYYY" />
              </div>
              <div className="form-group">
                <label htmlFor="end-date">End Date</label>
                <input type="text" id="end-date" placeholder="DD/MM/YYYY" />
              </div>
            </div>
            <button className="book-now-button" onClick={handleBookNow}>Book Your Ride Now</button>
          </div>
        </div>
      </div>

      <TaxiFares />
      <Services />
      <Destination />
      <AboutPage />
      <Stats />
    </>
  );
}

export default Home;
