import React from 'react'
import "../Styles/Main.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup,faLocationDot,faBagShopping,faCalendarWeek,faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
export default function Main() {
  return (
    <div className='contain'>
        <div className="cards" >
            <h3 className="title"><FontAwesomeIcon icon={faPeopleGroup} style={{marginLeft:"4vw" ,color:"#8064A2"}}/> <span  style={{marginLeft:"4vw"}}>People</span> </h3>
            <p  style={{marginLeft:"4vw" , marginTop:"4vh"}}>Find a teacher, coach, or expert for your hobby interest <br /> in your locality.  Find a partner, teammate, accompanist or <br />collaborator.</p>
            <button className="facebook">Connect</button>
        </div>
        <div className="cards">
        <h3 className="title"><FontAwesomeIcon icon={faLocationDot}  style={{marginLeft:"4vw" ,color:"#8064A2"}}/> <span style={{marginLeft:"4vw" }}>Place</span> </h3>
        <p  style={{marginLeft:"4vw" , marginTop:"4vh"}}>Find a class, school, playground, auditorium, studio, shop or an event venue. <br /> Book a slot at venues that allow booking through hobbycu</p>

        <button className="facebook">Connect</button>
        </div>
        <div className="cards">
        <h3 className="title"><FontAwesomeIcon icon={faBagShopping} style={{marginLeft:"4vw" ,color:"#77933C"}} /> <span style={{marginLeft:"4vw"}}>Product</span> </h3>
        <p  style={{marginLeft:"4vw" , marginTop:"4vh"}}>Find a class, school, playground, auditorium, studio, shop or an event venue. <br /> Book a slot at venues that allow booking through hobbycu</p>
        <button className="facebook">Connect</button>
        </div>
        <div className="cards">
        <h3 className="title"><FontAwesomeIcon icon={faCalendarWeek} style={{marginLeft:"4vw" ,color:"#C0504D"}} /> <span style={{marginLeft:"4vw"}}>Program</span> </h3>
        <p  style={{marginLeft:"4vw" , marginTop:"4vh"}}>Find a class, school, playground, auditorium, studio, shop or an event venue. <br /> Book a slot at venues that allow booking through hobbycu</p>
        <button className="facebook">Connect</button>
        </div>

        
    </div>
  )
}
