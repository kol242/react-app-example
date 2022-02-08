import React from 'react'
import { Link } from 'react-router-dom'
import WorkPlaceStore from '../../Stores/Workplaces/WorkPlaceStore'
import DataListViewStore from '../../Stores/DataListViewStore'
import WorkerStore from '../../Stores/Workers/WorkerStore'
import '../../Common/style/navbar.scss'

const Navbar = () => {
  return (
    <div className="nav">
            <Link className="link" to="/">W&W Manager App</Link> 
            <ul className="nav__links">
                <li>
                    <Link className="link" to="/workplaces" onClick={() => WorkPlaceStore.getWorkplaces(DataListViewStore.fetchFunc)}>
                        Popis radnih mjesta
                    </Link>    
                </li>
                <li>
                    <Link className="link" to="/workers" onClick={() => WorkerStore.getWorkers(DataListViewStore.fetchFunc)}>
                        Popis svih radnika
                    </Link>
                </li>
            </ul>
    </div>
  )
}

export default Navbar;
