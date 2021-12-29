import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

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
        <form onSubmit={searchSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="searchInput">Prezime:</label>
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
                <label htmlFor="ageRange" className="form-label">Raspon godina:</label>
                <p>Od:</p>
                <select className="form-select" name="ageRange1" id="ageRange">
                    <option defaultValue> </option>
                    { ages.map((age) => (
                      <option value={age}>{age}</option>
                    )) }
                </select>
                <p>Do:</p>
                <select className="form-select" name="ageRange2">
                    <option defaultValue> </option>
                    { ages.map((age) => (
                      <option value={age}>{age}</option>
                    )) }
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
          <div className="mb-3 w-50">
          <label htmlFor="contractType" className="form-label">Vrsta ugovora:</label>
            <select className="form-select" name="contractType" id="contractType">
            <option defaultValue> </option>
            <option>Neodređeno</option>
            <option>Određeno</option>
          </select>
          </div>
          <button type="submit" className="btn btn-primary me-3">Traži</button>  
      </form>
      <button onClick={refreshHandler} className="btn btn-warning mt-3">Poništi filter</button>
      </div> 
    )
}

export default WorkerFilter
