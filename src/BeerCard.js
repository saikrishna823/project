import React from 'react';
import "../src/beercard.css"
const BeerCard = ({ beer }) => {
  return (
    <div className="card">
        <h1>{beer.name}</h1>
        <div className='beer-info'>
        <div className='beer-image'>
      <img src={beer.image_url} alt={beer.name} className="beer-image" />
      </div>
      <div className="card-content">
        <p><strong>Tagline:</strong> {beer.tagline}</p>
        <p><strong>Description:</strong> {beer.description}</p>
        <p><strong>ABV:</strong> {beer.abv}%</p>
        <p><strong>IBU:</strong> {beer.ibu}</p>

        <p><strong>Food Pairing:</strong></p>
        <ul className='beer-food-pair'>
          {beer.food_pairing.map((food, index) => (
            <li key={index}><p>{food},</p></li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
}

export default BeerCard;
