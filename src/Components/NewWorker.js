import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../Stores/WorkerStore'
// import WorkPlaceStore from '../Stores/WorkPlaceStore'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { doc, getDoc } from 'firebase/firestore'
import {db} from '../firebase-config'

const NewWorker = observer(() => {
    let navigate = useNavigate()
    const location = useLocation()
    const currentData = location.state
    let data = {
        docId: null,
        name: "",
        lastName: "",
        age: null,
        salary: null,
        workPlace: "",
        workPlaceId: null
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const collectionRef = await getDoc(doc(db, "WorkPlaces", currentData.docId))
        data = {
            docId: "",
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: Number(e.target.workerAge.value),
            workPlaceId: currentData.docId,
            workPlace: collectionRef.data().Naziv,
            salary: Number(collectionRef.data().Placa)
        }
        WorkerStore.createWorker(data)
        navigate('/workplaces')
    }
    return (
        <div className="container w-50">
        <h3>Novi radnik</h3>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="workerName" className="form-label">Unesite Ime...</label>    
                <input 
                type="text"
                placeholder='Ime...'
                required
                name="workerName"
                id="workerName"
                className="form-control"
                />
            </div>
            <div className="mb-3">
            <label htmlFor="workerLastName" className="form-label">Unesite Prezime...</label> 
            <input 
            type="text"
            placeholder='Prezime...'
            required
            name="workerLastName"
            id="workerLastName"
            className="form-control"
            />
            </div>
            <div className="mb-3">
            <label htmlFor="workerAge" className="form-label">Unesite dob...</label> 
            <input 
            type="number"
            placeholder='Dob...'
            required
            name="workerAge"
            id="workerAge"
            className="form-control"
            />
            </div>
            <Link to="/workplaces"><button className="btn btn-outline-secondary me-3">Natrag</button></Link>
            <button type='submit' className="btn btn-success">Dodaj</button>
        </form>
            
        </div>
    )
})

export default NewWorker