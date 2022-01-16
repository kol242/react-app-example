import { observer } from 'mobx-react-lite'
import React from 'react'
import WorkplaceService from '../../../Common/Services/WorkplaceService'
import EditStore from '../../../Stores/Workers/EditStore'
import Age from './Inputs/Age'
import Contract from './Inputs/Contract'
import LastName from './Inputs/LastName'
import Name from './Inputs/Name'
import Salary from './Inputs/Salary'
import List from './List'

import '../../../Common/style/form.scss'

const EditForm = observer(() => {
    const currentData = EditStore.currentWorker
    let data = {}
    
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
        EditStore.updateWorker(data)
    }
    return (
        <div>
            <form onSubmit={submitUpdate}>
                <Name name={currentData.name} />
                <LastName lastName={currentData.lastName} />
                <Age age={currentData.age} />
                <Salary salary={currentData.salary} />
                <Contract />
                <List currentData={currentData}/>  
            <div className="btn-wrapper">
               <button type='submit'>Spremi promjene</button>
               <button className="btn-red" onClick={EditStore.editModalHandler}>Odustani</button> 
            </div>
            </form>
        </div>
    )
})

export default EditForm
