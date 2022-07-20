import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../StateProvider'
import './Nav.css'

const Nav = () => {

    const [state , dispatch] = useStateValue()
    const [show , setShow] =  useState(false)
    const [topMenuShow , setTopMenuShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll' , () => {
            if(window.scrollY > 20){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })

        return () => {
            window.removeEventListener('scroll',() => () => {
                if(window.scrollY > 20){
                    setShow(true)
                }
                else{
                    setShow(false)
                }
            })
        }
    }, [])

    return (
        <div className = {`nav ${show && 'nav_background'}`}>
           <div className = 'nav_container'>
           <nav className = {`topmenu ${!topMenuShow && 'topmenu_show'}`}>
                <div onClick = {() => {setTopMenuShow(false) ; dispatch({type : 'SHOW_OVERFLOW'}) }} className = 'topmenu_close'>
                    <span className = 'close'>CLOSE</span> 
                    <div className = 'close_x'>
                <span className = 'x1'></span>
                <span className = 'x2'></span>
                </div>
                </div>
                <div className = 'topmenu_wrapper'>
                    <ul className = 'topmenu_list'>
                        <li className = 'topmenu_listItem'>HOME</li>
                        <li className = 'topmenu_listItem'>ABOUT</li>
                        <li className = 'topmenu_listItem'>PORTFOLIO</li>
                    </ul>
                </div>
            </nav>
               <div onClick = {() => {setTopMenuShow(true) ;dispatch({type : 'HIDE_OVERFLOW'})}} className = 'hamburger'>
                   <span className = {`line ${show && 'dark'}`}></span>
                   <span className = {`line big ${show && 'dark'}`}></span>
                   <span className = {`line ${show && 'dark'}`}></span>
               </div>
               <div className = 'nav_title'>REFLECTOR</div>
               <div className = 'nav_details'>
                   <div className = 'nav_home'>HOME</div>
                   <div className = 'nav_aboutUs'>ABOUT US</div>
                   <div className = 'nav_portfolio'>PORTFOLIO</div>
               </div>
           </div>
        </div>
    )
}

export default Nav
