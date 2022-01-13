import { observer } from 'mobx-react'
import React from 'react'

const Age = observer(({age}) => {
    return (
        <div>
            <input 
                type="number"
                defaultValue={age}
                required
                name="workerAge"
            />
        </div>
    )
})

export default Age
