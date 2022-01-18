import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../../Stores/Workers/CreateStore'
import DeleteStore from '../../../Stores/Workers/DeleteStore'
import EditStore from '../../../Stores/Workers/EditStore'

const WorkerSuccess = observer(() => {
    return (
        <>
            { CreateStore.newChecked ? 
                <p className="alert-success">Radnik je uspješno dodan!</p> : null 
            }
            { EditStore.isEdited ? 
                <p className="alert-success">Radnik je uspješno uređen!</p> : null 
            }
            { DeleteStore.isDeleted ? 
                <p className="alert-success">Radnik je uspješno obrisan!</p> : null 
            }
        </>
    )
})

export default WorkerSuccess
