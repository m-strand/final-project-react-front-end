import React, {useState} from React.js;

function Footer () {
    const [isHovering, setHover] = useState("false");
    const [menuUp, setMenu] = useState("false");
    function handleHoverToggle () {
        setHover(!isHovering);
    }

    function handleArrowClick () {
        setMenu(!menuUp);
    }
    
    return (
        <div className='footer'>
            <div className="left-container">
                <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>&copy; 2022 Airbnb, Inc</p>
                <span>·</span>
                <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Privacy</p>
                <span>·</span>
                <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Terms</p>
                <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Sitemap</p>
                <span>·</span>
                <p className={isHovering ? "hover": null} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Destinations</p>
            </div>
            
                {menuUp ? <FooterDrop/>: 
                <div className="right-container">
                <span className={isHovering ? "hoverFooter material-icons btn container-element foot-lang": "material-icons btn container-element foot-lang"}>language</span>
                <p className={isHovering ? "hoverFooter container-element": "container-element"} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>English (US)</p>
                <p className={isHovering ? "hoverFooter container-element": "container-element"} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}><span>$</span> USD</p>
                <p className={isHovering ? "hoverFooter container-element": "container-element"} onMouseEnter={handleHoverToggle} onMouseLeave={handleHoverToggle}>Support & Resources</p>
                <span onClick={handleArrowClick} className="material-icons more-info">keyboard_arrow_up</span>
                </div>
                }
        </div>
    );
}
export default Footer;