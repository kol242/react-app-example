import { observer } from 'mobx-react'
import React from 'react'
import EditStore from '../../../Stores/Workers/EditStore'

const Header = observer(() => {
  return (
    <>
        <p>{EditStore.currentWorker.name} {EditStore.currentWorker.lastName},{EditStore.currentWorker.age}</p>
        <p>{EditStore.currentWorker.workPlace}</p>
    </>
  )
})

export default Header
