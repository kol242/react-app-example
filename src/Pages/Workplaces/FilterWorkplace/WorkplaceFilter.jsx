import React from 'react'
import { observer } from 'mobx-react'

import '../../../Common/style/filter.scss'

import FilterSelect from '../../../Components/Workplaces/FilterWorkplace/FilterSelect'
import FilterForm from '../../../Components/Workplaces/FilterWorkplace/FilterForm'

const WorkplaceFilter = observer(() => {
  return (
    <div className="filter-wrapper">
      <h3>Filtering</h3>
      <FilterSelect />
      <FilterForm />
    </div>
  )
}) 

export default WorkplaceFilter
