import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import EditForm from '../EditWorker/EditForm'

const EditModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Uredi radnika</h3>
                <EditForm />
            </div>
        </div>
    )
})

export default EditModal
