import React from React.js;

function Listingcard ({image, location, rating, dates, price}) {
    return (
        <div>
            <img src={image}/>
            <button>HEART REACT</button>
            <p>{location}</p>
            <p>{rating}</p>
            <p>{dates}</p>
            <p>{price}</p>
        </div>
    )
}

export default Listingcard;