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
            <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Become a Host</p>
            <i classname={isHovering ? "hover bi bi-globe": "bi bi-globe"} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'></i>
            <div classname="container-fluid">
                <button classname="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent2"
                        aria-expanded="false" aria-label="Toggle navigation">
                <i classname="fas fa-bars"></i>
                <img />
                </button>
            </div>
        </div>
    );

    //potential red/pink colors: 
    // #FF5D5D  F24A72 rgb(255, 56, 92)
}
export default Header;