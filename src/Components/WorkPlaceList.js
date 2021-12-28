import { observer } from 'mobx-react'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const WorkPlaceList = observer(() => {
  const [filter, setFilter] = useState(false)

    const filterHandler = () => {
      filter ? setFilter(false) : setFilter(true)
    }

    const refreshHandler = () => {
      WorkPlaceStore.refreshData()
    }

  const salaries = [3500, 4500, 5500, 6500, 7500, 9500, 10500]

  const deleteSelectedWorkplace = (id) => {
    WorkPlaceStore.deleteWorkplace(id)
  }
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
  return (
      <>
      <div className="container w-50">
      <h1>Popis radnih mjesta</h1>
        <Link to="/new-workplace"><button className="btn btn-success me-2">Dodaj radno mjesto</button></Link>
        <Link to="/"><button className="btn btn-secondary">Lista svih radnika</button></Link>
        <button className="btn btn-primary ms-3 me-3" onClick={filterHandler}>Filtriraj</button>
        { filter ? 
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
        </div> : null }
        { filter ? WorkPlaceStore.searchedWorkplaces.map((workplace) => (
          <div>
          <br />
        <table className="table" key={workplace.docId}>
          <tbody>
            <tr>
              <td>Naziv:</td>
              <td>{workplace.name}</td>
            </tr>
            <tr>
              <td>Opis: </td>
              <td>{workplace.descr}</td>
            </tr>
            <tr>
              <td>Plaća: </td>
              <td>{workplace.salary} Kn (neto)</td>
            </tr>
            <tr>
              <td>
              <Link to="/new-worker" state={{ docId: workplace.docId, name: workplace.name }}><button className="btn btn-success">Dodaj radnika</button></Link>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td><button onClick={() => deleteSelectedWorkplace(workplace.docId)} className="btn btn-danger me-2">Obriši</button>
              <Link to='/edit-workplace'
              state={{
                docId: workplace.docId,
                name: workplace.name,
                employees: workplace.employees,
                descr: workplace.descr,
                salary: workplace.salary
              }}>
                <button className="btn btn-primary me-2">Uredi</button></Link>
              </td>
            </tr>
          </tfoot>
        </table>
          <br />
        </div>
        )) : WorkPlaceStore.workPlaces.map((workplace) => (
          <div>
            <br />
          <table className="table" key={workplace.docId}>
            <tbody>
              <tr>
                <td>Naziv:</td>
                <td>{workplace.name}</td>
              </tr>
              <tr>
                <td>Opis: </td>
                <td>{workplace.descr}</td>
              </tr>
              <tr>
                <td>Plaća: </td>
                <td>{workplace.salary} Kn (neto)</td>
              </tr>
              <tr>
                <td>
                <Link to="/new-worker" state={{ docId: workplace.docId, name: workplace.name }}><button className="btn btn-success">Dodaj radnika</button></Link>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={() => deleteSelectedWorkplace(workplace.docId)} className="btn btn-danger me-2">Obriši</button>
                <Link to='/edit-workplace'
                state={{
                  docId: workplace.docId,
                  name: workplace.name,
                  employees: workplace.employees,
                  descr: workplace.descr,
                  salary: workplace.salary
                }}>
                  <button className="btn btn-primary me-2">Uredi</button></Link>
                </td>
              </tr>
            </tfoot>
          </table>
            <br />
          </div>
          ))   
        }  
      </div>

      </>
  )
})

export default WorkPlaceList
