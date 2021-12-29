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
                <option value="a>">Abecedno silazno</option>
                <option value="a<">Abecedno uzlazno</option>
                <option value="p>">Plaća silazno</option>
                <option value="p<">Plaća uzlazno</option>  
                <option value="g>">Godine uzlazno</option>  
                <option value="g<">Godine silazno</option>  
            </select>
        </div>
    )
}

export default WorkerSorter
