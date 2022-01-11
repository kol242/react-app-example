import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/WorkerStore'
import { Link } from 'react-router-dom'

import '../../Common/style/list.scss'
import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'
import Filter from '../../Common/images/filter.png'
import React from 'react'

import WorkerSorter from '../../Components/Workers/WorkerSorter'
import WorkerFilter from '../../Components/Workers/WorkerFilter'
import EditWorker from '../../Components/Workers/EditWorker'

const WorkersList = observer(() => {
  return (
    <div className="main-container__list">
      <div/>
      <div className="container">
        { WorkerStore.isEdited ? <p className="alert-info">Radnik je uspješno uređen!</p> : null }
        { WorkerStore.isDeleted ? <p className="alert-warning">Radnik je uspješno obrisan!</p> : null }
        <h2>Popis radnika</h2>
        <div className="btn-wrapper">
          <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/workplaces"><button className="btn-secondary">Lista radnih mjesta</button></Link>
          <button className="btn-undo" onClick={WorkerStore.filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
          <WorkerSorter />
        </div>
        { WorkerStore.filter ? <WorkerFilter /> : null }
        { WorkerStore.workers.map((worker) => (
          <ul className="card"  key={worker.docId}>
            <li className="card-item">{worker.lastName} {worker.name}, {worker.age}</li>
            <hr />
            <li className="card-item">{worker.salary} Kn (neto)</li>
            <li className="card-item">{worker.workPlace}</li>
            <li className="card-item">{worker.contract}</li>
            <div className="btn-wrapper">
              <button onClick={() => WorkerStore.deleteWorker(worker.docId)} className="btn-red">
                <img src={Delete} alt="Delete" />Obriši
              </button>
              <button className="btn-secondary" onClick={WorkerStore.editWorkerHandler}>
                <img src={Edit} alt="Edit" />Uredi
              </button>
            </div>
            { WorkerStore.editWorker ? <EditWorker
              state={{
                docId: worker.docId, 
                name: worker.name,
                lastName: worker.lastName,
                age: worker.age,
                salary: worker.salary,
                workPlace: worker.workPlace,
                contract: worker.contract
                }} /> : null }
          </ul>
        ))}
        <div className="btn-wrapper--center">
          { WorkerStore.prevLength < 6 ? null : <button className="btn-link" onClick={WorkerStore.prevPage}>Prethodno</button> }
          { WorkerStore.nextLength < 6 ? null : <button className="btn-link" onClick={WorkerStore.nextPage}>Slijedeće</button> }
        </div>   
      </div>
      <div/>
    </div>
  );
})

export default WorkersList
