import { observer } from 'mobx-react-lite'
import React from 'react'

const Contract = observer(() => {
    return (
        <div>
            <select name="contractType" id="contractType">
                <option>Neodređeno</option>
                <option>Određeno</option>
            </select>
        </div>
    )
})

export default Contract
