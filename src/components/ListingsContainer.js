import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, deleteListing}) {

 


  const listings = listingData.map((listing) => {
    return (
      <ListingCard deleteListing={deleteListing} key={listing.id} listing={listing}/>
    )

  })
  return (
    <main>
      <ul className="cards">
        {listings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
