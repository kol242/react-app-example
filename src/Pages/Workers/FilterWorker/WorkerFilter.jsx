import React from 'react'
import { observer } from 'mobx-react'
import FilterSelect from '../../../Components/Workers/FilterWorker/FilterSelect'
import FilterForm from '../../../Components/Workers/FilterWorker/FilterForm'

const WorkerFilter = observer(() => {
  return (
    <div className="filter-wrapper">
      <h3>Filtriranje</h3>
      <FilterSelect />
      <FilterForm />
    </div> 
  )
})

export default WorkerFilter
