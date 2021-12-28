import { observer } from 'mobx-react'
import WorkerStore from '../Stores/WorkerStore'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const WorkersList = observer(() => {
    const [filter, setFilter] = useState(false)

    const filterHandler = () => {
      filter ? setFilter(false) : setFilter(true)
    }

    const refreshHandler = () => {
      WorkerStore.refreshData()
    }

    const deleteSelectedWorker = (id) => {
        WorkerStore.deleteWorker(id)
    }

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

    return (
      <>
      <div className="container w-50">
      <h1>Popis radnika</h1>
        <Link to="/workplaces"><button className="btn btn-secondary">Radna mjesta</button></Link>
        <button className="btn btn-primary ms-3 me-3" onClick={filterHandler}>Filtriraj</button>
      { filter ? 
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
      </div> : null }
          { filter ? WorkerStore.searchedWorkers.map((worker) => (
          <div>
            <br />
          <table className="table" key={worker.docId}>
            <tbody>
              <tr>
                <td>Ime:</td>
                <td>{worker.name}</td>
              </tr>
              <tr>
                <td>Prezime: </td>
                <td>{worker.lastName}</td>
              </tr>
              <tr>
                <td>Dob: </td>
                <td>{worker.age}</td>
              </tr>
              <tr>
                <td>Plaća: </td>
                <td>{worker.salary} Kn (neto)</td>
              </tr>
              <tr>
                <td>Pozicija: </td>
                <td>{worker.workPlace}</td>
              </tr>
              <tr>
                <td>Vrsta ugovora: </td>
                <td>{worker.contract}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={() => deleteSelectedWorker(worker.docId)} className="btn btn-danger me-2">Obriši</button> 
                <Link to='/edit-worker' 
                state={{
                  docId: worker.docId, 
                  name: worker.name,
                  lastName: worker.lastName,
                  age: worker.age,
                  salary: worker.salary,
                  workPlace: worker.workPlace,
                  contract: worker.contract
                  }}>
                  <button className="btn btn-primary">Uredi</button></Link>
                </td>
              </tr>
            </tfoot>
          </table>
          </div>    
          )) :  WorkerStore.workers.map((worker) => (
          <div>
            <br />
          <table className="table" key={worker.docId}>
            <tbody>
              <tr>
                <td>Ime:</td>
                <td>{worker.name}</td>
              </tr>
              <tr>
                <td>Prezime: </td>
                <td>{worker.lastName}</td>
              </tr>
              <tr>
                <td>Dob: </td>
                <td>{worker.age}</td>
              </tr>
              <tr>
                <td>Plaća: </td>
                <td>{worker.salary} Kn (neto)</td>
              </tr>
              <tr>
                <td>Pozicija: </td>
                <td>{worker.workPlace}</td>
              </tr>
              <tr>
                <td>Vrsta ugovora: </td>
                <td>{worker.contract}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={() => deleteSelectedWorker(worker.docId)} className="btn btn-danger me-2">Obriši</button> 
                <Link to='/edit-worker' 
                state={{
                  docId: worker.docId, 
                  name: worker.name,
                  lastName: worker.lastName,
                  age: worker.age,
                  salary: worker.salary,
                  workPlace: worker.workPlace,
                  contract: worker.contract
                  }}>
                  <button className="btn btn-primary">Uredi</button></Link>
                </td>
              </tr>
            </tfoot>
          </table>
          </div>    
          ))}   
      </div>
        
      </>
    );
  })

export default WorkersList
