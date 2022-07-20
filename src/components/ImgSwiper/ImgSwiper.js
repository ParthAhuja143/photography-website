import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import './ImgSwiper.css'
import Fade from 'react-reveal/Fade'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

const responsive = {
  0 : {
    items : 1 
  } ,
  1024 : {
    items : 3
  } 
}

const ImgSwiper = () => {
    return (
      <Fade bottom delay = {250}>
      <div className = 'slider'>
      <OwlCarousel autoplayHoverPause = {true} animateIn = {true} animateOut = {true} lazyLoad = {true} nav = {true} loop center touchDrag mouseDrag pullDrag responsive = {responsive} margin={8} autoplay ={true} >  
           <div className = 'item' ><img  className="img" src= 'https://cdn.dribbble.com/users/52758/screenshots/4649362/media/e890cbbcc408daf1b9c00128d264535a.jpg?compress=1&resize=800x600'/></div>  
           <div className = 'item'><img  className="img" src="https://cdn.dribbble.com/users/1362380/screenshots/7827446/media/6f91bd0385a53ab46ec219a71b5300dd.png?compress=1&resize=1600x1200" /></div>  
           <div className = 'item'><img  className="img" src='https://cdn.dribbble.com/users/52758/screenshots/4649362/media/e890cbbcc408daf1b9c00128d264535a.jpg?compress=1&resize=800x600' /></div>  
           <div className = 'item'><img className="img" src="https://cdn.dribbble.com/users/1362380/screenshots/7827446/media/6f91bd0385a53ab46ec219a71b5300dd.png?compress=1&resize=1600x1200"/></div>  
      </OwlCarousel>
      </div>  
      </Fade>

    )
}

export default ImgSwiper
