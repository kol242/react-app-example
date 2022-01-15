import { observer } from 'mobx-react'
import React from 'react'
import WorkplaceService from '../../../Common/Services/WorkplaceService'
import CreateStore from '../../../Stores/Workers/CreateStore'
import Age from './Inputs/Age'
import Contract from './Inputs/Contract'
import LastName from './Inputs/LastName'
import Name from './Inputs/Name'

const CreateForm = observer(({id}) => {
    let data = {}

    const handleSubmit = async (e) => {
        e.preventDefault()
        const collectionRef = await WorkplaceService.getById(id)
        data = {
            docId: "",
            name: e.target.workerName.value,
            lastName: e.target.workerLastName.value,
            age: Number(e.target.workerAge.value),
            workPlaceId: id,
            workPlace: collectionRef.data().Naziv,
            salary: Number(collectionRef.data().Placa),
            contract: e.target.contractType.value
        }
        CreateStore.createWorker(data)
        e.target.workerName.value = null
        e.target.workerLastName.value = null
        e.target.workerAge.value = null
        CreateStore.newWorkerChecker()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Name />
                <LastName />
                <Age />
                <Contract />   
                <button type='submit' className="btn btn-success">Dodaj</button>
            </form>
        </div>
    )
})

export default CreateForm
