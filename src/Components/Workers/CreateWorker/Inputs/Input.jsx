import { observer } from 'mobx-react'
import React from 'react'

const Input = observer(({ field, type, placeholder }) => {
    return (
        <div>  
            <input 
                {...field.bind({ type, placeholder }) }
                name={field.name}
            />
            <br />
            <p className="input-error">{field.error}</p>
        </div>
    )
})

export default Input

