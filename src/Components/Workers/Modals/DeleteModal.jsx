import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import WorkerStore from '../../../Stores/WorkerStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={WorkerStore.deleteModalHandler}>x</span>
                <p>Jeste li sigurni da želite obrisati odabranog radnika?</p>
                <br />
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={WorkerStore.deleteWorker}>Obriši</button>
                    <button className="btn-red" onClick={WorkerStore.deleteModalHandler}>Odustani</button> 
                </div>
                
            </div>
        </div>
    )
})

export default DeleteModal
