import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import CreateForm from '../CreateWorkplace/CreateForm'
import CreateWP from '../CreateWorkplace/form.class'

const form = new CreateWP()

const WpCreateModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <h3>Add workplace</h3>
                <CreateForm form={form}/>
            </div>
        </div>
    )
})

export default WpCreateModal
