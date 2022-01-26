import React from 'react'
import { Link } from 'react-router-dom'
import FilterStore from '../../../Stores/Workers/FilterStore'
import WorkerSorter from '../SortWorker/WorkerSorter'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
            </div>
            <div className="btn-wrapper">
                <Link to="/workplaces"><button className="btn-secondary">Popis radnih mjesta</button></Link>
                <button className="btn-undo" onClick={FilterStore.filterHandler}><FaFilter className="icon"/>Filtriraj</button>
                <WorkerSorter />
            </div>
        </>
    )
}

export default Links
