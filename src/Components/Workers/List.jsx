import { observer } from 'mobx-react'
import React from 'react'
import DeleteStore from '../../Stores/Workers/DeleteStore'
import EditStore from '../../Stores/Workers/EditStore'
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'


const List = observer(({
    id,
    lastName,
    name,
    age,
    salary,
    workplace,
    contract
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
            <ul className="card"  key={id}>
                <li className="card-item">{lastName} {name}, {age}</li>
                <hr />
                <li className="card-item">{salary} Kn (neto)</li>
                <li className="card-item">{workplace}</li>
                <li className="card-item">{contract}</li>
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
            </ul>
        </>
    )
})

export default List
