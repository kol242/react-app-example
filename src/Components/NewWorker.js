import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../Stores/WorkerStore'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'

const NewWorker = observer(() => {
    let data = {
        docId: null,
        name: "",
        lastName: "",
        age: null,
        salary: null,
        workPlace: ""
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            docId: "",
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: e.target.workerAge.value,
            salary: e.target.workerSalary.value,
            workPlace: e.target.workerPlace.value
        }
        WorkerStore.createWorker(data)
    }
    return (
        <div>
        <h3>Novi radnik</h3>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Ime...'
            required
            name="workerName"
            />
            <br />
            <input 
            type="text"
            placeholder='Prezime...'
            required
            name="workerLastName"
            />
            <br />
            <input 
            type="number"
            placeholder='Dob...'
            required
            name="workerAge"
            />
            <br />
            <input 
            type="number"
            placeholder='Plaća...'
            required
            name="workerSalary"
            />
            <br />
            <select name="workerPlace">
            {WorkPlaceStore.workPlaces.map((work) => (
                <option value={work.name}>{work.name}</option>
            ))}
            </select>
            <br />
            <br />
            <Link to="/">Natrag</Link>
        <button type='submit'>Dodaj</button>
        </form>
            
        </div>
    )
})

export default NewWorker