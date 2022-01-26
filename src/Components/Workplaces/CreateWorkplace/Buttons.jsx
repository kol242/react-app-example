import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'

const Buttons = observer(({ form }) => {
  return (
    <div className="btn-wrapper">
        <button type='submit' onClick={form.onSubmit}>Dodaj</button>
        <button type="button" className="btn-undo" onClick={form.onClear}>Osvježi</button>
        <button className="btn-red" onClick={WpCreateStore.createModalHandler}>Odustani</button>
    </div>
  )
})

export default Buttons
