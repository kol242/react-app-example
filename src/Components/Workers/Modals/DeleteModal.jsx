import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import DeleteStore from '../../../Stores/Workers/DeleteStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p>Delete selected worker?</p>
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={DeleteStore.deleteWorker}>Delete</button>
                    <button className="btn-red" onClick={DeleteStore.deleteModalHandler}>Cancel</button> 
                </div>
            </div>
        </div>
    )
})

export default DeleteModal
