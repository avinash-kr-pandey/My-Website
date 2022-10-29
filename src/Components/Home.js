import React from "react"
import "./All.css"
const Home = () =>{
    return(
       <div>
        {/* <div className="nav">
           <div className="container-fluid">
                <NavLink className="NavLink">
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/'>Home</NavLink>
             
            </NavLink>
           </div>

        </div> */}

            <div className="header">
            <h1>My Website</h1>
            <p>A website created by Avinash pandey.</p>
        </div>

        <div className="navbar">
            <a href="#">Linkdin</a>
            <a href="#">Github</a>
            <a href="https://www.instagram.com/avinash_kr_pandey/">Instagram</a>
            <a href="#" className="right">Facebook</a>
        </div>

        <div className="row">
       
        <div className="main">
            <h2>Avinash kumar pandey</h2>
            <h5>You also might avoid doing anything where success isn't guaranteed. 
	        Ultimately, you'll miss out on all the life lessons and opportunities that might help you find success.
</h5>
            <div className="fakeimg">
                <img id="img1" src="https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_960_720.jpg" alt="Not image found" />
            </div>
            <p>Self-motivated and hardworking fresher seeking for an opportunity to work in a challenging environment to prove my skills and utilize my knowledge & intelligence in the growth of the organization. </p>
            <p>I'm sure just as many like me as dislike and as many get me as don't get me. However often the way we perceive
	            others says more about us than it does them as we tend to make judgements
	            and assumptions based on ourselves. For instance those who are dishonest tend to think that others are dishonest.</p>
            <br/>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg">
                <img id="img1" src="https://cdn.pixabay.com/photo/2011/03/16/16/13/tree-5378_960_720.jpg" alt="" />
            </div>
            <p>Happiness is a choice, not a result. Nothing will make you happy unless you wish to be happy. 
	            No one will make you happy unless you decide to be happy and thus create it for yourself.
	</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        </div>
        <div className="footer">
         <div className="footer-content">
            <h3>Software Developer</h3>
            <img id="logo" src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?compress=1&resize=400x300&vertical=top" alt="" />
            <p>My name is Avinash kumar pandey, i am a full stack developer, <br />
            One of the most common fears on earth is the fear of failure. It's embarrassing to fail.
	        And it may reinforce your beliefs that you don't measure up.
            </p>
            <ul className="socials">
                <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>@avinash <a href="#">Software  Developer</a>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><a >Home</a></li>
                        <li><a>About</a></li>
                        <li><a >Contact</a></li>
                        <li><a>Blog</a></li>
                      </ul>
                    </div>
        </div> 
    </div>
 </div>
    )       
}


export default Home;