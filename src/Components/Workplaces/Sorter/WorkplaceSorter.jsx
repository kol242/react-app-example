import { observer } from 'mobx-react'
import React from 'react'
import '../../../Common/style/sorter.scss'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'

const WorkplaceSorter = observer(() => {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        WpFilterStore.sorterType(sorterType)
    }
    
    return (
        <div>
            <select onChange={sorting} className="sorter" name="sorting" id="sorting">
                <option defaultValue>Sort...</option>
                <option value="nameAsc">A-Z</option>
                <option value="nameDesc">Z-A</option>
                <option value="salaryDesc">Salary from highest</option>
                <option value="salaryAsc">Salary from lowest</option>
            </select>   
        </div>
    )
})

export default WorkplaceSorter
