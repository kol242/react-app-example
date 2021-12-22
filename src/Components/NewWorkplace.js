import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'

const NewWorkplace = observer(() => {
    let data = {
        docId: null,
        name: "",
        employees: "",
        descr: "",
        salary: null,
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            docId: "",
            name: e.target.workName.value,
            employees: e.target.workEmpl.value,
            descr: e.target.workDescr.value,
            salary: e.target.workSalary.value,
        }
        WorkPlaceStore.createWorkplace(data)
    }
    return (
        <div>
        <h3>Novo radno mjesto</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Naziv...'
            required
            name="workName"
            />
            <br />
            <input 
            type="number"
            placeholder='Broj zaposlenih'
            required
            name="workEmpl"
            />
            <br />
            <textarea 
            type="text"
            rows="3"
            cols="21"
            placeholder='Opis...'
            required
            name="workDescr"
            />
            <br />
            <input 
            type="number"
            placeholder='Plaća...'
            required
            name="workSalary"
            />
            <br />
            <Link to="/workplaces">Natrag</Link>
        <button type='submit'>Dodaj</button>
        </form>
            
        </div>
    )
})

export default NewWorkplace