import { makeAutoObservable} from 'mobx'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import WorkPlaceStore from './WorkPlaceStore'


class WpCreateStore {
    newCheckedWP = false
    newWorkplace = false
    createModal = false

    constructor() {
        makeAutoObservable(this)
    }

    createModalHandler = () => {
        this.createModal ? this.createModal = false : this.createModal = true
    }

    newWorkplaceChecker = () => {
        this.newCheckedWP = true
        setTimeout(() => {this.newCheckedWP = false}, 3000)
    }

    newHandler = () => {
        this.newWorkplace ? this.newWorkplace = false : this.newWorkplace = true
    }

    createWorkplace = async (data) => {
        WorkplaceService.create(data)
        WorkPlaceStore.getWorkplaces()
        WorkPlaceStore.getNames()
        this.newWorkplaceChecker()
        this.createModal = false
    }
}

export default new WpCreateStore()