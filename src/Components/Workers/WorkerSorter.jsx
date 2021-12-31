import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import '../../Common/style/sorter.scss'

function WorkerSorter() {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        WorkerStore.sorter(sorterType)
    }
    
    return (
        <div>
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue>Sortiraj...</option>
                <option value="a>">Abecedno A-Z</option>
                <option value="a<">Abecedno Z-A</option>
                <option value="p>">Plaća od najviše</option>
                <option value="p<">Plaća od najmanje</option>  
                <option value="g>">Godine od najstarijeg</option>  
                <option value="g<">Godine od najmlađeg</option>  
            </select>
        </div>
    )
}

export default WorkerSorter
