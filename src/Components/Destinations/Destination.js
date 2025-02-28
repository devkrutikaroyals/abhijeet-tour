import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import './Destination.css';

import penchImage from '../images/pench.jpeg';
import shirdiImage from '../images/shirdi.jpeg';
import talobaImage from '../images/tadpba.jpeg';
import pachmarhiImage from '../images/pachmadi.jpg';

const Destination = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const places = [
    {
      id: 1,
      title: 'PENCH',
      description: 'Pench national park is a wildlife and tiger reserve national park in Chhindwara districts',
      image: penchImage,
      button: 'BOOK NOW',
    },
    {
      id: 2,
      title: 'SHIRDI',
      description: 'Shirdi is famous for Sai Baba temple. One of the holy places in Ahmednagar district',
      image: shirdiImage,
      button: 'BOOK NOW',
    },
    {
      id: 3,
      title: 'TALOBA',
      description: "It is Maharashtra's oldest and largest national park wildlife sanctuary situated at Chandrapur",
      image: talobaImage,
      button: 'BOOK NOW',
    },
    {
      id: 4,
      title: 'PACHMARHI',
      description: "Known as Satpura ki Rani. It's a hill station in the state of Madhya Pradesh",
      image: pachmarhiImage,
      button: 'BOOK NOW',
    },
  ];

  return (
    <div className="destination-page-container">
      <header className="destination-header">
        <h1>DESTINATION</h1>
        
      </header>

  
        

      <div className="tourist-places-container">
       
        <h3 className="section-subtitle" data-aos="fade-up">EXPLORE TOP DESTINATION</h3>
        <div className="places-grid">
          {places.map((place, index) => (
            <div key={place.id} className="place-card" data-aos="zoom-in" data-aos-delay={index * 200}>
              <div className="place-image">
                <img src={place.image} alt={place.title} />
              </div>
              <div className="place-content">
                <h4>{place.title}</h4>
                <p>{place.description}</p>
                <button className="book-now-btn">{place.button}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination;