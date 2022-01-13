import { observer } from 'mobx-react'
import React from 'react'

const ListItem = observer(({keyItem, value}) => {
    return (
        <>
            <option key={keyItem} value={value}>{value}</option>
        </>
    )
})

export default ListItem
