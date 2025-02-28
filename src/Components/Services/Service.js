import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Service.css";
import services1 from "../images/Nagpur-Taxi-Services (1).jpg";
import services2 from "../images/Nagpur to Amravati.jpg";
import services3 from "../images/innova.jpg";
import services5 from "../images/bg17.jpg";
import services6 from "../images/innova2.jpg";
import services12 from "../images/Des1.jpg"; 
import services13 from "../images/Des2.jpg"; 

function Services() {
  const [expandedCard, setExpandedCard] = useState(null); // Track which card is expanded

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const toggleDetails = (index) => {
    setExpandedCard(expandedCard === index ? null : index); // Toggle between expand/collapse
  };

  const topCards = [
    {
      img: services1,
      title: "Nagpur Taxi Service",
      description: "Experience seamless and reliable taxi services within Nagpur city.",
      details: "Perfect for daily commutes, errands, or exploring vibrant Nagpur streets.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
    {
      img: services2,
      title: "Nagpur To Amravati Taxi Service",
      description: "Comfortable and timely rides between Nagpur and Amravati.",
      details: "Travel hassle-free with our professional and safe taxi service.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
    {
      img: services3,
      title: "Long Journey Taxi Service",
      description: "Embark on long-distance journeys with ease.",
      details: "Our taxis ensure a comfortable and efficient travel experience for extended trips.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
  ];

  const bottomCards = [
    {
      img: services5,
      title: "Outstation Taxi Service",
      description: "Affordable taxi service for family trips, business travel, or weekend getaways.",
      details: "Plan your outstation travel effortlessly with us.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
    {
      img: services6,
      title: "Nagpur Best Car Service",
      description: "Premium car services with unmatched comfort and safety.",
      details: "Ideal for special occasions or business requirements in Nagpur.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
    {
      img: services12, // New image for Nagpur Jungle Safari
      title: "Nagpur Jungle Safari Taxi Service",
      description: "Explore the wildlife and beauty of Nagpur's jungle safaris.",
      details: "Our dedicated taxi service ensures a great adventure experience.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
    {
      img: services13, // New image for Tadoba Taxi Service
      title: "Tadoba Taxi Service",
      description: "Travel to Tadoba National Park with ease.",
      details: "Enjoy a smooth journey for your safari adventure.",
      whatsappNumber: "91-7798573786", // Replace with actual WhatsApp number
    },
  ];

  // Function to handle the redirection to WhatsApp
  const handleBookNowClick = (phoneNumber, serviceTitle) => {
    const message = `I'd like to book the service: ${serviceTitle}.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="services">
      <div className="services-header" data-aos="fade-down">
        <h2> Our Services</h2>
      </div>

      <div className="services-cards">
        {/* Render top cards dynamically */}
        {topCards.map((card, index) => (
          <div key={index} className="service-card" data-aos="fade-up">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button 
              className="book-now-btn" 
              onClick={() => handleBookNowClick(card.whatsappNumber, card.title)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="services-details">
        {/* Render bottom cards dynamically */}
        {bottomCards.map((card, index) => (
          <div key={index} className="detail-card" data-aos="fade-up">
            <img src={card.img} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button 
              className="book-now-btn" 
              onClick={() => handleBookNowClick(card.whatsappNumber, card.title)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
