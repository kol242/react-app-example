import { observer } from 'mobx-react'
import React from 'react'
import WorkplaceService from '../../../Common/Services/WorkplaceService'
import CreateStore from '../../../Stores/Workers/CreateStore'
import Age from './Inputs/Age'
import Contract from './Inputs/Contract'
import LastName from './Inputs/LastName'
import Name from './Inputs/Name'

import '../../../Common/style/form.scss'

const CreateForm = observer(() => {
    let data = {}
    const id = CreateStore.workplaceData.docId

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
                <p>{CreateStore.workplaceData.name}</p>
                <p>{CreateStore.workplaceData.salary} kn</p>
                <Name />
                <LastName />
                <Age />
                <Contract />
                <div className="btn-wrapper">
                    <button type='submit' className="btn btn-success">Dodaj</button>
                    <button className="btn-red" onClick={CreateStore.createModalHandler}>Odustani</button>
                </div>
            </form>
        </div>
    )
})

export default CreateForm
