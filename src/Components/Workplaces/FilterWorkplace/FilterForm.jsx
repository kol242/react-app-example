import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'
import WpFilterStore from '../../../Stores/Workplaces/WpFilterStore'
import Search from '../../../Common/images/search.png'
import Name from './Inputs/Name'
import SalaryMore from './Inputs/SalaryMore'
import SalaryLess from './Inputs/SalaryLess'

const FilterForm = observer(() => {
    const filterType = (e) => {
        e.preventDefault()
        const input = {
          keyWord: WpFilterStore.filterTypeChecker === 'name' ? e.target.value : null,
          salaryLess: WpFilterStore.filterTypeChecker === 'salaryLess' ? Number(e.target.value) : null,
          salaryMore: WpFilterStore.filterTypeChecker === 'salaryMore' ? Number(e.target.value) : null,
          workPlace: WpFilterStore.filterTypeChecker === 'workplace' ? e.target.value : null,
        }
        WpFilterStore.filterValues(input)
      }
    
    const filterSubmit = (e) => {
        e.preventDefault()
        WorkPlaceStore.getWorkplaces()
    }

    return (
        <div>
            <form onChange={filterType} onSubmit={filterSubmit}>
                { WpFilterStore.filterTypeChecker === 'name' ? <Name /> : null }
                { WpFilterStore.filterTypeChecker === 'salaryMore' ? <SalaryMore /> : null }
                { WpFilterStore.filterTypeChecker === 'salaryLess' ? <SalaryLess /> : null }
                <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
            </form>
        </div>
    )
})

export default FilterForm
