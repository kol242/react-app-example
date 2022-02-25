import React from 'react'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'

const FilterSelect = () => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        WpFilterStore.filterTypeHandler(type)
    }

    return (
        <>
            <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
                <option value="default" disabled>Filter by...</option>
                <option key="name" value="name">Name</option>          
                <option key="salaryMore" value="salaryMore">Salary more than...</option>          
                <option key="salaryLess" value="salaryLess">Salary less than...</option>                                  
            </select>
        </>
    )
}

export default FilterSelect
