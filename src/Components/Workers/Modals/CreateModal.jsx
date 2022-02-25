import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import CreateForm from '../CreateWorker/CreateForm'
import AddWorkerForm from '../CreateWorker/form.class'

const form = new AddWorkerForm()

const CreateModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Add new worker</h3>
                <CreateForm form={form}/>
            </div>
        </div>
    )
})

export default CreateModal
