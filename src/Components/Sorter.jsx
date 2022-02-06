import { observer } from 'mobx-react'
import React from 'react'
import '../Common/style/sorter.scss'

const Sorter = observer(({ sorter }) => {
    const sorting = (e) => {
        e.preventDefault()
        const sorterType = e.target.value
        sorter.sorterType(sorterType)
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

export default Sorter
