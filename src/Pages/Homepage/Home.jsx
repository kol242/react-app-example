import React from 'react'
import { Link } from 'react-router-dom'

import '../../Common/style/home.scss'
import Image from '../../Common/images/home-image.png'
import WorkPlaceStore from '../../Stores/Workplaces/WorkPlaceStore'
import DataListViewStore from '../../Stores/DataListViewStore'
import WorkerStore from '../../Stores/Workers/WorkerStore'

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
                    <Link to="/workplaces"><button onClick={() => WorkPlaceStore.getWorkplaces(DataListViewStore.fetchFunc)} className="btn-list-select">Radna mjesta</button></Link>
                    <Link to="/workers"><button onClick={() => WorkerStore.getWorkers(DataListViewStore.fetchFunc)} className="btn-list-select">Radnici</button></Link>
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
