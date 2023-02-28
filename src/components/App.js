import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
   
  const [listingData , setListingData ] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(setListingData);
   
  },[])
  
const [onDeleteListing , setOnDeleteListing ] =useState()

 const deleteListing = (listing)=>{
  fetch(`http://localhost:6001/listings/${listingData.id}`, {
    method: "DELETE",
  })
  .then(res => res.json())
  .then((listing) => onDeleteListing(listing));


}


  return (
    <div className="app">
      <Header />
      <ListingsContainer 
      listingData={listingData}
      deleteListing={deleteListing}
      />
    </div>
  );
}

export default App;
