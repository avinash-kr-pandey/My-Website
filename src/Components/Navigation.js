import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = ()=>{
    return(
        <div className="nav">
        <div className="container-fluid">
        <NavLink className="NavLink">
       
             <NavLink to='/contact'>Contact</NavLink>
             <NavLink to='/about'>About</NavLink>
             <NavLink to='/news'>News</NavLink>
             <NavLink to='/'>Home</NavLink>
          
         </NavLink>
        </div>

     </div>
    )
}

export default Navigation