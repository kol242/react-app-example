import React from 'react'
import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

import Search from '../../Common/images/search.png'
import Delete from '../../Common/images/bin.png'

const WorkerFilter = observer(() => {
  const salaries = [3500, 4500, 5500, 6500, 7500, 9500, 10500]
  const ages = [18, 25, 35, 45, 55, 65, 75]

  const searchSubmit = (e) => {
    e.preventDefault()
    const input = {
      keyWord: e.target.inputText.value,
      salaryRange1: Number(e.target.salaryRange1.value),
      salaryRange2: Number(e.target.salaryRange2.value),
      workPlace: e.target.workPlaces.value,
      ageRange1: Number(e.target.ageRange1.value),
      ageRange2: Number(e.target.ageRange2.value),
      contract: e.target.contractType.value
    }
    WorkerStore.searchHandler(input)
    e.target.inputText.value = null
    e.target.salaryRange1.value = null
    e.target.salaryRange2.value = null
    e.target.workPlaces.value = null
    e.target.ageRange1.value = null
    e.target.ageRange2.value = null
    e.target.contractType.value = null
  }
  
  const refreshHandler = () => {
    WorkerStore.refreshData()
  }
  return (
    <div className="filter-wrapper">
      <form onSubmit={searchSubmit}>
        <h3>Filtriranje</h3>
        <div>
          <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText" placeholder="Prezime..."/>
        </div>
        <div className="salary-wrapper">
              <p>Od</p>
              <select name="salaryRange1" id="salaryRange">
                  <option defaultValue> </option>
                  { salaries.map((salary) => 
                    (<option key={salary} value={salary}>{salary}</option>)
                  ) }
              </select>
              <p>kn do</p>
              <select name="salaryRange2">
                  <option defaultValue> </option>
                  { salaries.map((salary) => 
                    (<option key={salary} value={salary}>{salary}</option>)
                  ) }
              </select>
              <p>kn</p>
          </div>
        <div className="salary-wrapper">   
              <p>Od</p>
              <select name="ageRange1" id="ageRange">
                  <option defaultValue> </option>
                  { ages.map((age) => (
                    <option key={age} value={age}>{age}</option>
                  )) }
              </select>
              <p>do</p>
              <select name="ageRange2">
                  <option defaultValue> </option>
                  { ages.map((age) => (
                    <option key={age} value={age}>{age}</option>
                  )) }
              </select>
          </div>
        <div>
          <select className="form-select" name="workPlaces" id="workPlaces">
          <option defaultValue disabled selected>Radno mjesto...</option>
        {WorkPlaceStore.workPlaces.map((work) => (
            <option key={work.docId} value={work.name}>{work.name}</option>
        ))}
        </select>
        </div>
        <div>
          <select name="contractType" id="contractType">
          <option defaultValue disabled selected>Vrsta ugovora...</option>
          <option key="Neodređeno">Neodređeno</option>
          <option key="Određeno">Određeno</option>
        </select>
        </div>
        <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
    </form>
    <button onClick={refreshHandler} className="btn-red"><img src={Delete} alt="Delete" />Poništi filter</button>
    </div> 
  )
})

export default WorkerFilter
