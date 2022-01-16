import React from 'react'
import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/Workers/WorkerStore'
import DeleteStore from '../../Stores/Workers/DeleteStore'
import FilterStore from '../../Stores/Workers/FilterStore'
import EditStore from '../../Stores/Workers/EditStore'
import { Link } from 'react-router-dom'
// styles
import '../../Common/style/list.scss'
import Filter from '../../Common/images/filter.png'
// components
import WorkerSorter from '../../Components/Workers/SortWorker/WorkerSorter'
import WorkerFilter from '../Workers/FilterWorker/WorkerFilter'
import List from '../../Components/Workers/List'
import AlertPanel from '../../Components/AlertPanel/AlertPanel'
import Pagination from '../../Components/Workers/Pagination/Pagination'
import DeleteModal from '../../Components/Workers/Modals/DeleteModal'
import EditModal from '../../Components/Workers/Modals/EditModal'


const WorkersList = observer(() => {
  return (
    <div className="main-container__list">
      { DeleteStore.deleteModal ? <DeleteModal /> : null }
      { EditStore.editModal ? <EditModal /> : null }
      <div/>
      <div className="container">
        <AlertPanel />
        <h2>Popis radnika</h2>
        <div className="btn-wrapper">
          <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/workplaces"><button className="btn-secondary">Popis radnih mjesta</button></Link>
          <button className="btn-undo" onClick={FilterStore.filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
          <WorkerSorter />
        </div>
        { FilterStore.filter ? <WorkerFilter /> : null }
        { WorkerStore.workers.map((worker) => (
          <List 
            lastName={worker.lastName}
            id={worker.docId}
            name={worker.name}
            age={worker.age}
            salary={worker.salary}
            workplace={worker.workPlace}
            contract={worker.contract}
          />
        ))}
        <Pagination />
      </div>
      <div/>
    </div>
  );
})

export default WorkersList
