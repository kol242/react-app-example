import WorkerStore from './WorkerStore'
import { runInAction, makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'

class DeleteStore {
    deleteId = ""
    deleteModal = false
    
    constructor(){
        makeAutoObservable(this)
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    deleteWorker = async () => {
        await WorkerService.delete(this.deleteId)
        await WorkerStore.getWorkers()
        runInAction(() => {
            this.deleteId = ""
            this.deleteModal = false   
        })
    }
}

export default new DeleteStore()