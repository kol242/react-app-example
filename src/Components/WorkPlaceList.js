import { observer } from 'mobx-react'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'

const WorkPlaceList = observer(() => {
    const deleteSelectedWorkplace = (id) => {
        WorkPlaceStore.deleteWorkplace(id)
    }
    return (
      <>
      <div class="container w-50">
      <h1>Popis radnih mjesta</h1>
        <Link to="/new-workplace"><button class="btn btn-success me-2">Dodaj radno mjesto</button></Link>
        <Link to="/"><button class="btn btn-secondary">Lista radnika</button></Link>
          {WorkPlaceStore.workPlaces.map((workplace) => (
          <div>
            <br />
          <table class="table" key={workplace.docId}>
            <tbody>
              <tr>
                <td>Naziv:</td>
                <td>{workplace.name}</td>
              </tr>
              <tr>
                <td>Broj radnika: </td>
                <td>{workplace.employees}</td>
              </tr>
              <tr>
                <td>Opis: </td>
                <td>{workplace.descr}</td>
              </tr>
              <tr>
                <td>Plaća: </td>
                <td>{workplace.salary} Kn (neto)</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={() => deleteSelectedWorkplace(workplace.docId)} class="btn btn-danger me-2">Obriši</button> 
                <Link to='/edit-workplace' 
                state={{
                  docId: workplace.docId, 
                  name: workplace.name,
                  employees: workplace.employees,
                  descr: workplace.descr,
                  salary: workplace.salary,
                  }}>
                  <button class="btn btn-primary">Uredi</button></Link>
                </td>
              </tr>
            </tfoot>
          </table>
            <br /> 
          </div>    
          ))}
      </div>
        
      </>
    );
  })

export default WorkPlaceList
