import React from 'react'
import { Link } from 'react-router-dom'
import FilterStore from '../../../Stores/Workers/FilterStore'
import WorkerSorter from '../SortWorker/WorkerSorter'

import Filter from '../../../Common/images/filter.png'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
            </div>
            <div className="btn-wrapper">
                <Link to="/workplaces"><button className="btn-secondary">Popis radnih mjesta</button></Link>
                <button className="btn-undo" onClick={FilterStore.filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
                <WorkerSorter />
            </div>
        </>
    )
}

export default Links
