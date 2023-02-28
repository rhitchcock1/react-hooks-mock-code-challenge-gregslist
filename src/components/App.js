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

 const deleteListing = () => {
    fetch(`http://localhost:6001/listings/${listingData.id}`, {
    method: "DELETE",
    })
      .then(res => res.json())
      .then((listing) => setListingData(listing))
    }

    function deleteListingId(deletedlisting){
       listingData.filter((listing) => listing.id !== deletedlisting.id)
    }
    
  return (
    <div className="app">
      <Header />
      <ListingsContainer 
      listingData={listingData}
      deleteListingId={deleteListingId}
      />
    </div>
  );
}

export default App;
