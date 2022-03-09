import { observer } from 'mobx-react'
import React from 'react'

const Input = observer(({ field, type, data }) => {
    return (
        <div className="signup-form__input">
            <label htmlFor={field.name}>{field.label}</label>  
            <input 
                {...field.bind({ type }) }
                name={field.name}
                placeholder={data}
            />
            <p className="input-error">{field.error}</p>
        </div>
    )
})

export default Input

