import { observer } from 'mobx-react'
import React from 'react'
import Pagination from './Pagination'

const DataList = observer(({ items, id, render, dataset }) => {
  return (
    <>
        { items.length === 0 ? <p id="alert">No data to show!</p> : 
          <ul className="card-list">
            {items.map((item) => (
                <li key={item[id]} className="card">{render(item)}</li>
            ))}
          </ul>
        }
        { items.length === 0 ? null : <Pagination dataset={dataset}/> }
    </>
  )
})

export default DataList
