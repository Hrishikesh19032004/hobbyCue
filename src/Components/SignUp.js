import React from 'react'
import '../Styles/signUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle ,faFacebook} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export default function SignUp() {
  return (
    <div className='contain'>
      <div className="mainText">
        <h2 style={{marginLeft:"4vw",marginTop:"4vh"}}>Explore your <span style={{color:"#0096C8"}}>hobby</span> or <span style={{color:"#8064A2"}}> passion</span></h2>
        <p style={{marginLeft:"4vw"}}>Sign-in to interact with a community of fellow <br />hobbyists and an  eco-system of experts, teachers, suppliers, classes,<br /> workshops,and places to practice, participate or perform.<br /> Your hobby may be about visual or performing arts, sports,<br /> games, gardening, model  making, cooking, indoor or <br />outdoor activities…
</p>
      <p style={{marginLeft:"4vw"}}>If you are an expert or a seller, you can Add your Listing  <br />and promote yourself, your students, products,  services or events. <br />  Hop on your hobbyhorse and enjoy the ride.</p>
      </div>
      <div className="signUp">
        <div className="methods">
        <a href="/">Sign In</a>
        <a href="/" style={{color:"#939CA3"}}>Join In</a>
        </div>

        <div className="buttons">
          <button className="google"> <FontAwesomeIcon icon={faGoogle} style={{marginLeft:"-8vw",marginRight:"6vw",color:"#8064a2"}} />Continue with Google</button><br/>
          <button className="facebook"><FontAwesomeIcon icon={faFacebook} style={{marginLeft:"-6.5vw",marginRight:"6vw",color:"#8064a2"}} />Continue with Facebook</button>
        </div>

        <span className="conn"><hr />Or Connect with <hr /></span>

        <div className="info">
        <input type="text" placeholder="Email"className="input-field"/><br />
        <input type="password" placeholder="Password"className="input-field"/>

        </div>

        <div className="checkBox">
        <input type="checkbox" id="myCheckbox" name="myCheckbox" className='rem'/>
        <label for="myCheckbox" style={{marginLeft:"1vw"}}>Remember Me</label>
        <FontAwesomeIcon icon={faLock} style={{color:"#939CA3", marginLeft:"15vw"}} /> Forgot Password
        </div>
        
        </div>
      </div>
    
  );
}
