import WorkPlaceStore from './WorkPlaceStore'
import WorkerStore from '../Workers/WorkerStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable, runInAction } from 'mobx'

class WpDeleteStore {
    deleteId = ""
    deleteModal = false

    constructor() {
        makeAutoObservable(this)
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
            this.deleteId = ""
            this.deleteModal = false
        })
    }
}

export default new WpDeleteStore()