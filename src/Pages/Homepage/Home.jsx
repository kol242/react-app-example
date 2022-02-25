import React from 'react'
import '../../Common/style/home.scss'
import Image from '../../Common/images/home-image.png'

function Home() {
    return (
        <div className="main-container">
            <div className="home-wrapper">
                <div>
                    <h1>Workers & Workplaces Manager App</h1>
                    <p>Simple app for reading, adding, updating and deleting workers and workplaces.</p>
                    <p>Made by: <span>Kolinger</span></p>
                </div>
                <div id="img">
                    <img src={Image} alt="homeImage" />
                </div>
            </div> 
        </div>    
    )
}

export default Home
