import React from 'react';
import { useParams } from 'react-router-dom';
import './RouteDetails.css';
import ZeroMiles from '../images/zero-milestone.jpg'; 
import GaneshTekdi from '../images/ganeshtekdi.jpg';
import FutlaLake from '../images/Futla.jpg';
import SitabardiFort from '../images/sitaburdi.jpg';
import hanuman from '../images/hanuman.jpg';
import tajbagh from '../images/tajbagh.jpg';
import naglog from '../images/naglog.jpg';
import dragon from '../images/dragon.jpg';
import ramdham from '../images/ramdham.jpg';
import khindsi from '../images/khindsi.jpg';
import jain from '../images/jain.jpg';
import tadoba from '../images/tadoba.jpg';
import kolaragate from '../images/kolara.jpg';
import pench from '../images/pench1.jpg';
import kanha from '../images/kanha.jpg';
import koradi from '../images/koradi.jpg';
import adasa from '../images/adasa.jpg';
import jamsavli from '../images/jamsavli.jpg';
import chhindwara from '../images/chhindwara.jpg';
import pachmahri from '../images/pachmarhi.jpg';




function RouteDetails() {
  const { id } = useParams();

  // Define the route details along with 5 associated cards for each route
  const routeDetails = {
    1: {
      name: 'Nagpur to Local',
   
      cards: [
        { name: 'Zero Miles',  imageUrl: ZeroMiles} ,
        { name: 'Ganesh Tekdi',  imageUrl: GaneshTekdi },
        { name: ' Futla Lake', imageUrl: FutlaLake },
        { name: 'Sitabardi Fort',  imageUrl: SitabardiFort },
        { name: 'Taj Bagh',  imageUrl: tajbagh  },
        { name: ' Telankhedi Hanuman Mandir ',  imageUrl:hanuman },

      ],
    },
    2: {
      name: 'Nagpur to Shirdi',
      
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Card 1 for Shirdi', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 2 for Shirdi', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 3 for Shirdi',imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 4 for Shirdi',  imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 5 for Shirdi',  imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
    3: {
      name: 'Nagpur to Ramtek',
     
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Naglok', imageUrl: naglog},
        { name: 'Dragon Palace', imageUrl: dragon },
        { name: 'Ram Dham', imageUrl: ramdham },
        { name: 'Khendsi', imageUrl: khindsi },
        { name: 'Jain Mandir',imageUrl: jain},
      ],
    },
    4: {
      name: 'Nagpur to Chhindwara',
   
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Koradi Mandir', imageUrl: koradi },
        { name: 'Adasa',  imageUrl: adasa},
        { name: 'Jamsavli',  imageUrl: jamsavli },
        { name: 'Chhindwara', imageUrl: chhindwara  },
        { name: 'Pachmahri',  imageUrl: pachmahri },
      ],
    },
    5: {
      name: 'Nagpur to Jungle Safari',
      
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Tadoba', imageUrl: tadoba },
        { name: 'Kolaragate',  imageUrl: kolaragate },
        { name: 'Pench', imageUrl: pench },
        { name: 'kanha Jungle Safari', imageUrl: kanha},
      ],
    },
    6: {
      name: 'Nagpur to Pachmarhi',
     
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: '', description: 'Details for card 1', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 2', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 3', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 4', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 5', imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
    7: {
      name: 'Nagpur to Jungle Safari',
     
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Card 1 for Raipur', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 2 for Raipur',  imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 3 for Raipur',  imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 4 for Raipur',  imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 5 for Raipur', imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
    8: {
      name: 'Nagpur to Shegaon',
     
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: '', description: 'Details for card 1', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 2', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 3', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 4', imageUrl: 'https://via.placeholder.com/150' },
        { name: '', description: 'Details for card 5', imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
    9: {
      name: 'HillStation',
     
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Card 1 for Vadodara', description: 'Details for card 1', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 2 for Vadodara', description: 'Details for card 2', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 3 for Vadodara', description: 'Details for card 3', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 4 for Vadodara', description: 'Details for card 4', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 5 for Vadodara', description: 'Details for card 5', imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
    10: {
      name: ' Temples in Nagpur ',
      
      imageUrl: 'https://via.placeholder.com/150',
      cards: [
        { name: 'Card 1 for Aurangabad', description: 'Details for card 1', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 2 for Aurangabad', description: 'Details for card 2', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 3 for Aurangabad', description: 'Details for card 3', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 4 for Aurangabad', description: 'Details for card 4', imageUrl: 'https://via.placeholder.com/150' },
        { name: 'Card 5 for Aurangabad', description: 'Details for card 5', imageUrl: 'https://via.placeholder.com/150' },
      ],
    },
  };

  const route = routeDetails[id]; // Get the route details by ID

  return (
    <div className="route-details">
      <h1>{route.name}</h1>
      <img src={route.imageUrl} alt={route.name} className="route-image" />
      <p>{route.description}</p>
      
      <div className="route-cards">
        {route.cards.map((card, index) => (
          <div key={index} className="route-card">
            <img src={card.imageUrl} alt={card.name} className="route-image" />
            <h3>{card.name}</h3>
            <p>{card.description}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouteDetails;
