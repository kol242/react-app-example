import React from 'react'

const Contract = () => {
    return (
        <div>
            <select defaultValue={'default'} name="contractType" id="contractType">
                <option key='default2' value='default' disabled>Type of contract...</option>
                <option key="Neodređeno">Neodređeno</option>
                <option key="Određeno">Određeno</option>
            </select>
        </div>
    )
}

export default Contract
