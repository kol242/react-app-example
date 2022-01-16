import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'

const Pagination = () => {
    return (
        <div>
            { WorkPlaceStore.prevLength < 7 ? null : 
                    <button className="btn-link" onClick={WorkPlaceStore.prevPage}>Prethodno</button> }
            { WorkPlaceStore.nextLength < 7 ? null : 
                    <button className="btn-link" onClick={WorkPlaceStore.nextPage}>Slijedeće</button> }
        </div>
    )
}

export default Pagination
