import { observer } from 'mobx-react'
import React from 'react'
import FilterStore from '../../../Stores/Workers/FilterStore'
import '../../../Common/style/sorter.scss'

const WorkerSorter = observer(() => {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        FilterStore.sorterType(sorterType)
    }
    
    return (
        <div>
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue>Sort...</option>
                <option value="nameAsc">A-Z</option>
                <option value="nameDesc">Z-A</option>
                <option value="salaryDesc">Salary from highest</option>
                <option value="salaryAsc">Salary from lowest</option>
                <option value="ageDesc">Age from highest</option>
                <option value="ageAsc">Age from lowest</option>
            </select>   
        </div>
    )
})

export default WorkerSorter
