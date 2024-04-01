import React from 'react'
import "../Styles/Quote.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons";
export default function Quote() {
  return (
    <div>
        <div className="quote" style={{width:"100%",height:"100px"}}>
        <span ><FontAwesomeIcon icon={faQuoteLeft} style={{marginLeft:"4vw" , color:"#8064A2"}}/> <h2 style={{marginLeft:"5vw"}}> Testimonials</h2> </span>
        <p style={{marginLeft:"4vw" }}>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded <br/>people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas<br/> with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be <br/>assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get <br/>visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea <br/>and I highly recommend it.</p>
        </div>

        <h2 style={{marginLeft:"4vw",marginTop:"45vh"}}>Explore your <span style={{color:"#0096C8"}}>hobby</span> or <span style={{color:"#8064A2"}}> passion</span>
        <img src="src/Images/people.PNG" alt="" />
        </h2>
        
    </div>
  )
}
