import { observer } from 'mobx-react'
import React from 'react'
import EditStore from '../../../Stores/Workers/EditStore'

const Buttons = observer(({ form }) => {
  return (
    <div className="btn-wrapper">
        <button type='submit' onClick={form.onSubmit}>Save changes</button>
        <button type="button" className="btn-undo" onClick={form.onClear}>Refresh</button>
        <button className="btn-red" onClick={EditStore.editModalHandler}>Cancel</button> 
    </div>
  )
})

export default Buttons
