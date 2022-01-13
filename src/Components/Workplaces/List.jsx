import { observer } from 'mobx-react'
import React from 'react'
import WorkPlaceStore from '../../Stores/WorkPlaceStore'
// styles
import New from '../../Common/images/plus.png'
import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'
// components
import EditWorkplace from '../../Pages/Workplaces/EditWorkplace/EditWorkplace'
import NewWorker from '../../Pages/Workers/CreateWorker/NewWorker'

const List = observer(({
    id,
    name,
    descr,
    salary
}) => {
    return (
        <>
            <ul className="card" key={id}>
              <li className="card-item">{name}</li>
              <hr />
              <li className="card-item">{descr}</li>
              <li className="card-item">{salary} Kn (neto)</li>
              <div className="btn-wrapper">
                  <button className="btn-primary" onClick={WorkPlaceStore.newWorkerHandler}>
                    <img src={New} alt="new" />Dodaj radnika
                  </button>
                  <button onClick={() => WorkPlaceStore.deleteWorkplace(id)} className="btn-red">
                    <img src={Delete} alt="Delete" />Obriši
                  </button>
                  <button className="btn-secondary" onClick={WorkPlaceStore.editHandler}><img src={Edit} alt="Edit" />Uredi</button>
              </div>
              { WorkPlaceStore.editWorkplace ? <EditWorkplace 
                state={{
                  docId: id,
                  name: name,
                  descr: descr,
                  salary: salary
                }} /> : null}
              { WorkPlaceStore.newWorker ? <NewWorker docId={id} /> : null}
            </ul>
        </>
    )
})

export default List
