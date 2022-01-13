import React from 'react'
import WorkerStore from '../../../Stores/WorkerStore'
import Search from '../../../Common/images/search.png'
import { observer } from 'mobx-react'
// components
import List from '../../../Components/Workers/FilterWorker/List'
import LastName from './Inputs/LastName'
import SalaryMore from './Inputs/SalaryMore'
import SalaryLess from './Inputs/SalaryLess'
import AgeMore from './Inputs/AgeMore'
import AgeLess from './Inputs/AgeLess'
import Contract from './Inputs/Contract'

const FilterForm = observer(() => {
    const filterType = (e) => {
        e.preventDefault()
        const input = {
            keyWord: WorkerStore.filterTypeChecker === 'lastName' ? e.target.value : null,
            salaryLess: WorkerStore.filterTypeChecker === 'salaryLess' ? Number(e.target.value) : null,
            salaryMore: WorkerStore.filterTypeChecker === 'salaryMore' ? Number(e.target.value) : null,
            workPlace: WorkerStore.filterTypeChecker === 'workplace' ? e.target.value : null,
            ageMore: WorkerStore.filterTypeChecker === 'ageMore' ? Number(e.target.value) : null,
            ageLess: WorkerStore.filterTypeChecker === 'ageLess' ? Number(e.target.value) : null,
            contract: WorkerStore.filterTypeChecker === 'contract' ? e.target.value : null
        }
        WorkerStore.filterValues(input)
    }
    
    const filterSubmit = (e) => {
        e.preventDefault()
        WorkerStore.getWorkers()
    }

    return (
        <>
            <form onChange={filterType} onSubmit={filterSubmit}>
                { WorkerStore.filterTypeChecker === 'lastName' ? <LastName /> : null}
                { WorkerStore.filterTypeChecker === 'salaryMore' ? <SalaryMore /> : null}
                { WorkerStore.filterTypeChecker === 'salaryLess' ? <SalaryLess /> : null}
                { WorkerStore.filterTypeChecker === 'ageMore' ? <AgeMore /> : null }
                { WorkerStore.filterTypeChecker === 'ageLess' ? <AgeLess /> : null }
                { WorkerStore.filterTypeChecker === 'workplace' ? <List /> : null}
                { WorkerStore.filterTypeChecker === 'contract' ? <Contract /> : null}
                <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
            </form>
        </>
    )
})

export default FilterForm
