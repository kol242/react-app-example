import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../../Stores/Workplaces/WorkPlaceStore'
import ListItem from './ListItem'

const List = observer(() => {
    return (
        <div>
            <select defaultValue={'default'} className="form-select" name="workPlaces" id="workPlaces">
                <option key='default1' value='default' disabled>Radno mjesto...</option>
                {WorkPlaceStore.names.map((work) => (
                    <ListItem keyItem={work.id} value={work.name} />
                ))}
            </select>
        </div>
    )
})

export default List
