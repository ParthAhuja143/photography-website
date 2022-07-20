import React from 'react'
import './AlbumSection.css'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const AlbumSection = () => {
    return (
        <div className = 'album'>
            <div className = 'album_container'>
                <Fade bottom >
                <div className = 'album_album'>
                    <div className = 'album_header'>
                        <img src="https://1uzu0p2w64m94n0xh1n9hpiq-wpengine.netdna-ssl.com/photographer/wp-content/uploads/sites/2/2017/06/image1.jpg" alt="" />    
                    </div>
                    <div className = 'album_footer'>
                        <div className = 'album_title'>Eddy Weds Genoveva</div>
                        <div className = 'album_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis</div>
                        <h1>01</h1>
                    </div>
                </div>
                </Fade>
                <Zoom >
                <div className = 'album_album'>
                    <div className = 'album_header'>
                        <img src="https://1uzu0p2w64m94n0xh1n9hpiq-wpengine.netdna-ssl.com/photographer/wp-content/uploads/sites/2/2017/06/image3.jpg" alt="" />
                        
                       
                    </div>
                    <div className = 'album_footer'>
                        <div className = 'album_title'>Eddy Weds Genoveva</div>
                        <div className = 'album_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis</div>
                        <h1>02</h1>
                    </div>
                </div>
                </Zoom>
                <Fade bottom >
                <div className = 'album_album'>
                    <div className = 'album_header'>
                        <img src="https://1uzu0p2w64m94n0xh1n9hpiq-wpengine.netdna-ssl.com/photographer/wp-content/uploads/sites/2/2017/06/image2.jpg" alt="" />    
                    </div>
                    <div className = 'album_footer'>
                        <div className = 'album_title'>Eddy Weds Genoveva</div>
                        <div className = 'album_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis</div>
                        <h1>03</h1>
                    </div>
                </div>
                </Fade>
            </div>
        </div>
    )
}

export default AlbumSection
