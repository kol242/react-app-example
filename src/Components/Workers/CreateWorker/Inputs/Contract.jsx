import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../../Stores/Workers/CreateStore'

const Contract = observer(({ field }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label>
            <select {...field.bind()}>
                <option defaultValue>Select...</option>
                {CreateStore.contracts.map(option => 
                    <option key={option} value={option}>{option}</option>)} 
            </select>
        </div>
    )
})

export default Contract
