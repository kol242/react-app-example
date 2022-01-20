import React from 'react'
import { observer } from 'mobx-react'
import SuccessPanel from './SuccessPanel'
import '../../Common/style/list.scss'
import ErorrPanel from './ErorrPanel'

const AlertPanel = observer(() => {
    return (
        <>
            <SuccessPanel />
            <ErorrPanel />
        </>
    )
})

export default AlertPanel
