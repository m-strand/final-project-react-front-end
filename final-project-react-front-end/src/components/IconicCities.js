import React, {useState, useEffect} from React.js;
import Listingcard from "./Listingcard.js";

function IconicCities () {
    const [citiesListings, setCitiesListings] = useState([]);

    useEffect(() => {
        fetch(/*Add destination URL!!!*/)
        .then((response) => response.json())
        .then((data) => {setCitiesListings(data.iconic-cities)});
    },[]);
    
    return (
        <div className="listingsDiv">
            {citiesListings.map((listing) => {<Listingcard id={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />})}
        </div>
        
    );
}
export default IconicCities;