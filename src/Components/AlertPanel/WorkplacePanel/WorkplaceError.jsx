import { observer } from 'mobx-react'
import React from 'react'
import WpCreateStore from '../../../Stores/Workplaces/WpCreateStore'
import WpDeleteStore from '../../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../../Stores/Workplaces/WpEditStore'

const WorkplaceError = observer(() => {
    return (
        <>
            { WpCreateStore.isCreateFailed ? 
                <p className="alert-warning">Greška prilikom dodavanja radnog mjesta!</p> : null 
            } 
            { WpDeleteStore.isDeleteFailed ? 
                <p className="alert-warning">Greška prilikom brisanja radnog mjesta!</p> : null 
            } 
            { WpEditStore.isEditFailed ? 
                <p className="alert-warning">Greška prilikom uređivanja radnog mjesta!</p> : null 
            } 
        </>
    )
})

export default WorkplaceError
