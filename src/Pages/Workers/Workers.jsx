import React from 'react'
import { observer } from 'mobx-react'
import FilterStore from '../../Stores/Workers/FilterStore'
// styles
import '../../Common/style/list.scss'
// components
import WorkerFilter from '../Workers/FilterWorker/WorkerFilter'
import Links from '../../Components/Workers/Links/Links'
import Modals from '../../Components/Workers/Modals'
import DataList from '../../Components/DataList'
import WorkerList from '../../Components/Workers/WorkerList'
import DataListViewStore from '../../Stores/DataListViewStore'

const WorkersList = observer(() => {
  return (
    <div className="main-container__list">
      <Modals />
      <div/>
      <div className="container">
        <h2>Popis radnika</h2>
        <Links />
        { FilterStore.filter ? <WorkerFilter /> : null }
        <DataList id='docId' dataset='workers' items={DataListViewStore.fetchFunc('workers')}
          render={item => <WorkerList
            id={item.docId} 
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            workplace={item.workPlace}
            salary={item.salary}
            contract={item.contract} />
          } />
      </div>
      <div/>
    </div>
  );
})

export default WorkersList
