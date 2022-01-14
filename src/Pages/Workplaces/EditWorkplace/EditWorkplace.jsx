import { observer } from 'mobx-react'
import React from 'react'
import EditForm from '../../../Components/Workplaces/EditWorkplace/EditForm'

const UpdateWorkplace = observer(({state}) => {
    const data = state
    return (
        <div>
            <h3>Uređivanje</h3>
            <EditForm currentData={data} />
        </div>
    )
})

export default UpdateWorkplace