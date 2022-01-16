import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'
import WorkerStore from './WorkerStore'

class EditStore {
    isEdited = false
    editWorker = false
    editModal = false
    currentWorker = {}
    
    constructor(){
        makeAutoObservable(this)
    }

    editModalHandler = (data) => {
        this.currentWorker = data
        this.editModal ? this.editModal = false : this.editModal = true
    }

    editChecker = () => {
        this.isEdited = true
        setTimeout(() => {this.isEdited = false}, 3000)
    }

    editWorkerHandler = () => {
        this.editWorker ? this.editWorker = false : this.editWorker = true
    }

    updateWorker = (data) => {
        WorkerService.update(data)
        WorkerStore.getWorkers()
        this.editChecker()
        this.editModal = false
    }

    WorkplaceUpdate = (data) => {
        WorkerService.WorkplaceUpdate(data)
        WorkerStore.getWorkers()
    }
}

export default new EditStore()