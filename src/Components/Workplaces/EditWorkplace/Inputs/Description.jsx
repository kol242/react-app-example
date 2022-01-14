import { observer } from 'mobx-react'
import React from 'react'

const Description = observer(({ defaultValue }) => {
    return (
        <div>
          <textarea 
                type="text"
                rows="3"
                cols="21"
                defaultValue={defaultValue()}
                name="workDescr"
            />  
        </div>
    )
})

export default Description
