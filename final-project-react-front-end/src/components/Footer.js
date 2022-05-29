import React, {useState} from React.js;

function Footer () {
    const [isHovering, setHover] = useState("false");
    function handleHoverToggle () {
        setHover(!isHovering);
    }
    return (
        <div classname='footer'>
            <div>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>&copy; 2022 Airbnb, Inc</p>
                <p></p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Privacy</p>
                <p></p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Terms</p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Sitemap</p>
                <p></p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Destinations</p>
            </div>
            <div>
                <i classname={isHovering ? "hover bi bi-globe": "bi bi-globe"}></i>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>English (US)</p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'><span>$</span> USD</p>
                <p classname={isHovering ? "hover": null} onMouseEnter='handleHoverToggle' onMouseLeave='handleHoverToggle'>Support & Resources</p>
            </div>
        </div>
    );
}
export default Footer;