import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link, useNavigate } from 'react-router-dom'

const NewWorkplace = observer(() => {
    let navigate = useNavigate()
    let data = {
        docId: null,
        name: "",
        descr: "",
        salary: null,
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            docId: "",
            name: e.target.workName.value,
            descr: e.target.workDescr.value,
            salary: Number(e.target.workSalary.value),
        }
        WorkPlaceStore.createWorkplace(data)
        navigate('/workplaces')
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