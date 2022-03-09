import { observer } from 'mobx-react'
import React from 'react'
import WpEditStore from '../../../Stores/Workplaces/WpEditStore'

const Header = observer(() => {
  return (
      <>
        <p>{WpEditStore.currentWorkplace.name}</p>
        <p>{WpEditStore.currentWorkplace.description}</p>
      </>
  );
})

export default Header
