import { observer } from 'mobx-react'
import React from 'react'

const LastName = observer(({lastName}) => {
    return (
        <div>
            <input 
                type="text"
                defaultValue={lastName}
                required
                name="workerLastName"
            />
        </div>
    )
})

export default LastName
