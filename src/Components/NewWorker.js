import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../Stores/WorkerStore'
import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link } from 'react-router-dom'

import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../firebase-config'

const NewWorker = observer(() => {
    let data = {
        docId: null,
        name: "",
        lastName: "",
        age: null,
        salary: null,
        workPlace: ""
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const docData = e.target.workerPlace.value
        const q = query(collection(db, "WorkPlaces"), where("Naziv", "==", docData))
        const temp = await getDocs(q)
        data = {
            docId: "",
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: e.target.workerAge.value,
            workPlace: e.target.workerPlace.value,
            salary: null
        }
        temp.forEach(doc => data.salary = doc.data().Placa)
        WorkerStore.createWorker(data)
    }
    return (
        <div class="container w-50">
        <h3>Novi radnik</h3>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
            <label for="workerName" class="form-label">Unesite Ime...</label>    
                <input 
                type="text"
                placeholder='Ime...'
                required
                name="workerName"
                id="workerName"
                class="form-control"
                />
            </div>
            <div class="mb-3">
            <label for="workerLastName" class="form-label">Unesite Prezime...</label> 
            <input 
            type="text"
            placeholder='Prezime...'
            required
            name="workerLastName"
            id="workerLastName"
            class="form-control"
            />
            </div>
            <div class="mb-3">
            <label for="workerAge" class="form-label">Unesite dob...</label> 
            <input 
            type="number"
            placeholder='Dob...'
            required
            name="workerAge"
            id="workerAge"
            class="form-control"
            />
            </div>
            <div class="mb-3">
             <select class="form-select" name="workerPlace">
             <option selected>Odaberite radno mjesto</option>
            {WorkPlaceStore.workPlaces.map((work) => (
                <option value={work.name}>{work.name}</option>
            ))}
            </select>   
            </div>
            <Link to="/"><button class="btn btn-outline-secondary me-3">Natrag</button></Link>
            <button type='submit' class="btn btn-success">Dodaj</button>
        </form>
            
        </div>
    )
})

export default NewWorker