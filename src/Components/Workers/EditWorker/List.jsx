import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'

const List = observer(({field}) => {
    return (
        <div className="input-wrapper">
            <label htmlFor={field.name}>{field.label}</label>
            <select {...field.bind()}>
                {WorkPlaceStore.names.map((option) => (
                    <option key={option.id} value={option.name}>{option.name}</option>
                ))}
            </select> 
        </div>
    )
})

export default List
