import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import CreateForm from '../CreateWorkplace/CreateForm'

const WpCreateModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Dodaj radno mjesto</h3>
                <CreateForm />
            </div>
        </div>
    )
})

export default WpCreateModal
