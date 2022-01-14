import { observer } from 'mobx-react'
import React from 'react'

const Name = observer(({ defaultValue }) => {
    return (
        <div>
            <input 
                type="text"
                defaultValue={defaultValue()}
                name="workName"
            />
        </div>
    )
})

export default Name
