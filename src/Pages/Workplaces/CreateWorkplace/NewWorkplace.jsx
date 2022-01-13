import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'

import '../../../Common/style/form.scss'

const NewWorkplace = observer(() => {
    let data = {
        docId: null,
        name: "",
        descr: "",
        salary: null,
    }
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
            <h3>Novo radno mjesto</h3>
            <form className="form-wrapper" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='Naziv...'
                    required
                    name="workName"
                />
                <br />
                <textarea 
                    type="text"
                    rows="3"
                    cols="21"
                    placeholder='Opis...'
                    required
                    name="workDescr"
                />
                <br />
                <input 
                    type="number"
                    placeholder='Plaća...'
                    required
                    name="workSalary"
                />
                <br />
                <button type='submit'>Dodaj</button>
            </form>
        </div>
    )
})

export default NewWorkplace