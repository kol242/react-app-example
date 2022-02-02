import React from 'react'
// styles
import '../../../Common/style/list.scss'
import { observer } from 'mobx-react'
import DataListViewStore from '../../../Stores/DataListViewStore'

const Pagination = observer(({ dataset }) => {
    return (
        <>
            <div className="btn-wrapper--center">
                { DataListViewStore.pageLength(dataset).prevLength < 7 ? null : 
                    <button className="btn-link" onClick={() => DataListViewStore.prevPage(dataset)}>Prethodno</button> }
                { DataListViewStore.pageLength(dataset).nextLength < 7 ? null : 
                    <button className="btn-link" onClick={() => DataListViewStore.nextPage(dataset)}>Slijedeće</button> }
            </div>
        </>
    )
})

export default Pagination
