import React from 'react'

const Description = () => {
    return (
        <div>
            <textarea 
                type="text"
                rows="3"
                cols="21"
                placeholder='Opis...'
                required
                name="workDescr"
            />
        </div>
    )
}

export default Description
