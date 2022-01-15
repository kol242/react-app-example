import React from 'react'
import '../../../Common/style/sorter.scss'
import FilterStore from '../../../Stores/Workers/FilterStore'

function WorkerSorter() {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        FilterStore.sorterType(sorterType)
    }
    
    return (
        <div>
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue>Sortiraj...</option>
                <option value="nameAsc">Abecedno A-Z</option>
                <option value="nameDesc">Abecedno Z-A</option>
                <option value="salaryDesc">Plaća od najviše</option>
                <option value="salaryAsc">Plaća od najmanje</option>  
                <option value="ageDesc">Godine od najstarijeg</option>  
                <option value="ageAsc">Godine od najmlađeg</option>  
            </select>   
        </div>
    )
}

export default WorkerSorter
