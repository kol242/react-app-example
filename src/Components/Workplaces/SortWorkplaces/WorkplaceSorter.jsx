import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'
import '../../../Common/style/sorter.scss'

function WorkplaceSorter() {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        WorkPlaceStore.sorterType(sorterType)
    }

    return (
        <div>
            <select defaultValue={'default'} onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option value="default" disabled>Sortiraj...</option>
                <option value="nameAsc">Abecedno A-Z</option>
                <option value="nameDesc">Abecedno Z-A</option>
                <option value="salaryDesc">Plaća od najviše</option>
                <option value="salaryAsc">Plaća od najmanje</option>   
            </select>
        </div>
    )
}

export default WorkplaceSorter
