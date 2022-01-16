import { observer } from 'mobx-react'
import React from 'react'
import EditStore from '../../../Stores/Workers/EditStore'
import WpEditStore from '../../../Stores/Workplaces/WpEditStore'
import Description from './Inputs/Description'
import Name from './Inputs/Name'
import Salary from './Inputs/Salary'

const EditForm = observer(() => {
    const state = WpEditStore.currentWorkplace
    let data = {}

    const submitUpdate = (e) => {
        e.preventDefault()
        data = {
            docId: state.docId,
            name: e.target.workName.value,
            descr: e.target.workDescr.value,
            salary: Number(e.target.workSalary.value),
        }
        WpEditStore.updateWorkplace(data)
        EditStore.WorkplaceUpdate(data)
    }

    return (
        <div>
            <form onSubmit={submitUpdate}>
                <Name defaultValue={() => state.name} />
                <Description defaultValue={() => state.descr} />
                <Salary defaultValue={() => state.salary} />
                <div className="btn-wrapper">
                    <button type='submit'>Spremi promjene</button>
                    <button className="btn-red" onClick={WpEditStore.editModalHandler}>Odustani</button>
                </div>
            </form>
        </div>
    )
})

export default EditForm
