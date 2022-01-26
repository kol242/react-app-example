import { observer } from 'mobx-react'
import React from 'react'
import WpDeleteStore from '../../Stores/Workplaces/WpDeleteStore'
import WpEditStore from '../../Stores/Workplaces/WpEditStore'
import CreateStore from '../../Stores/Workers/CreateStore'
import { IoTrashBin } from 'react-icons/io5'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsPersonPlusFill } from 'react-icons/bs'

const List = observer(({
    id,
    name,
    descr,
    salary
}) => {

  const workplaceData = {
    docId: id,
    name: name,
    descr: descr,
    salary: salary
  }
    return (
        <>
            <ul className="card" key={id}>
              <li className="card-item">{name}</li>
              <hr />
              <li className="card-item">{descr}</li>
              <li className="card-item">{salary} Kn (neto)</li>
              <div className="btn-wrapper">
                  <button className="btn-primary" onClick={() => CreateStore.createModalHandler(workplaceData)}>
                    <BsPersonPlusFill className="icon"/>
                    Dodaj radnika
                  </button>
                  <button onClick={() => WpDeleteStore.deleteModalHandler(id)} className="btn-red">
                    <IoTrashBin className="icon"/>
                    Obriši
                  </button>
                  <button className="btn-secondary" onClick={() => WpEditStore.editModalHandler(workplaceData)}>
                    <AiOutlineEdit className="icon"/>
                    Uredi
                  </button>
              </div>
            </ul>
        </>
    )
})

export default List
