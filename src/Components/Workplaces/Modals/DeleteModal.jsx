import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import WpDeleteStore from '../../../Stores/Workplaces/WpDeleteStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p className="modal-text">By deleting this workplace all connected workers will also be deleted.</p>
                <p className="modal-text">Continue anyway?</p>
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={WpDeleteStore.deleteWorkplace}>Delete</button>
                    <button className="btn-red" onClick={WpDeleteStore.deleteModalHandler}>Cancel</button> 
                </div>
                
            </div>
        </div>
    )
})

export default DeleteModal
