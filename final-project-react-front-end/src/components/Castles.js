import React, {useState, useEffect} from React.js;
import Listingcard from "./Listingcard.js";

function Castle () {
    const [castleListings, setCastleListings] = useState([]);

    useEffect(() => {
        fetch(/*Add destination URL!!!*/)
        .then((response) => response.json())
        .then((data) => {setCastleListings(data.castles)});
    },[]);
    
    return (
        <div className="listing-component">
        {castleListings.map((listing) => {<Listingcard id={listing.id} image={listing.image} location={listing.location} rating={listing.rating} dates={listing.dates} price={listing.price} />})}
        </div>
    );
}
export default Castle;