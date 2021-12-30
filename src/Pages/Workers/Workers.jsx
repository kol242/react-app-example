import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/WorkerStore'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Pagination from '../../Components/Pagination'

import '../../Common/style/list.scss'
import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'
import Filter from '../../Common/images/filter.png'

import WorkerSorter from '../../Components/Workers/WorkerSorter'
import WorkerFilter from '../../Components/Workers/WorkerFilter'
import EditWorker from '../../Components/Workers/EditWorker'

const WorkersList = observer(() => {
  const [filter, setFilter] = useState(false)
  const [editWorker, setEditWorker] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const filterHandler = () => {
    filter ? setFilter(false) : setFilter(true)
  }

  const editWorkerHandler = () => {
    editWorker ? setEditWorker(false) : setEditWorker(true)
  }

  const deleteSelectedWorker = (id) => {
      WorkerStore.deleteWorker(id)
      WorkerStore.deleteChecker()
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = WorkerStore.workers.slice(indexOfFirstItem, indexOfLastItem);
  const currentPosts2 = WorkerStore.searchedWorkers.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="main-container__list">
      <div/>
      <div className="container">
        { WorkerStore.editChecked ? <p className="alert-info">Radnik je uspješno uređen!</p> : null }
        { WorkerStore.deletedChecked ? <p className="alert-warning">Radnik je uspješno obrisan!</p> : null }
        <h2>Popis radnika</h2>
        <div className="btn-wrapper">
          <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/workplaces"><button className="btn-secondary">Lista radnih mjesta</button></Link>
          <button className="btn-undo" onClick={filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
          <WorkerSorter />
        </div>
        { filter ? <WorkerFilter /> : null }
        { (filter ? currentPosts2 : currentPosts).map((worker) => (
          <ul className="card">
            <li className="card-item">{worker.name} {worker.lastName}, {worker.age}</li>
            <hr />
            <li className="card-item">{worker.salary} Kn (neto)</li>
            <li className="card-item">{worker.workPlace}</li>
            <li className="card-item">{worker.contract}</li>
            <div className="btn-wrapper">
              <button onClick={() => deleteSelectedWorker(worker.docId)} className="btn-red">
                <img src={Delete} alt="Delete" />Obriši
              </button>
              <button className="btn-secondary" onClick={editWorkerHandler}>
                <img src={Edit} alt="Edit" />Uredi
              </button>
            </div>
            { editWorker ? <EditWorker
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
        <Pagination 
          itemsPerPage={itemsPerPage}
          totalItems={WorkerStore.workers.length}
          totalSearchedItems={WorkerStore.searchedWorkers.length}
          paginate={paginate}
        />  
      </div>
      <div/>
    </div>
  );
})

export default WorkersList
