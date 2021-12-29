import React from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

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
      }

    const refreshHandler = () => {
    WorkPlaceStore.refreshData()
    }

    const salaries = [3500, 4500, 5500, 6500, 7500, 9500, 10500]

    return (
        <div>
          <form onSubmit={searchSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="searchInput">Pretraži po opisu:</label>
            <input type="text" className="form-control w-50 mb-3" id="searchInput" name="inputText"/>
          </div>
          <div className="mb-3 w-50">
          <label htmlFor="salaryRange" className="form-label">Raspon plaće:</label>
                <p>Od:</p>
                <select className="form-select" name="salaryRange1" id="salaryRange">
                    <option defaultValue> </option>
                    { salaries.map((salary) => 
                      (<option value={salary}>{salary}</option>)
                    ) }
                </select>
                <p>Do:</p>
                <select className="form-select" name="salaryRange2">
                    <option defaultValue> </option>
                    { salaries.map((salary) => 
                      (<option value={salary}>{salary}</option>)
                    ) }
                </select>
            </div>
          <div className="mb-3 w-50">
          <label htmlFor="workPlaces" className="form-label">Radno mjesto:</label>
            <select className="form-select" name="workPlaces" id="workPlaces">
            <option defaultValue> </option>
          {WorkPlaceStore.workPlaces.map((work) => (
              <option value={work.name}>{work.name}</option>
          ))}
          </select>
          </div>
          <button type="submit" className="btn btn-primary">Traži</button>
        </form>
        <button onClick={refreshHandler} className="btn btn-warning mt-3">Poništi filter</button>    
        </div>
    )
}

export default Filter
