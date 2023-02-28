import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingData, deleteListingId}) {


  const listings = listingData.map((listing) => {
    return (
      <ListingCard deleteListingId={deleteListingId} key={listing.id} listing={listing}/>
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
