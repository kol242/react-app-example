import React from 'react'
import WorkerStore from '../../../Stores/Workers/WorkerStore'
import { observer } from 'mobx-react'
// components
import List from '../../../Components/Workers/FilterWorker/List'
import LastName from './Inputs/LastName'
import SalaryMore from './Inputs/SalaryMore'
import SalaryLess from './Inputs/SalaryLess'
import AgeMore from './Inputs/AgeMore'
import AgeLess from './Inputs/AgeLess'
import Contract from './Inputs/Contract'
import FilterStore from '../../../Stores/Workers/FilterStore'
import { BiSearch } from 'react-icons/bi'

const FilterForm = observer(() => {
    const filterType = (e) => {
        e.preventDefault()
        const input = {
            keyWord: FilterStore.filterTypeChecker === 'lastName' ? e.target.value : null,
            salaryLess: FilterStore.filterTypeChecker === 'salaryLess' ? Number(e.target.value) : null,
            salaryMore: FilterStore.filterTypeChecker === 'salaryMore' ? Number(e.target.value) : null,
            workPlace: FilterStore.filterTypeChecker === 'workplace' ? e.target.value : null,
            ageMore: FilterStore.filterTypeChecker === 'ageMore' ? Number(e.target.value) : null,
            ageLess: FilterStore.filterTypeChecker === 'ageLess' ? Number(e.target.value) : null,
            contract: FilterStore.filterTypeChecker === 'contract' ? e.target.value : null
        }
        FilterStore.filterValues(input)
    }
    
    const filterSubmit = (e) => {
        e.preventDefault()
        WorkerStore.getWorkers()
    }

    return (
        <>
            <form onChange={filterType} onSubmit={filterSubmit}>
                { FilterStore.filterTypeChecker === 'lastName' ? <LastName /> : null}
                { FilterStore.filterTypeChecker === 'salaryMore' ? <SalaryMore /> : null}
                { FilterStore.filterTypeChecker === 'salaryLess' ? <SalaryLess /> : null}
                { FilterStore.filterTypeChecker === 'ageMore' ? <AgeMore /> : null }
                { FilterStore.filterTypeChecker === 'ageLess' ? <AgeLess /> : null }
                { FilterStore.filterTypeChecker === 'workplace' ? <List /> : null}
                { FilterStore.filterTypeChecker === 'contract' ? <Contract /> : null}
                <button type="submit" className="btn-undo"><BiSearch className="icon"/>Traži</button>
            </form>
        </>
    )
})

export default FilterForm
