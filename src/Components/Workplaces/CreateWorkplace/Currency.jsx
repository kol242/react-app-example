import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'

const Contract = observer(({ field }) => {
    return (
        <div>
            <select {...field.bind()}>
                <option defaultValue>Currency...</option>
                {WpCreateStore.currencies.map(option => 
                    <option key={option} value={option}>{option}</option>)} 
            </select>
        </div>
    )
})

export default Contract
