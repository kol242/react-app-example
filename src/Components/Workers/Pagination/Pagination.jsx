import React from 'react'
import WorkerStore from '../../../Stores/WorkerStore'
// styles
import '../../../Common/style/list.scss'

const Pagination = () => {
    return (
        <>
            <div className="btn-wrapper--center">
                { WorkerStore.prevLength < 6 ? null : 
                    <button className="btn-link" onClick={WorkerStore.prevPage}>Prethodno</button> }
                { WorkerStore.nextLength < 6 ? null : 
                    <button className="btn-link" onClick={WorkerStore.nextPage}>Slijedeće</button> }
            </div>
        </>
    )
}

export default Pagination
