import WorkPlaceStore from './WorkPlaceStore'
import WorkerStore from '../Workers/WorkerStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable, runInAction } from 'mobx'

class WpDeleteStore {
    deleteId = ""
    deletedChecked = false
    deleteModal = false
    isDeleteFailed = false

    constructor() {
        makeAutoObservable(this)
    }

    deletedWPChecker = () => {
        this.deletedChecked = true
        setTimeout(() => {this.deletedChecked = false}, 3000)
    }

    deleteFailed = () => {
        this.isDeleteFailed = true
        setTimeout(() => {this.isDeleteFailed = false}, 3000)
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    deleteWorkplace = async () => {
        await WorkplaceService.delete(this.deleteId)
        await WorkPlaceStore.getWorkplaces()
        await WorkerStore.getWorkers()
        await WorkPlaceStore.getNames()
        runInAction(() => {
            this.deletedWPChecker()
            this.deleteId = ""
            this.deleteModal = false
        })
    }
}

export default new WpDeleteStore()