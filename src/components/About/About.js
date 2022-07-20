import React from 'react'
import './About.css'
import Fade from 'react-reveal/Fade'

const About = () => {
    return (
        <Fade bottom >
        <div className = 'about'>
            <div className = 'about_container'>
            <div className = 'about_title'>ABOUT REFLECTOR STUDIO</div>
            <div className = 'about_description'>
                <p className = 'about_description1'>
                We're a team, based in South of France, documenting elopements & weddings all across Europe and overseas! And we can't wait to hear from you! Photographs show who you are and how you’ve lived. You deserve the best memories, delivered through beautiful photos to help you re-live this special day
                </p>
            </div>
        </div>
        </div>
        </Fade>
    )
}

export default About
