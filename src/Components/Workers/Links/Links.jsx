import React from 'react'
import FilterStore from '../../../Stores/Workers/FilterStore'
import { FaFilter } from 'react-icons/fa'

const Links = () => {
    return (
        <>
            <button className="btn-undo" onClick={FilterStore.filterHandler}><FaFilter className="icon"/>Filter</button>
        </>
    )
}

export default Links
