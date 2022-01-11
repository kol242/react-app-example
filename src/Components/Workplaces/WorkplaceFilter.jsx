import React from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
import { observer } from 'mobx-react'

import '../../Common/style/filter.scss'
import Search from '../../Common/images/search.png'

const WorkplaceFilter = observer(() => {
  const filterType = (e) => {
    e.preventDefault()
    const input = {
      keyWord: WorkPlaceStore.filterTypeChecker === 'descr' ? e.target.value : null,
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
          <option defaultValue key="descr" value="descr">Po opisu</option>          
          <option key="salaryMore" value="salaryMore">Plaća više od</option>          
          <option key="salaryLess" value="salaryLess">Plaća manje od</option>                   
          <option key="workplace" value="workplace">Po radnom mjestu</option>                
      </select>
      <form onChange={filterType} onSubmit={filterSubmit}>
        { WorkPlaceStore.filterTypeChecker === 'descr' ?
          <div>
            <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText" placeholder="Pretraži po opisu..."/>
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
        { WorkPlaceStore.filterTypeChecker === 'workplace' ? 
          <select className="form-select" name="workPlaces" id="workPlaces">
            <option key='default3' defaultValue>Radno mjesto...</option>
            {WorkPlaceStore.workPlaces.map((work) => (
              <option key={work.docId} value={work.name}>{work.name}</option>
            ))}
          </select>
        : null }
        <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
      </form>
    </div>
  )
}) 

export default WorkplaceFilter
