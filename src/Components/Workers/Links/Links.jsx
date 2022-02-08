import React from 'react'
import FilterStore from '../../../Stores/Workers/FilterStore'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <div className="btn-wrapper">
                <button className="btn-undo" onClick={FilterStore.filterHandler}><FaFilter className="icon"/>Filtriraj</button>
            </div>
        </>
    )
}

export default Links
