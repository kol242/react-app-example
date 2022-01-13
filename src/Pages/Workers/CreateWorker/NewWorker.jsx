import { observer } from 'mobx-react'
import { React } from 'react'
import CreateForm from '../../../Components/Workers/CreateWorker/CreateForm'

const NewWorker = observer(({docId}) => {
    return (
        <div>
            <h3>Novi radnik</h3>
            <CreateForm id={docId} />
        </div>
    )
})

export default NewWorker