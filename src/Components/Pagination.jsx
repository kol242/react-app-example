import React from 'react'
import '../Common/style/list.scss'
import { observer } from 'mobx-react'

const Pagination = observer(({ dataset }) => {
    return (
        <>
            <div className="btn-wrapper--center">
                { dataset.prevLength < 7 ? null : 
                    <button className="btn-link" onClick={() => dataset.prevPage()}>Previous</button> }
                { dataset.nextLength < 7 ? null : 
                    <button className="btn-link" onClick={() => dataset.nextPage()}>Next</button> }
            </div>
        </>
    )
})

export default Pagination
