import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'

const Contract = observer(({ field }) => {
    return (
        <div>
            <select {...field.bind()}>
                <option defaultValue>Currency...</option>
                {WorkPlaceStore.currencies.map(option => 
                    <option key={option} value={option}>{option}</option>)} 
            </select>
        </div>
    )
})

export default Contract
