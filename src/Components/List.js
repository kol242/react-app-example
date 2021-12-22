import { observer } from 'mobx-react'
import WorkerStore from '../Stores/WorkerStore'
import { Link } from 'react-router-dom'

const List = observer(() => {
    const deleteSelectedWorker = (id) => {
        WorkerStore.deleteWorker(id)
    }
    return (
      <>
        <h1>Test Project</h1>
        <h2>Radnici</h2><Link to="/new-worker"><button>Dodaj radnika</button></Link>
          {WorkerStore.workers.map((worker) => (
          <div>
            <br />
          <table key={worker.docId}>
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
            </tbody>
            <tfoot>
              <tr>
                <td><button onClick={() => deleteSelectedWorker(worker.docId)}>Obriši</button> 
                <Link to='/edit-worker' 
                state={{
                  docId: worker.docId, 
                  name: worker.name,
                  lastName: worker.lastName,
                  age: worker.age,
                  salary: worker.salary,
                  workPlace: worker.workPlace
                  }}>
                  <button>Uredi</button></Link>
                </td>
              </tr>
            </tfoot>
          </table>
            <br /> 
          </div>    
          ))}
      </>
    );
  })

export default List
