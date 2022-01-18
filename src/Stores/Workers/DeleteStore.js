import WorkerStore from './WorkerStore'
import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'

class DeleteStore {
    deleteId = ""
    isDeleted = false
    deleteModal = false
    isDeleteFailed = false
    
    constructor(){
        makeAutoObservable(this)
    }

    deleteChecker = () => {
        this.isDeleted = true
        setTimeout(() => {this.isDeleted = false}, 3000)
    }

    deleteFailed = () => {
        this.isDeleteFailed = true
        setTimeout(() => {this.isDeleteFailed = false}, 3000)
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    deleteWorker = async () => {
        await WorkerService.delete(this.deleteId)
        await WorkerStore.getWorkers()
        this.deleteChecker()
        this.deleteId = ""
        this.deleteModal = false
    }
}

export default new DeleteStore()