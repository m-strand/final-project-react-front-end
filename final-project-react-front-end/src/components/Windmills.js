import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function Windmills () {
    const [windmillListings, setWindmillListings] = useState([]);
 
    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {setWindmillListings(data.windmills)});
    },[]);
    
    return (
        <div className="listing-component">
            {windmillListings.map((listing) => {<Listingcard id={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />})}
        </div>
        
    );
}
export default Windmills;