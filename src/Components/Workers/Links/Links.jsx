import React from 'react'
import { Link } from 'react-router-dom'
import FilterStore from '../../../Stores/Workers/FilterStore'
import { FaFilter } from 'react-icons/fa'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'
import DataListViewStore from '../../../Stores/DataListViewStore'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
            </div>
            <div className="btn-wrapper">
                <Link to="/workplaces"><button onClick={() => WorkPlaceStore.getWorkplaces(DataListViewStore.fetchFunc)} className="btn-secondary">Popis radnih mjesta</button></Link>
                <button className="btn-undo" onClick={FilterStore.filterHandler}><FaFilter className="icon"/>Filtriraj</button>
            </div>
        </>
    )
}

export default Links
