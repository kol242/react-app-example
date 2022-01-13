import { observer } from 'mobx-react'
import React from 'react'
import EditForm from '../../../Components/Workers/EditWorker/EditForm'

const UpdateWorker = observer(({state}) => {

    
    return (
        <div>
            <h3>Uređivanje</h3>
            <EditForm state={state} />
        </div>
    )
})

export default UpdateWorker