import { observer } from 'mobx-react'
import React from 'react'

const LastName = observer(() => {
    return (
        <div>
            <input type="text" id="searchInput" name="inputText" placeholder="Lastname..."/>
        </div>
    )
})

export default LastName
