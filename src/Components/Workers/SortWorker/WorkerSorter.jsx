import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/style/sorter.scss'
import DataListViewStore from '../../../Stores/DataListViewStore'

const WorkerSorter = observer(({ dataset }) => {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        DataListViewStore.sorter(dataset, sorterType)
    }
    
    return (
        <div>
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue>Sortiraj...</option>
                <option value="nameAsc">Abecedno A-Z</option>
                <option value="nameDesc">Abecedno Z-A</option>
                <option value="salaryDesc">Plaća od najviše</option>
                <option value="salaryAsc">Plaća od najmanje</option>  
            </select>   
        </div>
    )
})

export default WorkerSorter
