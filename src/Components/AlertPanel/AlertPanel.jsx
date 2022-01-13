import React from 'react'
import WorkerStore from '../../Stores/WorkerStore'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
// styles
import '../../Common/style/list.scss'
import { observer } from 'mobx-react'

const AlertPanel = observer(() => {
    return (
        <>
            { WorkPlaceStore.newChecked ? <p className="alert-success">Radnik je uspješno dodan!</p> : null }
            { WorkPlaceStore.editChecked ? <p className="alert-info">Radno mjesto je uspješno uređeno!</p> : null }
            { WorkPlaceStore.newCheckedWP ? <p className="alert-success">Radno mjesto je uspješno dodano!</p> : null }
            { WorkPlaceStore.deletedChecked ? <p className="alert-warning">Radno mjesto je uspješno obrisano!</p> : null }
            { WorkerStore.isEdited ? <p className="alert-info">Radnik je uspješno uređen!</p> : null }
            { WorkerStore.isDeleted ? <p className="alert-warning">Radnik je uspješno obrisan!</p> : null }
        </>
    )
})

export default AlertPanel
