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

const WorkersList = observer(() => {
  const [filter, setFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const filterHandler = () => {
    filter ? setFilter(false) : setFilter(true)
  }

  const deleteSelectedWorker = (id) => {
      WorkerStore.deleteWorker(id)
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = WorkerStore.workers.slice(indexOfFirstItem, indexOfLastItem);
  const currentPosts2 = WorkerStore.searchedWorkers.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1>Popis radnika</h1>
      <div className="btn-wrapper">
      <Link to="/workplaces"><button className="btn-primary">Radna mjesta</button></Link>
      <button className="btn-secondary" onClick={filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
      <WorkerSorter />
      </div>
      { filter ? <WorkerFilter /> : null }
      { filter ? currentPosts2.map((worker) => (
        <ul className="card">
          <li className="card-item">{worker.name} {worker.lastName}, {worker.age}</li>
          <hr />
          <li className="card-item">{worker.salary} Kn (neto)</li>
          <li className="card-item">{worker.workPlace}</li>
          <li className="card-item">{worker.contract}</li>
          <div className="btn-wrapper">
            <button onClick={() => deleteSelectedWorker(worker.docId)} className="btn-red"><img src={Delete} alt="Delete" />Obriši</button>
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
              <button className="btn-secondary"><img src={Edit} alt="Edit" />Uredi</button></Link>
          </div>
        </ul>
      )) :  currentPosts.map((worker) => (
      <ul className="card">
        <li className="card-item">{worker.name} {worker.lastName}, {worker.age}</li>
        <hr />
        <li className="card-item">{worker.salary} Kn (neto)</li>
        <li className="card-item">{worker.workPlace}</li>
        <li className="card-item">{worker.contract}</li>
        <div className="btn-wrapper">
            <button onClick={() => deleteSelectedWorker(worker.docId)} className="btn-red"><img src={Delete} alt="Delete" />Obriši</button>
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
              <button className="btn-secondary"><img src={Edit} alt="Edit" />Uredi</button></Link>
          </div> 
      </ul>
      ))}   
      <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={WorkerStore.workers.length}
        totalSearchedItems={WorkerStore.searchedWorkers.length}
        paginate={paginate}
      />  
    </div>
  );
})

export default WorkersList
