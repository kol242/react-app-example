import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
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
        WpCreateStore.createWorkplace(data)
        e.target.workName.value = null
        e.target.workDescr.value = null
        e.target.workSalary.value = null
        WpCreateStore.newWorkplaceChecker()
    }

    return (
        <div>
             <form className="form-wrapper" onSubmit={handleSubmit}>
                <Name />
                <Description />
                <Salary />
                <div className="btn-wrapper">
                    <button type='submit'>Dodaj</button>
                    <button className="btn-red" onClick={WpCreateStore.createModalHandler}>Odustani</button>
                </div>
            </form>
        </div>
    )
})

export default CreateForm
