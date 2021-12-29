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
import Pagination from '../../Components/Pagination'

const WorkPlaceList = observer(() => {
  const [filter, setFilter] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)

  const filterHandler = () => {
    filter ? setFilter(false) : setFilter(true)
  }

  const deleteSelectedWorkplace = (id) => {
    WorkPlaceStore.deleteWorkplace(id)
  }
  
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentPosts = WorkPlaceStore.workPlaces.slice(indexOfFirstItem, indexOfLastItem)
  const currentPosts2 = WorkPlaceStore.searchedWorkplaces.slice(indexOfFirstItem, indexOfLastItem)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="container">
      <h2>Popis radnih mjesta</h2>
      <div className="btn-wrapper">
        <Link to="/new-workplace"><button className="btn-primary"><img src={New} alt="New" />Dodaj radno mjesto</button></Link>
        <Link to="/workers"><button className="btn-secondary">Lista svih radnika</button></Link>
        <button className="btn-primary" onClick={filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
        <WorkplaceSorter />
      </div>
      { filter ? <WorkplaceFilter /> : null }
      { filter ? currentPosts2.map((workplace) => (
        <ul className="card" key={workplace.docId}>
          <li className="card-item">{workplace.name}</li>
          <hr />
          <li className="card-item">{workplace.descr}</li>
          <li className="card-item">{workplace.salary} Kn (neto)</li>
          <div className="btn-wrapper">
            <Link to="/new-worker" state={{ docId: workplace.docId, name: workplace.name }}>
              <button className="btn-primary"><img src={New} alt="new" />Dodaj radnika</button>
            </Link>
              <button onClick={() => deleteSelectedWorkplace(workplace.docId)} className="btn-red"><img src={Delete} alt="Delete" />Obriši</button>
            <Link to='/edit-workplace'
              state={{
                docId: workplace.docId,
                name: workplace.name,
                employees: workplace.employees,
                descr: workplace.descr,
                salary: workplace.salary
              }}>
              <button className="btn-secondary"><img src={Edit} alt="Edit" />Uredi</button></Link>
          </div>
        </ul>
      )) : currentPosts.map((workplace) => (
        <ul className="card" key={workplace.docId}>
          <li className="card-item">{workplace.name}</li>
          <hr />
          <li className="card-item">{workplace.descr}</li>
          <li className="card-item">{workplace.salary} Kn (neto)</li>
          <div className="btn-wrapper">
            <Link to="/new-worker" state={{ docId: workplace.docId, name: workplace.name }}>
              <button className="btn-primary"><img src={New} alt="new" />Dodaj radnika</button>
            </Link>
              <button onClick={() => deleteSelectedWorkplace(workplace.docId)} className="btn-red"><img src={Delete} alt="Delete" />Obriši</button>
            <Link to='/edit-workplace'
              state={{
                docId: workplace.docId,
                name: workplace.name,
                employees: workplace.employees,
                descr: workplace.descr,
                salary: workplace.salary
              }}>
              <button className="btn-secondary"><img src={Edit} alt="Edit" />Uredi</button></Link>
          </div>
          
        </ul>
        ))   
      } 
      <Pagination 
      itemsPerPage={itemsPerPage}
      totalItems={WorkPlaceStore.workPlaces.length}
      totalSearchedItems={WorkPlaceStore.searchedWorkplaces.length}
      paginate={paginate}
      /> 
    </div>
  )
})

export default WorkPlaceList
