import React from "react";
import "./About.css"

const About =()=>{
    return(
        <div className="about">
           <div className="about-section">
            <h1>AVINASH KUMAR PANDEY</h1>
            <h2>A FRONT-END DEVELOPER</h2>
            <p>One of the most common fears on earth is the fear of failure.
                 It's embarrassing to fail.
	            And it may reinforce your beliefs that you don't measure up.</p>
  </div>

<h2 className="heading">Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src="https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg" alt="Jane"/>
      <div className="container">
        <h2>Avinash Pandey</h2>
        <p>A Front end developer</p>
        <p>A Good knowladge of React, javaScript, htm, css, <br /> bootstrap etc.</p>
        <p>emails4avinash@gmail.com</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg" alt="Mike" />
      <div className="container">
        <h2>Pyush kumar</h2>
        <p>A Full stack developer</p>
        <p>Good knowladge of Node, and React, javaScript, htm, css, <br /> bootstrap etc.</p>
        <p>emails4@pyush.com</p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg" alt="John"/>
      <div className="container">
        <h2>Avinash kumar</h2>
        <p>A Full stack developer</p>
        <p>Good knowladge of Node, and React, javaScript, htm, <br /> css, bootstrap etc.</p>
        <p>emails4@example.com</p>
      </div>
    </div>
  </div>
</div>

<div className="footer1">
  <p>AVINASH KUMAR PANDEY </p>
  <p>SOFTWARE ENGINEER</p>
</div>
        </div>
    )
}
export default About;