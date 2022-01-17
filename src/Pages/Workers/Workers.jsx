import React from 'react'
import { observer } from 'mobx-react'
import WorkerStore from '../../Stores/Workers/WorkerStore'
import FilterStore from '../../Stores/Workers/FilterStore'
// styles
import '../../Common/style/list.scss'
// components
import WorkerFilter from '../Workers/FilterWorker/WorkerFilter'
import List from '../../Components/Workers/List'
import AlertPanel from '../../Components/AlertPanel/AlertPanel'
import Pagination from '../../Components/Workers/Pagination/Pagination'
import Links from '../../Components/Workers/Links/Links'
import Modals from '../../Components/Workers/Modals'


const WorkersList = observer(() => {
  return (
    <div className="main-container__list">
      <Modals />
      <div/>
      <div className="container">
        <AlertPanel />
        <h2>Popis radnika</h2>
        <Links />
        { FilterStore.filter ? <WorkerFilter /> : null }
        { WorkerStore.workers.map((worker) => (
          <List key={worker.docId}
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
