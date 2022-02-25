import { observer } from 'mobx-react'
import React from 'react'
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import CreateStore from '../../Stores/Workers/CreateStore'
import WpEditStore from '../../Stores/Workplaces/WpEditStore'
import WpDeleteStore from '../../Stores/Workplaces/WpDeleteStore'
import { BsPersonPlusFill } from 'react-icons/bs'

const WorkplaceList = observer(({ 
    name,
    id,
    salary,
    description,
    currency
 }) => {
    const workplaceData = {
        docId: id, 
        name: name,
        salary: salary,
        description: description
    }
    return (
        <>
            <p className="card-item">{name}</p>
            <hr />
            <p className="card-item">{description}</p>
            <p className="card-item">{salary} {currency} (neto)</p>
            <div className="btn-wrapper">
                <button className="btn-primary" onClick={() => CreateStore.createModalHandler(workplaceData)}>
                    <BsPersonPlusFill className="icon"/>
                    Add worker
                </button>
                <button onClick={() => WpDeleteStore.deleteModalHandler(id)} className="btn-red">
                    <IoTrashBin className="icon"/>
                    Delete
                </button>
                <button className="btn-secondary" onClick={() => WpEditStore.editModalHandler(workplaceData)}>
                    <AiOutlineEdit className="icon"/>
                    Edit
                </button>
            </div>
        </>
    )
})

export default WorkplaceList
