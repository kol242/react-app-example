import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpDeleteStore from '../../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../../Stores/Workplaces/WpEditStore'

const WorkplaceSuccess = observer(() => {
    return (
        <>
            { WpEditStore.editChecked ? 
                <p className="alert-success">Radno mjesto je uspješno uređeno!</p> : null
            }
            { WpCreateStore.newCheckedWP ? 
                <p className="alert-success">Radno mjesto je uspješno dodano!</p> : null 
            }
            { WpDeleteStore.deletedChecked ? 
                <p className="alert-success">Radno mjesto je uspješno obrisano!</p> : null 
            }
        </>
    )
})

export default WorkplaceSuccess
