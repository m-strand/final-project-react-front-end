import React from React.js;

function Listingcard ({image, location, rating, dates, price}) {
    return (
        <div className="listingCard">
            <img src={image}/>
            <p>{location}</p>
            <p>{rating}</p>
            <p>{dates}</p>
            <p>{price}</p>
        </div>
    )
}

export default Listingcard;