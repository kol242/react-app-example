import React from 'react'
import { Link } from 'react-router-dom'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
            </div>
            <div className="btn-wrapper">
                <Link to="/workers"><button className="btn-secondary">Popis svih radnika</button></Link>
                <button className="btn-primary" onClick={WpCreateStore.createModalHandler}>
                    <AiOutlineAppstoreAdd className="icon"/>
                    Dodaj radno mjesto
                </button>
                <button className="btn-undo" onClick={WpFilterStore.filterHandler}>
                    <FaFilter className="icon"/>
                    Filtriraj
                </button>
            </div>
        </>
    )
}

export default Links
