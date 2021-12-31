import React from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
import '../../Common/style/sorter.scss'

function WorkplaceSorter() {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        WorkPlaceStore.sorter(sorterType)
    }

    return (
        <div>
            <select defaultValue={'default'} onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option value="default" disabled>Sortiraj...</option>
                <option value="a>">Abecedno A-Z</option>
                <option value="a<">Abecedno Z-A</option>
                <option value="p>">Plaća od najviše</option>
                <option value="p<">Plaća od najmanje</option>   
            </select>
        </div>
    )
}

export default WorkplaceSorter
