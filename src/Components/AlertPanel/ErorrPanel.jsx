import { observer } from 'mobx-react'
import React from 'react'
import WorkerError from './WorkerPanel/WorkerError'
import WorkplaceError from './WorkplacePanel/WorkplaceError'

const ErorrPanel = observer(() => {
    return (
        <>
            <WorkerError />
            <WorkplaceError />
        </>
    )
})

export default ErorrPanel
