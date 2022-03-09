import WorkPlaceStore from './WorkPlaceStore'
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
        runInAction(() => {
            this.deleteModal = false
            WorkPlaceStore.items = []
            WorkPlaceStore.getNames()
            this.deleteId = ""
        })
    }
}

export default new WpDeleteStore()