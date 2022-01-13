import React from 'react'

const LastName = () => {
    return (
        <div>
            <input 
                type="text"
                placeholder='Prezime...'
                required
                name="workerLastName"
                id="workerLastName"
            />
        </div>
    )
}

export default LastName
