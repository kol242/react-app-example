import React from 'react'
import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

import Search from '../../Common/images/search.png'

const WorkerFilter = observer(() => {
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
  
  const filterTypeChecker = (e) => {
    e.preventDefault()
    const type = e.target.value
    WorkerStore.filterTypeHandler(type)
  }

  return (
    <div className="filter-wrapper">
      <h3>Filtriranje</h3>
      <select onChange={filterTypeChecker} name="filter-type" id="filter-type">
          <option defaultValue key="lastName" value="lastName">Po prezimenu</option>          
          <option key="salaryMore" value="salaryMore">Plaća više od</option>          
          <option key="salaryLess" value="salaryLess">Plaća manje od</option>          
          <option key="ageMore" value="ageMore">Starost više od</option>          
          <option key="ageLess" value="ageLess">Starost manje od</option>          
          <option key="workplace" value="workplace">Po radnom mjestu</option>          
          <option key="contract" value="contract">Po ugovoru</option>          
        </select>
      <form onChange={filterType} onSubmit={filterSubmit}>
        { WorkerStore.filterTypeChecker === 'lastName' ? 
        <div>
          <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText" placeholder="Prezime..."/>
        </div> : null}
        { WorkerStore.filterTypeChecker === 'salaryMore' ? 
        <div className="salary-wrapper">
              <p>Više od </p>
              <input type="number" name="salary"/>
              <p>kn</p>
        </div> : null}
        { WorkerStore.filterTypeChecker === 'salaryLess' ? 
        <div className="salary-wrapper">
              <p>Manje od </p>
              <input type="number" name="salary"/>
              <p>kn</p>
        </div> : null}
        { WorkerStore.filterTypeChecker === 'ageMore' ? 
        <div className="salary-wrapper">   
              <p>Više od </p>
              <input type="number" name="age"/>
              <p>godina</p>
        </div> : null }
        { WorkerStore.filterTypeChecker === 'ageLess' ? 
        <div className="salary-wrapper">   
              <p>Manje od </p>
              <input type="number" name="age"/>
              <p>godina</p>
        </div> : null }
        { WorkerStore.filterTypeChecker === 'workplace' ? 
        <div>
          <select defaultValue={'default'} className="form-select" name="workPlaces" id="workPlaces">
          <option key='default1' value='default' disabled>Radno mjesto...</option>
          {WorkPlaceStore.workPlaces.map((work) => (
            <option key={work.docId} value={work.name}>{work.name}</option>
          ))}
          </select>
        </div> : null}
        { WorkerStore.filterTypeChecker === 'contract' ?
         <div>
          <select defaultValue={'default'} name="contractType" id="contractType">
            <option key='default2' value='default' disabled>Vrsta ugovora...</option>
            <option key="Neodređeno">Neodređeno</option>
            <option key="Određeno">Određeno</option>
          </select>
        </div> : null}
        <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
    </form>
    </div> 
  )
})

export default WorkerFilter
