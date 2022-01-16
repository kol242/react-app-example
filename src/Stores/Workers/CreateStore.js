import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'
import WorkerStore from './WorkerStore'

class CreateStore {
    newChecked = false
    newWorker = false
    createModal = false
    workplaceData = ""
    
    constructor(){
        makeAutoObservable(this)
    }

    createModalHandler = (data) => {
        this.workplaceData = data
        this.createModal ? this.createModal = false : this.createModal = true
    }

    createWorker = (data) => {
        WorkerService.create(data)
        WorkerStore.getWorkers()
        this.createModal = false
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