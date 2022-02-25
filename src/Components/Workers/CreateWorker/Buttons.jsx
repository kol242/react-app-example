import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../Stores/Workers/CreateStore'

const Buttons = observer(({ form }) => {
  return (
        <div className="btn-wrapper">
            <button type='submit' onClick={form.onSubmit} className="btn-success">Add</button>
            <button type="button" className="btn-undo" onClick={form.onClear}>Refresh</button>
            <button className="btn-red" onClick={CreateStore.createModalHandler}>Cancel</button>
        </div>
  )
})

export default Buttons;
