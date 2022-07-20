import React from 'react'
import './Awards.css'
import Fade from 'react-reveal/Fade'

const Awards = () => {
    return (
        <Fade bottom >
        <div className = 'awards'>
            <div className = 'awards_overlay'></div>
            <div className = 'awards_awards'>
                <div className = 'awards_title'>AWARDS AND FELICITATIONS</div>
                <div className = 'awards_description'>
                    <div className = 'awards_types'>
                        <h1>50+</h1>
                        <h3>CELEBRITIES WEDDING</h3>
                    </div>
                    <div className = 'awards_types'>
                        <h1>500+</h1>
                        <h3>ELITE WEDDING PACKAGES</h3>
                    </div>
                    <div className = 'awards_types'>
                        <h1>320+</h1>
                        <h3>HONEYMOON PACKAGES</h3>
                    </div>
                    <div className = 'awards_types'>
                        <h1>250+</h1>
                        <h3>PREMIUM WEDDING</h3>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default Awards
