import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
import '../../Common/style/list.scss'

import New from '../../Common/images/plus.png'
import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'
import Filter from '../../Common/images/filter.png'

import WorkplaceFilter from '../../Components/Workplaces/WorkplaceFilter'
import WorkplaceSorter from '../../Components/Workplaces/WorkplaceSorter'
import NewWorkplace from '../../Components/Workplaces/NewWorkplace'
import EditWorkplace from '../../Components/Workplaces/EditWorkplace'
import NewWorker from '../../Components/Workers/NewWorker'

const WorkPlaceList = observer(() => {
  const [newWorkplace, setNewWorkplace] = useState(false)
  const [newWorker, setNewWorker] = useState(false)
  const [editWorkplace, setEditWorkplace] = useState(false)

  const newHandler = () => {
    newWorkplace ? setNewWorkplace(false) : setNewWorkplace(true)
  }

  const newWorkerHandler = () => {
    newWorker ? setNewWorker(false) : setNewWorker(true)
  }

  const editHandler = () => {
    editWorkplace ? setEditWorkplace(false) : setEditWorkplace(true)
  }

  return (
    <div className="main-container__list">
      <div />
        <div className="container">
          { WorkPlaceStore.newChecked ? <p className="alert-success">Radnik je uspješno dodan!</p> : null }
          { WorkPlaceStore.editChecked ? <p className="alert-info">Radno mjesto je uspješno uređeno!</p> : null }
          { WorkPlaceStore.newCheckedWP ? <p className="alert-success">Radno mjesto je uspješno dodano!</p> : null }
          { WorkPlaceStore.deletedChecked ? <p className="alert-warning">Radno mjesto je uspješno obrisano!</p> : null }
          <h2>Popis radnih mjesta</h2>
          <div className="btn-wrapper">
            <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
          </div>
          <div className="btn-wrapper">
            <Link to="/workers"><button className="btn-secondary">Lista svih radnika</button></Link>
            <button className="btn-primary" onClick={newHandler}><img src={New} alt="New" />Dodaj radno mjesto</button>
            <button className="btn-undo" onClick={WorkPlaceStore.filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
            <WorkplaceSorter />
          </div>
          { WorkPlaceStore.filter ? <WorkplaceFilter /> : null }
          { newWorkplace ? <NewWorkplace /> : null }
          { WorkPlaceStore.workPlaces.map((workplace) => (
            <ul className="card" key={workplace.docId}>
              <li className="card-item">{workplace.name}</li>
              <hr />
              <li className="card-item">{workplace.descr}</li>
              <li className="card-item">{workplace.salary} Kn (neto)</li>
              <div className="btn-wrapper">
                  <button className="btn-primary" onClick={newWorkerHandler}>
                    <img src={New} alt="new" />Dodaj radnika
                  </button>
                  <button onClick={() => WorkPlaceStore.deleteWorkplace(workplace.docId)} className="btn-red">
                    <img src={Delete} alt="Delete" />Obriši
                  </button>
                  <button className="btn-secondary" onClick={editHandler}><img src={Edit} alt="Edit" />Uredi</button>
              </div>
              { editWorkplace ? <EditWorkplace 
                state={{
                  docId: workplace.docId,
                  name: workplace.name,
                  employees: workplace.employees,
                  descr: workplace.descr,
                  salary: workplace.salary
                }} /> : null}
              { newWorker ? <NewWorker state={{ docId: workplace.docId, name: workplace.name }} /> : null}
            </ul>
          ))} 
        <div className="btn-wrapper--center">
          { WorkPlaceStore.prevLength < 6 ? null : <button className="btn-link" onClick={WorkPlaceStore.prevPage}>Prethodno</button> }
          { WorkPlaceStore.nextLength < 6 ? null : <button className="btn-link" onClick={WorkPlaceStore.nextPage}>Slijedeće</button> }
        </div>  
        </div>
      <div />
    </div>
  )
})

export default WorkPlaceList
