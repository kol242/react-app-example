import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'
import Search from '../../../Common/images/search.png'
import Name from './Inputs/Name'
import SalaryMore from './Inputs/SalaryMore'
import SalaryLess from './Inputs/SalaryLess'

const FilterForm = observer(() => {
    const filterType = (e) => {
        e.preventDefault()
        const input = {
          keyWord: WorkPlaceStore.filterTypeChecker === 'name' ? e.target.value : null,
          salaryLess: WorkPlaceStore.filterTypeChecker === 'salaryLess' ? Number(e.target.value) : null,
          salaryMore: WorkPlaceStore.filterTypeChecker === 'salaryMore' ? Number(e.target.value) : null,
          workPlace: WorkPlaceStore.filterTypeChecker === 'workplace' ? e.target.value : null,
        }
        WorkPlaceStore.filterValues(input)
      }
    
    const filterSubmit = (e) => {
        e.preventDefault()
        WorkPlaceStore.getWorkplaces()
    }

    return (
        <div>
            <form onChange={filterType} onSubmit={filterSubmit}>
                { WorkPlaceStore.filterTypeChecker === 'name' ? <Name /> : null }
                { WorkPlaceStore.filterTypeChecker === 'salaryMore' ? <SalaryMore /> : null }
                { WorkPlaceStore.filterTypeChecker === 'salaryLess' ? <SalaryLess /> : null }
                <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
            </form>
        </div>
    )
})

export default FilterForm
