import WorkPlaceStore from './WorkPlaceStore'
import WorkerStore from '../Workers/WorkerStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable, runInAction } from 'mobx'

class WpEditStore {
    editChecked = false
    editWorkplace = false
    editModal = false
    isEditFailed = false
    currentWorkplace = {}

    constructor() {
        makeAutoObservable(this)
    }

    editModalHandler = (data) => {
        this.currentWorkplace = data
        this.editModal ? this.editModal = false : this.editModal = true
    }

    editWorkplaceChecker = () => {
        this.editChecked = true
        setTimeout(() => {this.editChecked = false}, 3000)
    }

    editFailed = () => {
        this.isEditFailed = true
        setTimeout(() => {this.isEditFailed = false}, 3000)
    }

    editHandler = () => {
        this.editWorkplace ? this.editWorkplace = false : this.editWorkplace = true
    }

    updateWorkplace = async (data) => {
        await WorkplaceService.update(data)
        await WorkPlaceStore.getNames()
        await WorkerStore.getWorkers()
        await WorkPlaceStore.getWorkplaces()
        runInAction(() => {
            this.editWorkplaceChecker()
            this.editModal = false
        })
    }
}

export default new WpEditStore()