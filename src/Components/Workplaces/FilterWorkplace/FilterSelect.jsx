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
                <option value="default" disabled>Filtriraj...</option>
                <option key="name" value="name">Po nazivu</option>          
                <option key="salaryMore" value="salaryMore">Plaća više od</option>          
                <option key="salaryLess" value="salaryLess">Plaća manje od</option>                                  
            </select>
        </>
    )
}

export default FilterSelect
