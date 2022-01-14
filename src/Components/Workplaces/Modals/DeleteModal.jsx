import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import WorkPlaceStore from '../../../Stores/WorkPlaceStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={WorkPlaceStore.deleteModalHandler}>x</span>
                <p>Jeste li sigurni da želite obrisati odabrano radno mjesto?</p>
                <br />
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={WorkPlaceStore.deleteWorkplace}>Obriši</button>
                    <button className="btn-red" onClick={WorkPlaceStore.deleteModalHandler}>Odustani</button> 
                </div>
                
            </div>
        </div>
    )
})

export default DeleteModal
