import React from 'react'
import './Header.css'
import Fade from 'react-reveal/Fade'

const Header = () => {
    return (
        <div className = 'header'>
            <Fade duration = {1000}>
            <div className = 'header_background'>
            <div className = 'header_overlay'></div>
            <div className = 'header_slogan'>WEDDING PHOTOGRAPHY STUDIO</div>
            <Fade delay = {1000}><div className = 'header_logo'>REFLECTOR</div></Fade>
            <Fade delay = {1000}><div className = 'header_outline'>REFLECTOR</div></Fade>
            </div>
            </Fade>
        </div>
    )
}

export default Header
