import React, {useState} from React.js;
import Listingcard from 'Listingcard.js';

function Listings () {
    const [listings, setListings] = setState('add data array')
    
    return (
        {listings.map(() => {
            <Listingcard />
        })}
    )
}
export default Listings;