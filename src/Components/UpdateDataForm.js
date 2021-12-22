import { observer } from 'mobx-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import WorkerStore from '../Stores/WorkerStore'

const UpdateDataForm = observer(() => {
    const location = useLocation()
    const currentData = location.state
    let data = {
        docId: null,
        name: "",
        lastName: "",
        age: null,
        salary: null,
        workPlace: ""
    }
    const submitUpdate = (e) => {
        e.preventDefault()
        data = {
            docId: currentData.docId,
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: e.target.workerAge.value,
            salary: e.target.workerSalary.value,
            workPlace: e.target.workerPlace.value
        }
        WorkerStore.updateWorker(data)
    }
    return (
        <div>
        <h2>Uređivanje</h2>
        <form onSubmit={submitUpdate}>
            <input 
            type="text"
            placeholder={currentData.name}
            required
            name="workerName"
            />
            <br />
            <input 
            type="text"
            placeholder={currentData.lastName}
            required
            name="workerLastName"
            />
            <br />
            <input 
            type="number"
            placeholder={currentData.age}
            required
            name="workerAge"
            />
            <br />
            <input 
            type="number"
            placeholder={currentData.salary}
            required
            name="workerSalary"
            />
            <br />
            <input 
            type="text"
            placeholder={currentData.workPlace}
            required
            name="workerPlace"
            />
        <br />
        <Link to="/">Natrag</Link>
        <button type='submit'>Spremi promjene</button>
        </form>
            
        </div>
    )
})

export default UpdateDataForm