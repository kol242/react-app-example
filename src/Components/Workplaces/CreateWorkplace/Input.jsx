import { observer } from 'mobx-react'
import React from 'react'

const Input = observer(({ field, type, placeholder }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label>   
            <input 
                {...field.bind({ type, placeholder }) }
                name={field.name}
            />
            <p className="input-error">{field.error}</p>
        </div>
    )
})

export default Input

