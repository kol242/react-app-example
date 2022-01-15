import { makeAutoObservable} from 'mobx'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import WorkPlaceStore from './WorkPlaceStore'


class WpDeleteStore {
    deleteId = ""
    deletedChecked = false
    deleteModal = false

    constructor() {
        makeAutoObservable(this)
    }

    deletedWPChecker = () => {
        this.deletedChecked = true
        setTimeout(() => {this.deletedChecked = false}, 3000)
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    deleteWorkplace = async () => {
        WorkplaceService.delete(this.deleteId)
        WorkPlaceStore.getWorkplaces()
        WorkPlaceStore.getNames()
        this.deletedWPChecker()
        this.deleteId = ""
        this.deleteModal = false
    }
}

export default new WpDeleteStore()