import React, {useState, useEffect} from React.js;
import { NavLink } from "react-router-dom";

function FilterType () {
    const [filters, setFilters] = useState([]);
    useEffect(() => {
        fetch(/*Add destination URL*/)
        .then((response) => response.json())
        .then((data) => setFilters(data.types));

    },[]);

    return (
        <nav className="filter-component">
            {filters.map((filter) => {
                <NavLink className="filterIcon" to={filter.pathway}>
                    <img className="filterImg" src={filter.image} /> 
                    <p>{filter.name}</p>
                </NavLink>
            })};
        </nav>
    )   
}
export default FilterType;