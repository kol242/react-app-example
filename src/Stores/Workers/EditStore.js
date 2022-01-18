import WorkerStore from './WorkerStore'
import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'

class EditStore {
    isEdited = false
    editWorker = false
    editModal = false
    isEditFailed = false
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
    
    editFailed = () => {
        this.isEditFailed = true
        setTimeout(() => {this.isEditFailed = false}, 3000)
    }

    editWorkerHandler = () => {
        this.editWorker ? this.editWorker = false : this.editWorker = true
    }

    updateWorker = async (data) => {
        await WorkerService.update(data)
        await WorkerStore.getWorkers()
        this.editChecker()
        this.editModal = false
    }

    WorkplaceUpdate = async (data) => {
        await WorkerService.WorkplaceUpdate(data)
        await WorkerStore.getWorkers()
    }
}

export default new EditStore()