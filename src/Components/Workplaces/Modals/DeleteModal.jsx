import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import WpDeleteStore from '../../../Stores/Workplaces/WpDeleteStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <p className="modal-text">Brisanjem radnog mjesta obrisati će se i svi povezani radnici.</p>
                <p className="modal-text">Obrisati odabrano radno mjesto?</p>
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={WpDeleteStore.deleteWorkplace}>Obriši</button>
                    <button className="btn-red" onClick={WpDeleteStore.deleteModalHandler}>Odustani</button> 
                </div>
                
            </div>
        </div>
    )
})

export default DeleteModal
