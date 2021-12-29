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
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue disabled selected>Sortiraj...</option>
                <option value="a>">Abecedno silazno</option>
                <option value="a<">Abecedno uzlazno</option>
                <option value="p>">Plaća silazno</option>
                <option value="p<">Plaća uzlazno</option>  
            </select>
        </div>
    )
}

export default WorkplaceSorter
