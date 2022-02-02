import { observer } from 'mobx-react'
import WpFilterStore from '../../Stores/Workplaces/WpFilterStore'
// styles
import '../../Common/style/list.scss'
// components
import WorkplaceFilter from '../Workplaces/FilterWorkplace/WorkplaceFilter'
import Links from '../../Components/Workplaces/Links/Links'
import Modals from '../../Components/Workplaces/Modals'
import DataList from '../../Components/DataList'
import DataListViewStore from '../../Stores/DataListViewStore'
import WorkplaceList from '../../Components/Workplaces/WorkplaceList'

const WorkPlaceList = observer(() => {
  return (
    <div className="main-container__list">
      <Modals />
      <div />
      <div className="container">
        <h2>Popis radnih mjesta</h2>
        <Links />
        { WpFilterStore.filter ? <WorkplaceFilter /> : null }
        <DataList id='docId' dataset='workplaces' items={DataListViewStore.fetchFunc('workplaces')}
          render={item => <WorkplaceList
            id={item.docId} 
            name={item.name}
            description={item.descr}
            salary={item.salary} />
          } />  
      </div>
      <div />
    </div>
  )
})

export default WorkPlaceList
