import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'

const UpdateWorkplace = observer(({state}) => {
    const currentData = state
    let data = {
        docId: null,
        name: "",
        descr: null,
        salary: null
    }
    const submitUpdate = (e) => {
        e.preventDefault()
        data = {
            docId: currentData.docId,
            name: e.target.workName.value,
            descr: e.target.workDescr.value,
            salary: Number(e.target.workSalary.value),
        }
        WorkPlaceStore.updateWorkplace(data)
        WorkerStore.WorkplaceUpdate(data)
    }
    return (
        <div>
        <h3>Uređivanje</h3>
        <form onSubmit={submitUpdate}>
            <input 
            type="text"
            defaultValue={currentData.name}
            name="workName"
            />
            <br />
            <textarea 
            type="text"
            rows="3"
            cols="21"
            defaultValue={currentData.descr}
            name="workDescr"
            />
            <br />
            <input 
            type="number"
            defaultValue={currentData.salary}
            name="workSalary"
            />
        <br />
        <button type='submit'>Spremi promjene</button>
        </form>
            
        </div>
    )
})

export default UpdateWorkplace