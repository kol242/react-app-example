import { observer } from 'mobx-react'
import React from 'react'
import Pagination from './Pagination'
import Sorter from './Sorter'

const DataList = observer(({ items, id, render, dataset, sorter }) => {
  return (
    <>
        <Sorter className="sorter" sorter={sorter}/>
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
