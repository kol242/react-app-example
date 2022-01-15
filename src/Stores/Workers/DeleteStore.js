import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'
import WorkerStore from './WorkerStore'

class DeleteStore {
    deleteId = ""
    isDeleted = false
    deleteModal = false
    
    constructor(){
        makeAutoObservable(this)
    }

    deleteChecker = () => {
        this.isDeleted = true
        setTimeout(() => {this.isDeleted = false}, 3000)
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    deleteWorker = () => {
        WorkerService.delete(this.deleteId)
        this.deleteChecker()
        WorkerStore.getWorkers()
        this.deleteId = ""
        this.deleteModal = false
    }
}

export default new DeleteStore()