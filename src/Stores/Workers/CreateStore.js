import WorkerStore from './WorkerStore'
import { makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'

class CreateStore {
    newChecked = false
    newWorker = false
    createModal = false
    newFailed = false
    workplaceData = ""
    
    constructor(){
        makeAutoObservable(this)
    }

    createModalHandler = (data) => {
        this.workplaceData = data
        this.createModal ? this.createModal = false : this.createModal = true
    }

    createWorker = async (data) => {
        await WorkerService.create(data)
        await WorkerStore.getWorkers()
        this.createModal = false
    }

    newWorkerChecker = () => {
        this.newChecked = true
        setTimeout(() => {this.newChecked = false}, 3000)
    }

    newWorkerFailed = () => {
        this.newFailed = true
        setTimeout(() => {this.newFailed = false}, 3000)
    }

    newWorkerHandler = () => {
        this.newWorker ? this.newWorker = false : this.newWorker = true
    }


}

export default new CreateStore()