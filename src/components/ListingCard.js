import React, { useState } from "react";

function ListingCard({ listing, deleteListing }) {
  const [favorite, setFavorite]=useState(false)
 
  function handleFavorites(){
     setFavorite((favorite) =>!favorite)
  }
  function handleDeleteClick(){
    deleteListing(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div  className="details">
        {favorite ? (
          <button onClick={handleFavorites} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorites} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> {listing.location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
