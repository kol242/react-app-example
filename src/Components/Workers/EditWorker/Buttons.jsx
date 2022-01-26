import { observer } from 'mobx-react'
import React from 'react'
import EditStore from '../../../Stores/Workers/EditStore'

const Buttons = observer(({ form }) => {
  return (
    <div className="btn-wrapper">
        <button type='submit' onClick={form.onSubmit}>Spremi promjene</button>
        <button type="button" className="btn-undo" onClick={form.onClear}>Osvježi</button>
        <button className="btn-red" onClick={EditStore.editModalHandler}>Odustani</button> 
    </div>
  )
})

export default Buttons
