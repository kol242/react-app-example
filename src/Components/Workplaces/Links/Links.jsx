import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <button className="btn-primary" onClick={WpCreateStore.createModalHandler}>
                <AiOutlineAppstoreAdd className="icon"/>
                Add new workplace
            </button>
            <button className="btn-undo" onClick={WpFilterStore.filterHandler}>
                <FaFilter className="icon"/>
                Filter
            </button>
        </>
    )
}

export default Links
