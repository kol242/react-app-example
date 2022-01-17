import { observer } from 'mobx-react'
import React from 'react'
import CreateStore from '../../Stores/Workers/CreateStore'
import WpCreateStore from '../../Stores/Workplaces/WpCreateStore'
import WpDeleteStore from '../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../Stores/Workplaces/WpEditStore'
import CreateModal from '../Workers/Modals/CreateModal'
import DeleteModal from './Modals/DeleteModal'
import EditModal from './Modals/EditModal'
import WpCreateModal from './Modals/WpCreateModal'

const Modals = observer(() => {
    return (
        <>
            { WpDeleteStore.deleteModal ? <DeleteModal /> : null }
            { WpEditStore.editModal ? <EditModal /> : null }
            { CreateStore.createModal ? <CreateModal /> : null}
            { WpCreateStore.createModal ? <WpCreateModal /> : null }
        </>
    )
})

export default Modals
