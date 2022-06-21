import React from React.js;

function Listingcard ({image, location, rating, dates, price}) {
    return (
        <div className="listingCard">
                <img className="listingImg" src={image}/>
            <div className="first-line">
                <span className="listingInfo location">{location}</span>
                <span className="listingInfo rating">{rating} &starf;</span>
            </div>
                <p className="listingInfo light">{distance}</p>
                <p className="listingInfo light">{dates}</p>
                <p className="listingInfo">{price}</p>
        </div>
    )
}

export default Listingcard;