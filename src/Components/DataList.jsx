import { observer } from 'mobx-react'
import React from 'react'
import Pagination from './Workers/Pagination/Pagination'
import WorkerSorter from './Workers/SortWorker/WorkerSorter'

const DataList = observer(({ items, id, render, dataset }) => {
  return (
    <>
        <WorkerSorter className="sorter" dataset={dataset}/>
        <ul className="card-list">
            {items.map((item) => (
                <li key={item[id]} className="card">{render(item)}</li>
            ))}
        </ul>
        <Pagination dataset={dataset}/>
    </>
  )
})

export default DataList
