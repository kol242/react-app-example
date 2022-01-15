import { observer } from 'mobx-react'
import React from 'react'
// styles
import New from '../../Common/images/plus.png'
import Delete from '../../Common/images/bin.png'
import Edit from '../../Common/images/edit.png'
// components
import EditWorkplace from '../../Pages/Workplaces/EditWorkplace/EditWorkplace'
import NewWorker from '../../Pages/Workers/CreateWorker/NewWorker'
import WpDeleteStore from '../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../Stores/Workplaces/WpEditStore'
import CreateStore from '../../Stores/Workers/CreateStore'

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
                  <button className="btn-primary" onClick={CreateStore.newWorkerHandler}>
                    <img src={New} alt="new" />
                    Dodaj radnika
                  </button>
                  <button onClick={() => WpDeleteStore.deleteModalHandler(id)} className="btn-red">
                    <img src={Delete} alt="Delete" />
                    Obriši
                  </button>
                  <button className="btn-secondary" onClick={WpEditStore.editHandler}><img src={Edit} alt="Edit" />Uredi</button>
              </div>
              { WpEditStore.editWorkplace ? <EditWorkplace 
                state={{
                  docId: id,
                  name: name,
                  descr: descr,
                  salary: salary
                }} /> : null}
              { CreateStore.newWorker ? <NewWorker docId={id} /> : null}
            </ul>
        </>
    )
})

export default List
