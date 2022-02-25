import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import EditForm from '../EditWorker/EditForm'
import EditWorkerForm from '../EditWorker/form.class'

const form = new EditWorkerForm()

const EditModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Edit worker</h3>
                <EditForm form={form}/>
            </div>
        </div>
    )
})

export default EditModal
