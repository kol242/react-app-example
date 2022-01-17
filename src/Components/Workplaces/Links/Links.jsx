import React from 'react'
import { Link } from 'react-router-dom'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'
import WorkplaceSorter from '../SortWorkplaces/WorkplaceSorter'

import New from '../../../Common/images/plus.png'
import Filter from '../../../Common/images/filter.png'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
            </div>
            <div className="btn-wrapper">
                <Link to="/workers"><button className="btn-secondary">Popis svih radnika</button></Link>
                <button className="btn-primary" onClick={WpCreateStore.createModalHandler}>
                    <img src={New} alt="New" />
                    Dodaj radno mjesto
                </button>
                <button className="btn-undo" onClick={WpFilterStore.filterHandler}>
                    <img src={Filter} alt="Filter" />
                    Filtriraj
                </button>
                <WorkplaceSorter />
            </div>
        </>
    )
}

export default Links
