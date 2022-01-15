import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'
import WorkerStore from './WorkerStore'

class CreateStore {
    newChecked = false
    newWorker = false
    
    constructor(){
        makeAutoObservable(this)
    }

    createWorker = (data) => {
        WorkerService.create(data)
        WorkerStore.getWorkers()
    }

    newWorkerChecker = () => {
        this.newChecked = true
        setTimeout(() => {this.newChecked = false}, 3000)
    }

    newWorkerHandler = () => {
        this.newWorker ? this.newWorker = false : this.newWorker = true
    }


}

export default new CreateStore()