import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
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
