import { observer } from 'mobx-react'
import React from 'react'

const Name = observer(({name}) => {
    return (
        <div>
            <input 
                type="text"
                defaultValue={name}
                required
                name="workerName"
            />
        </div>
    )
})

export default Name
