import React from "react";
import './News.css'
const News = () => {
    return(
        <div className="news">
            <div className="card">
                <img src="img_avatar.png" alt="Avatar"/>
                <div className="container">
                    <h4><b>Avinash kumar</b></h4>
                    <p>Software Engineer</p>
                </div>
            </div>
            <div className="card">
                <img src="img_avatar.png" alt="Avatar"/>
                <div className="container">
                    <h4><b>Avinash kumar</b></h4>
                    <p>Software Engineer</p>
                </div>
            </div>
            <div className="card">
                <img src="img_avatar.png" alt="Avatar"/>
                <div className="container">
                    <h4><b>Avinash kumar</b></h4>
                    <p>Software Engineer</p>
                </div>
            </div>
        </div>
    )
}

export default News;