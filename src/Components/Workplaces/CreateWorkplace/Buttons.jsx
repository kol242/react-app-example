import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'

const Buttons = observer(({ form }) => {
  return (
    <div className="btn-wrapper">
        <button type='submit' onClick={form.onSubmit}>Add</button>
        <button type="button" className="btn-undo" onClick={form.onClear}>Refresh</button>
        <button className="btn-red" onClick={WpCreateStore.createModalHandler}>Cancel</button>
    </div>
  )
})

export default Buttons
