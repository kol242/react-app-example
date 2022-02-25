import { observer } from 'mobx-react'
import React from 'react'
import WpEditStore from '../../../Stores/Workplaces/WpEditStore'

const Buttons = observer(({ form }) => {
  return (
    <div className="btn-wrapper">
        <button type='submit' onClick={form.onSubmit}>Save changes</button>
        <button type="button" className="btn-undo" onClick={form.onClear}>Refresh</button>
        <button className="btn-red" onClick={WpEditStore.editModalHandler}>Cancel</button>
    </div>
  )
})

export default Buttons;
