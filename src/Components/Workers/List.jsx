import { observer } from 'mobx-react'
import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import EditWorker from '../../Pages/Workers/EditWorker/EditWorker'

import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'

const List = observer(({
    id,
    lastName,
    name,
    age,
    salary,
    workplace,
    contract
}) => {
    return (
        <>
            <ul className="card"  key={id}>
                <li className="card-item">{lastName} {name}, {age}</li>
                <hr />
                <li className="card-item">{salary} Kn (neto)</li>
                <li className="card-item">{workplace}</li>
                <li className="card-item">{contract}</li>
                <div className="btn-wrapper">
                    <button onClick={() => WorkerStore.deleteModalHandler(id)} className="btn-red">
                        <img src={Delete} alt="Delete" />
                        Obriši
                    </button>
                    <button className="btn-secondary" onClick={WorkerStore.editWorkerHandler}>
                        <img src={Edit} alt="Edit" />
                        Uredi
                    </button>
                </div>
                { WorkerStore.editWorker ? <EditWorker
                state={{
                    docId: id, 
                    name: name,
                    lastName: lastName,
                    age: age,
                    salary: salary,
                    workPlace: workplace,
                    contract: contract
                    }} /> : null }
            </ul>
        </>
    )
})

export default List
