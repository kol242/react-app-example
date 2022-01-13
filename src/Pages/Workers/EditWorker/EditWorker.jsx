import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../../../Stores/WorkerStore'
import WorkplaceService from '../../../Common/Services/WorkplaceService'
import List from '../../../Components/Workers/EditWorker/List'

const UpdateWorker = observer(({state}) => {

    const currentData = state

    let data = {
        docId: null,
        name: "",
        lastName: "",
        age: null,
        salary: null,
        workPlace: "",
        workPlaceId: "",
        contract: ""
    }
    
    const submitUpdate = async (e) => {
        e.preventDefault()
        const docData = e.target.workerPlace.value
        const temp = await WorkplaceService.getByName(docData)
        temp.forEach(doc => data = {
            docId: currentData.docId,
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: Number(e.target.workerAge.value),
            salary: Number(doc.data().Placa),
            workPlace: doc.data().Naziv,
            workPlaceId: doc.id,
            contract: e.target.contractType.value
        })
        WorkerStore.updateWorker(data)
    }
    return (
        <div>
            <h3>Uređivanje</h3>
            <form onSubmit={submitUpdate}>
                <input 
                    type="text"
                    defaultValue={currentData.name}
                    required
                    name="workerName"
                />
                <br />
                <input 
                    type="text"
                    defaultValue={currentData.lastName}
                    required
                    name="workerLastName"
                />
                <br />
                <input 
                    type="number"
                    defaultValue={currentData.age}
                    required
                    name="workerAge"
                />
                <br />
                <input 
                    type="number"
                    defaultValue={currentData.salary}
                    required
                    name="workerSalary"
                />
                <br />
                <div>
                    <List currentData={currentData}/>  
                </div>
                <div>
                    <select name="contractType" id="contractType">
                        <option>Neodređeno</option>
                        <option>Određeno</option>
                    </select>
                </div>   
            <br />
            <button type='submit'>Spremi promjene</button>
            </form>
        </div>
    )
})

export default UpdateWorker