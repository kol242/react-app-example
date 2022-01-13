import React from 'react'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'
import { observer } from 'mobx-react'

import '../../../Common/style/filter.scss'
import Search from '../../../Common/images/search.png'

const WorkplaceFilter = observer(() => {
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

  const filterTypeChecker = (e) => {
    e.preventDefault()
    const type = e.target.value
    WorkPlaceStore.filterTypeHandler(type)
  }

  return (
    <div className="filter-wrapper">
      <h3>Filtriranje</h3>
      <select onChange={filterTypeChecker} name="filter-type" id="filter-type">
          <option defaultValue key="name" value="name">Po nazivu</option>          
          <option key="salaryMore" value="salaryMore">Plaća više od</option>          
          <option key="salaryLess" value="salaryLess">Plaća manje od</option>                                  
      </select>
      <form onChange={filterType} onSubmit={filterSubmit}>
        { WorkPlaceStore.filterTypeChecker === 'name' ?
          <div>
            <input type="text" id="searchInput" name="name" placeholder="Pretraži po nazivu..."/>
          </div>
        : null }
        { WorkPlaceStore.filterTypeChecker === 'salaryMore' ? 
          <div className="salary-wrapper">
            <p>Više od </p>
            <input type="number" name="salary"/>
            <p>kn</p>
          </div> 
        : null }
        { WorkPlaceStore.filterTypeChecker === 'salaryLess' ? 
          <div className="salary-wrapper">
            <p>Manje od </p>
            <input type="number" name="salary"/>
            <p>kn</p>
          </div>
        : null }
        <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
      </form>
    </div>
  )
}) 

export default WorkplaceFilter
