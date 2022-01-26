import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../../Stores/Workers/CreateStore'

const Contract = observer(({ field }) => {
    return (
        <div>
            <select {...field.bind()}>
                {CreateStore.contracts.map(option => 
                    <option key={option} value={option}>{option}</option>)} 
            </select>
        </div>
    )
})

export default Contract
