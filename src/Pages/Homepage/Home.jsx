import React from 'react'
import '../../Common/style/home.scss'
import Image from '../../Common/images/home-image.png'

function Home() {
    return (
        <div className="main-container">
            <div>
            </div>
            <div className="home-wrapper">
                <div>
                    <h1>Workers & Workplaces Manager App</h1>
                    <p>Jednostavna aplikacija za čitanje, dodavanje, brisanje i uređivanje radnika i radnih mjesta.</p>
                    <p>Aplikaciju izradio: <span>Valentino Kolinger</span></p>
                </div>
                <div id="img">
                    <img src={Image} alt="homeImage" />
                </div>
            </div> 
            <div>
            </div>  
        </div>
    )
}

export default Home
