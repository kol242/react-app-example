import { observer } from 'mobx-react'
import React from 'react'
import PhoneStore from '../Stores/Store'

const NewDataForm = observer(() => {
    let data = {
        docId: null,
        name: ""
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            docId: "",
            name: e.target.phoneName.value
        }
        PhoneStore.createPhone(data)
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Name...'
            required
            name="phoneName"
            />
        <button type='submit'>Add New Phone</button>
        </form>
            
        </div>
    )
})

export default NewDataForm