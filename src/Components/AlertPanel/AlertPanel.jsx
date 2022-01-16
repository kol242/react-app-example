import React from 'react'
// styles
import '../../Common/style/list.scss'
import { observer } from 'mobx-react'
import DeleteStore from '../../Stores/Workers/DeleteStore'
import EditStore from '../../Stores/Workers/EditStore'
import WpDeleteStore from '../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../Stores/Workplaces/WpEditStore'
import WpCreateStore from '../../Stores/Workplaces/WpCreateStore'
import CreateStore from '../../Stores/Workers/CreateStore'

const AlertPanel = observer(() => {
    return (
        <>
            { CreateStore.newChecked ? <p className="alert-success">Radnik je uspješno dodan!</p> : null }
            { WpEditStore.editChecked ? <p className="alert-success">Radno mjesto je uspješno uređeno!</p> : null }
            { WpCreateStore.newCheckedWP ? <p className="alert-success">Radno mjesto je uspješno dodano!</p> : null }
            { WpDeleteStore.deletedChecked ? <p className="alert-success">Radno mjesto je uspješno obrisano!</p> : null }
            { EditStore.isEdited ? <p className="alert-success">Radnik je uspješno uređen!</p> : null }
            { DeleteStore.isDeleted ? <p className="alert-success">Radnik je uspješno obrisan!</p> : null }
        </>
    )
})

export default AlertPanel
