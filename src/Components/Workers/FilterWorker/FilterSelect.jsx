import { observer } from 'mobx-react-lite'
import React from 'react'
import FilterStore from '../../../Stores/Workers/FilterStore'

const FilterSelect = observer(() => {
    const filterTypeChecker = (e) => {
        e.preventDefault()
        const type = e.target.value
        FilterStore.filterTypeHandler(type)
    }
    
    return (
        <>
            <select defaultValue={'default'} onChange={filterTypeChecker} name="filter-type" id="filter-type">
                <option value="default" disabled>Filter by...</option>
                <option key="lastName" value="lastName">Lastname</option>          
                <option key="salaryMore" value="salaryMore">Salary more than...</option>          
                <option key="salaryLess" value="salaryLess">Salary less than...</option>          
                <option key="ageMore" value="ageMore">Age more than...</option>          
                <option key="ageLess" value="ageLess">Age less than...</option>          
                <option key="workplace" value="workplace">Workplace</option>          
                <option key="contract" value="contract">Type of contract</option>          
            </select>
        </>
    )
})

export default FilterSelect
