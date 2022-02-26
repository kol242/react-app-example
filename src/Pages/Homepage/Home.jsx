import React from 'react'
import '../../Common/style/home.scss'
import Image from '../../Common/images/home-image.png'

function Home() {
    return (
        <div className="main-container">
            <div className="home-wrapper">
                <div>
                    <h1>Workers & Workplaces Manager App</h1>
                    <p>Simple app for reading, adding, updating and deleting list of workers and workplaces in simulated company.</p>
                </div>
                <div id="img">
                    <img src={Image} alt="homeImage" />
                </div>
            </div> 
        </div>    
    )
}

export default Home
