import React, {useState} from React.js;


function Header () {
    const [isHovering, setHover] = useState("false");
    function handleHoverToggle () {
        setHover(!isHovering);
    }

    return (
        <div>
            <img id="logo" src="" />
            <form>
                <button>Anywhere</button>
                <button>Any Week</button>
                <input placeholder="Add guests"></input>
                <button id="searchbarbutton"></button>
            </form>
            <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Become a Host</p>
            <i className={isHovering ? "hover bi bi-globe": "bi bi-globe"} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}></i>
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2"
                        aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
                <img />
                </button>
            </div>
        </div>
    );


}
export default Header;