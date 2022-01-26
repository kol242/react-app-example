import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../Stores/Workers/CreateStore'

const Header = observer(() => {
  return (
    <>
        <p>{CreateStore.workplaceData.name}</p>
        <p>{CreateStore.workplaceData.salary} kn</p>
    </>
  )
})

export default Header;
