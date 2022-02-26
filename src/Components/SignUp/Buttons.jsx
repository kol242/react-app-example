import { observer } from 'mobx-react'
import React from 'react'

const Buttons = observer(({ form }) => {
  return (
        <div className="btn-wrapper">
            <button type='submit' onClick={form.onSubmit} className="btn-success">Sign Up</button>
        </div>
  )
})

export default Buttons;
