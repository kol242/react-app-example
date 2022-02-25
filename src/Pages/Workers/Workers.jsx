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
import WorkerStore from '../../Stores/Workers/WorkerStore'
import WorkerSorter from '../../Components/Workers/Sorter/WorkerSorter'

const WorkersList = observer(() => {
  return (
    <div className="main-container__list">
      <Modals />
      <div className="container">
        <h2>List of workers</h2>
        <div className="btn-wrapper">
          <Links /> 
          <WorkerSorter />
        </div>
        { FilterStore.filter ? <WorkerFilter /> : null }
        <DataList id='docId' dataset={WorkerStore} items={WorkerStore.items}
          render={item => <WorkerList
            id={item.docId} 
            name={item.name}
            lastName={item.lastName}
            age={item.age}
            workplace={item.workPlace}
            salary={item.salary}
            contract={item.contract}
            currency={item.currency} />
          } />
      </div>
    </div>  
  );
})

export default WorkersList
