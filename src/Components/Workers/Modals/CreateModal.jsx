import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import CreateForm from '../CreateWorker/CreateForm'

const CreateModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Dodaj radnika</h3>
                <CreateForm />
            </div>
        </div>
    )
})

export default CreateModal
