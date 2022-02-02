import { observer } from 'mobx-react'
import React from 'react'
import DeleteStore from '../../Stores/Workers/DeleteStore'
import EditStore from '../../Stores/Workers/EditStore'
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'

const WorkerList = observer(({ 
    name,
    lastName,
    id,
    age,
    salary,
    contract,
    workplace
 }) => {
    const workerData = {
        docId: id, 
        name: name,
        lastName: lastName,
        age: age,
        salary: salary,
        workPlace: workplace,
        contract: contract
    }
    return (
        <>
            <p className="card-item">{lastName} {name}, {age}</p>
            <hr />
            <p className="card-item">{salary} Kn (neto)</p>
            <p className="card-item">{workplace}</p>
            <p className="card-item">{contract}</p>
            <div className="btn-wrapper">
                <button onClick={() => DeleteStore.deleteModalHandler(id)} className="btn-red">
                    <IoTrashBin className="icon"/>
                    Obriši
                </button>
                <button className="btn-secondary" onClick={() => EditStore.editModalHandler(workerData)}>
                    <AiOutlineEdit className="icon"/>
                    Uredi
                </button>
            </div>
        </>
    )
})

export default WorkerList
