import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

import Search from '../../Common/images/search.png'
import Delete from '../../Common/images/bin.png'

function WorkerFilter() {
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
    }
    const refreshHandler = () => {
        WorkerStore.refreshData()
      }
    return (
      <div>
        <form className="filter-wrapper" onSubmit={searchSubmit}>
          <h3>Filtriranje</h3>
          <div>
            <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText" placeholder="Prezime..."/>
          </div>
          <div className="salary-wrapper">
                <p>Od</p>
                <select name="salaryRange1" id="salaryRange">
                    <option defaultValue> </option>
                    { salaries.map((salary) => 
                      (<option value={salary}>{salary}</option>)
                    ) }
                </select>
                <p>kn do</p>
                <select name="salaryRange2">
                    <option defaultValue> </option>
                    { salaries.map((salary) => 
                      (<option value={salary}>{salary}</option>)
                    ) }
                </select>
                <p>kn</p>
            </div>
          <div className="salary-wrapper">   
                <p>Od</p>
                <select name="ageRange1" id="ageRange">
                    <option defaultValue> </option>
                    { ages.map((age) => (
                      <option value={age}>{age}</option>
                    )) }
                </select>
                <p>do</p>
                <select name="ageRange2">
                    <option defaultValue> </option>
                    { ages.map((age) => (
                      <option value={age}>{age}</option>
                    )) }
                </select>
            </div>
          <div>
            <select className="form-select" name="workPlaces" id="workPlaces">
            <option defaultValue disabled selected>Radno mjesto...</option>
          {WorkPlaceStore.workPlaces.map((work) => (
              <option value={work.name}>{work.name}</option>
          ))}
          </select>
          </div>
          <div>
            <select name="contractType" id="contractType">
            <option defaultValue disabled selected>Vrsta ugovora...</option>
            <option>Neodređeno</option>
            <option>Određeno</option>
          </select>
          </div>
          <div className="btn-wrapper">
            <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
            <button onClick={refreshHandler} className="btn-red"><img src={Delete} alt="Delete" />Poništi filter</button>
          </div>
      </form>
      
      </div> 
    )
}

export default WorkerFilter
