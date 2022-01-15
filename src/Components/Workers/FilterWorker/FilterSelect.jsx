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
                <option value="default" disabled>Filtriraj...</option>
                <option key="lastName" value="lastName">Po prezimenu</option>          
                <option key="salaryMore" value="salaryMore">Plaća više od</option>          
                <option key="salaryLess" value="salaryLess">Plaća manje od</option>          
                <option key="ageMore" value="ageMore">Starost više od</option>          
                <option key="ageLess" value="ageLess">Starost manje od</option>          
                <option key="workplace" value="workplace">Po radnom mjestu</option>          
                <option key="contract" value="contract">Po ugovoru</option>          
            </select>
        </>
    )
})

export default FilterSelect
