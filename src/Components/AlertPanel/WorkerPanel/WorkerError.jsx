import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../Stores/Workers/CreateStore'
import DeleteStore from '../../../Stores/Workers/DeleteStore'
import EditStore from '../../../Stores/Workers/EditStore'
import WorkerStore from '../../../Stores/Workers/WorkerStore'

const WorkerError = observer(() => {
    return (
        <>
            { CreateStore.newFailed ? 
                <p className="alert-warning">Greška prilikom dodavanja radnika!</p> : null 
            } 
            { DeleteStore.isDeleteFailed ? 
                <p className="alert-warning">Greška prilikom brisanja radnika!</p> : null 
            } 
            { EditStore.isEditFailed ? 
                <p className="alert-warning">Greška prilikom uređivanja radnika!</p> : null 
            } 
            { WorkerStore.isGetFailed ? 
                <p className="alert-warning">Greška na serveru!</p> : null 
            } 
        </>
    )
})

export default WorkerError
