import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'
import Description from './Inputs/Description'
import Name from './Inputs/Name'
import Salary from './Inputs/Salary'

const CreateForm = observer(() => {
    let data = {}

    const handleSubmit = (e) => {
        e.preventDefault()
        data = {
            docId: "",
            name: e.target.workName.value,
            descr: e.target.workDescr.value,
            salary: Number(e.target.workSalary.value),
        }
        WorkPlaceStore.createWorkplace(data)
        e.target.workName.value = null
        e.target.workDescr.value = null
        e.target.workSalary.value = null
        WorkPlaceStore.newWorkplaceChecker()
    }

    return (
        <div>
             <form className="form-wrapper" onSubmit={handleSubmit}>
                <Name />
                <Description />
                <Salary />
                <button type='submit'>Dodaj</button>
            </form>
        </div>
    )
})

export default CreateForm
