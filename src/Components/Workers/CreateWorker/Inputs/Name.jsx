import React from 'react'

const Name = () => {
    return (
        <div>   
            <input 
                type="text"
                placeholder='Ime...'
                required
                name="workerName"
                id="workerName"
            />
        </div>
    )
}

export default Name
