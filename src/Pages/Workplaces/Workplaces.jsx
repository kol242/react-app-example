import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
// styles
import '../../Common/style/list.scss'
import New from '../../Common/images/plus.png'
import Filter from '../../Common/images/filter.png'
// components
import WorkplaceFilter from '../Workplaces/FilterWorkplace/WorkplaceFilter'
import WorkplaceSorter from '../../Components/Workplaces/SortWorkplaces/WorkplaceSorter'
import NewWorkplace from '../Workplaces/CreateWorkplace/NewWorkplace'
import AlertPanel from '../../Components/AlertPanel/AlertPanel'
import Pagination from '../../Components/Workplaces/Pagination/Pagination'
import List from '../../Components/Workplaces/List'

const WorkPlaceList = observer(() => {
  return (
    <div className="main-container__list">
      <div />
        <div className="container">
          <AlertPanel />
          <h2>Popis radnih mjesta</h2>
          <div className="btn-wrapper">
            <Link to="/"><button className="btn-link">Natrag na početnu</button></Link>
          </div>
          <div className="btn-wrapper">
            <Link to="/workers"><button className="btn-secondary">Lista svih radnika</button></Link>
            <button className="btn-primary" onClick={WorkPlaceStore.newHandler}><img src={New} alt="New" />Dodaj radno mjesto</button>
            <button className="btn-undo" onClick={WorkPlaceStore.filterHandler}><img src={Filter} alt="Filter" />Filtriraj</button>
            <WorkplaceSorter />
          </div>
          { WorkPlaceStore.filter ? <WorkplaceFilter /> : null }
          { WorkPlaceStore.newWorkplace ? <NewWorkplace /> : null }
          { WorkPlaceStore.workPlaces.map((workplace) => (
            <List 
              id={workplace.docId}
              name={workplace.name}
              descr={workplace.descr}
              salary={workplace.salary}
            />
          ))} 
        <div className="btn-wrapper--center">
          <Pagination />
        </div>  
        </div>
      <div />
    </div>
  )
})

export default WorkPlaceList
