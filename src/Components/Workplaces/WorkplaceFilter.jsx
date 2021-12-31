import React from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

import '../../Common/style/filter.scss'
import Search from '../../Common/images/search.png'
import Delete from '../../Common/images/bin.png'

function Filter() {
    const searchSubmit = (e) => {
        e.preventDefault()
        const input = {
          keyWord: e.target.inputText.value,
          salaryRange1: e.target.salaryRange1.value,
          salaryRange2: e.target.salaryRange2.value,
          workPlace: e.target.workPlaces.value
        }
        WorkPlaceStore.searchHandler(input)
        e.target.inputText.value = null
        e.target.salaryRange1.value = null
        e.target.salaryRange2.value = null
        e.target.workPlaces.value = null
      }

    const refreshHandler = () => {
    WorkPlaceStore.refreshData()
    }

    const salaries = [3500, 4500, 5500, 6500, 7500, 9500, 10500]

    return (
        <div className="filter-wrapper">
          <form onSubmit={searchSubmit}>
            <h3>Filtriranje</h3>
          <div>
            <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText" placeholder="Pretraži po opisu..."/>
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
                <select className="form-select" name="salaryRange2">
                    <option defaultValue> </option>
                    { salaries.map((salary) => 
                      (<option value={salary}>{salary}</option>)
                    ) }
                </select>
                <p>kn</p>
            </div>
          <div>
            <select className="form-select" name="workPlaces" id="workPlaces">
            <option defaultValue disabled selected>Radno mjesto...</option>
          {WorkPlaceStore.workPlaces.map((work) => (
              <option value={work.name}>{work.name}</option>
          ))}
          </select>
          </div>
          <button type="submit" className="btn-undo"><img src={Search} alt="Search" />Traži</button>
        </form>
        <button onClick={refreshHandler} className="btn-red"><img src={Delete} alt="Delete" />Poništi filter</button> 
        </div>
    )
}

export default Filter
