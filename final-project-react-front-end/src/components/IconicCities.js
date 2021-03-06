import React, {useState, useEffect} from 'react';
import Listingcard from "./Listingcard.js";

function IconicCities () {
    const [citiesListings, setCitiesListings] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/")
        .then((response) => response.json())
        .then((data) => {setCitiesListings(data.iconicCities)});
    },[]);
    
    return (
        <div className="listing-component">
            {citiesListings.map((listing) => {<Listingcard id={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />})}
        </div>
        
    );
}
export default IconicCities;