import WorkPlaceStore from './WorkPlaceStore'
import WorkerStore from '../Workers/WorkerStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable, runInAction } from 'mobx'
import EditStore from '../Workers/EditStore'

class WpEditStore {
    editWorkplace = false
    editModal = false
    currentWorkplace = {}

    constructor() {
        makeAutoObservable(this)
    }

    editModalHandler = (data) => {
        this.currentWorkplace = data
        this.editModal ? this.editModal = false : this.editModal = true
    }

    editHandler = () => {
        this.editWorkplace ? this.editWorkplace = false : this.editWorkplace = true
    }

    updateWorkplace = async (form) => {
        let data = {
            docId: this.currentWorkplace.docId,
            name: form.name,
            descr: form.description,
            salary: Number(form.salary),
        }
        EditStore.WorkplaceUpdate(data)
        WorkplaceService.update(data)
        await WorkerStore.getWorkers()
        await WorkPlaceStore.getWorkplaces()
        await WorkPlaceStore.getNames()
        runInAction(() => {
            this.editModal = false
        })
    }
}

export default new WpEditStore()