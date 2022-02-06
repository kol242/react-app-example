import React from 'react'
import '../Common/style/list.scss'
import { observer } from 'mobx-react'
import DataListViewStore from '../Stores/DataListViewStore'

const Pagination = observer(({ dataset }) => {
    return (
        <>
            <div className="btn-wrapper--center">
                { dataset.prevLength < 7 ? null : 
                    <button className="btn-link" onClick={() => dataset.prevPage(DataListViewStore.prevPage)}>Prethodno</button> }
                { dataset.nextLength < 7 ? null : 
                    <button className="btn-link" onClick={() => dataset.nextPage(DataListViewStore.nextPage)}>Slijedeće</button> }
            </div>
        </>
    )
})

export default Pagination
