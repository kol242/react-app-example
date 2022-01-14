import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../../../Stores/WorkerStore'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'
import Description from './Inputs/Description'
import Name from './Inputs/Name'
import Salary from './Inputs/Salary'

const EditForm = observer(({currentData}) => {
    const state = currentData
    let data = {}

    const submitUpdate = (e) => {
        e.preventDefault()
        data = {
            docId: state.docId,
            name: e.target.workName.value,
            descr: e.target.workDescr.value,
            salary: Number(e.target.workSalary.value),
        }
        WorkPlaceStore.updateWorkplace(data)
        WorkerStore.WorkplaceUpdate(data)
    }

    return (
        <div>
            <form onSubmit={submitUpdate}>
                <Name defaultValue={() => state.name} />
                <Description defaultValue={() => state.descr} />
                <Salary defaultValue={() => state.salary} />
                <button type='submit'>Spremi promjene</button>
            </form>
        </div>
    )
})

export default EditForm
