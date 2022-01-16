import React from 'react'
import { Link } from 'react-router-dom'

import './home.scss'
import Image from '../../Common/images/home-image.png'

function Home() {
    return (
        <div className="main-container">
            <div>
            </div>
            <div className="home-wrapper">
                <div>
                    <h1>Dobrodošli!</h1>
                    <p>Jednostavna aplikacija za čitanje, dodavanje, brisanje i uređivanje radnika i radnih mjesta.</p>
                    <p>Aplikaciju izradio: <span>Valentino Kolinger</span></p>
                </div>
                <div>
                    <p>Odaberite popis:</p>
                    <Link to="/workplaces"><button className="btn-list-select">Radna mjesta</button></Link>
                    <Link to="/workers"><button className="btn-list-select">Radnici</button></Link>
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
