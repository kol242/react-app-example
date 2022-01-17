import { observer } from 'mobx-react'
import React from 'react'
import DeleteStore from '../../Stores/Workers/DeleteStore'
import EditStore from '../../Stores/Workers/EditStore'
import DeleteModal from './Modals/DeleteModal'
import EditModal from './Modals/EditModal'

const Modals = observer(() => {
    return (
        <>
            { DeleteStore.deleteModal ? <DeleteModal /> : null }
            { EditStore.editModal ? <EditModal /> : null }
        </>
    )
})

export default Modals
