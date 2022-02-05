import React from 'react';
import "../Styles/Main.css";
import apple from "../../asserts/apple.jpg";
import hand from '../../asserts/hand.jpg'

function Main() {
  return <div>
       <div class="container">
    <div class="row">
      <div class="col">

        <h1>Best way for  your Physic Goal</h1>
        PhysicHealth gives you the confidence that everything is organized and accounted for lets make progress on things that are important for your Physics.
        <br></br><br></br>
        <div class="container">
            <nav class="row">
                <div class="col-sm-4 center"><button type="button" id="button2" class="btn btn-primary">Get started</button> </div>
              <div class="col-sm-8 center"><button type="button" class="btn btn-primary" id="button3"> <img src={apple} class="apple" ></img> Download for ios</button></div>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </nav>
        </div>
  
        

        <div class="container">
            <nav class="row" role="navigation">
                <div class="col-sm-4 center"><p><h2><b>25k+</b></h2>Users use the app</p></div>
                <div class="col-sm-4 center" ><p><h1>|</h1></p></div>
                <div class="col-sm-4 center"><p><h2><b>150+</b></h2>Users review the app</p></div>
              
            </nav>
        </div>
    
    
    </div>
      <div class="col">
        <img src={hand}></img>
      
      </div>
  
    </div>
  </div>
  </div>;
}

export default Main;
