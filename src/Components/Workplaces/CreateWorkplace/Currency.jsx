import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'

const Contract = observer(({ field }) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label> 
            <select {...field.bind()}>
                <option defaultValue>Select...</option>
                {WorkPlaceStore.currencies.map(option => 
                    <option key={option} value={option}>{option}</option>)} 
            </select>
        </div>
    )
})

export default Contract
