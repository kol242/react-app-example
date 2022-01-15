import { observer } from 'mobx-react-lite'
import React from 'react'
import '../../../Common/style/modal.scss'
import WpDeleteStore from '../../../Stores/Workplaces/WpDeleteStore'

const DeleteModal = observer(() => {
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={WpDeleteStore.deleteModalHandler}>x</span>
                <p>Jeste li sigurni da želite obrisati odabrano radno mjesto?</p>
                <br />
                <div className="btn-wrapper">
                    <button className="btn-primary" onClick={WpDeleteStore.deleteWorkplace}>Obriši</button>
                    <button className="btn-red" onClick={WpDeleteStore.deleteModalHandler}>Odustani</button> 
                </div>
                
            </div>
        </div>
    )
})

export default DeleteModal
