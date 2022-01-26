import { observer } from 'mobx-react'
import WorkPlaceStore from '../../Stores/Workplaces/WorkPlaceStore'
import WpFilterStore from '../../Stores/Workplaces/WpFilterStore'
// styles
import '../../Common/style/list.scss'
// components
import WorkplaceFilter from '../Workplaces/FilterWorkplace/WorkplaceFilter'
import Pagination from '../../Components/Workplaces/Pagination/Pagination'
import List from '../../Components/Workplaces/List'
import Links from '../../Components/Workplaces/Links/Links'
import Modals from '../../Components/Workplaces/Modals'

const WorkPlaceList = observer(() => {
  return (
    <div className="main-container__list">
      <Modals />
      <div />
      <div className="container">
        <h2>Popis radnih mjesta</h2>
        <Links />
        { WpFilterStore.filter ? <WorkplaceFilter /> : null }
        { WorkPlaceStore.workPlaces.map((workplace) => (
          <List
            key={workplace.docId} 
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
