import { observer } from 'mobx-react-lite'
import React from 'react'

import WorkerSuccess from './WorkerPanel/WorkerSuccess'
import WorkplaceSuccess from './WorkplacePanel/WorkplaceSuccess'

const SuccessPanel = observer(() => {
    return (
        <>
            <WorkerSuccess />
            <WorkplaceSuccess />
        </>
    )
})

export default SuccessPanel
