import { observer } from 'mobx-react'
import { React } from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
import WorkplaceService from '../../Stores/WorkplaceService'

const NewWorker = observer(({state}) => {
    const currentData = state
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
        const collectionRef = await WorkplaceService.getById(currentData.docId)
        data = {
            docId: "",
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: Number(e.target.workerAge.value),
            workPlaceId: currentData.docId,
            workPlace: collectionRef.data().Naziv,
            salary: Number(collectionRef.data().Placa),
            contract: e.target.contractType.value
        }
        WorkerStore.create(data)
        e.target.workerName.value = null
        e.target.workerLastName.value = null
        e.target.workerAge.value = null
        WorkPlaceStore.newWorkerChecker()
    }

    return (
        <div>
        <h3>Novi radnik</h3>
        <form onSubmit={handleSubmit}>
            <div>   
                <input 
                type="text"
                placeholder='Ime...'
                required
                name="workerName"
                id="workerName"
                />
            </div>
            <div>
            <input 
            type="text"
            placeholder='Prezime...'
            required
            name="workerLastName"
            id="workerLastName"
            />
            </div>
            <div>
            <input 
            type="number"
            placeholder='Dob...'
            required
            name="workerAge"
            id="workerAge"
            />
            </div>
            <div>
                <select name="contractType" id="contractType">
                    <option>Neodređeno</option>
                    <option>Određeno</option>
                </select>
            </div>   
            <button type='submit' className="btn btn-success">Dodaj</button>
            
        </form>
            
        </div>
    )
})

export default NewWorker