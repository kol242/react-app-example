import { observer } from 'mobx-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import WorkPlaceStore from '../Stores/WorkPlaceStore'

const UpdateWorkplace = observer(() => {
    const location = useLocation()
    const currentData = location.state
    let data = {
        docId: null,
        name: "",
        employees: "",
        descr: null,
        salary: null
    }
    const submitUpdate = (e) => {
        e.preventDefault()
        data = {
            docId: currentData.docId,
            name: e.target.workName.value,
            employees: e.target.workEmpl.value,
            descr: e.target.workDescr.value,
            salary: e.target.workSalary.value,
        }
        WorkPlaceStore.updateWorkplace(data)
    }
    return (
        <div>
        <h2>Uređivanje</h2>
        <form onSubmit={submitUpdate}>
            <input 
            type="text"
            placeholder={currentData.name}
            name="workName"
            />
            <br />
            <input 
            type="number"
            placeholder={currentData.employees}
            name="workEmpl"
            />
            <br />
            <textarea 
            type="text"
            rows="3"
            cols="21"
            placeholder={currentData.descr}
            name="workDescr"
            />
            <br />
            <input 
            type="number"
            placeholder={currentData.salary}
            name="workSalary"
            />
        <br />
        <Link to="/workplaces">Natrag</Link>
        <button type='submit'>Spremi promjene</button>
        </form>
            
        </div>
    )
})

export default UpdateWorkplace