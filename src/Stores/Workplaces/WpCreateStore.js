import WorkPlaceStore from './WorkPlaceStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable} from 'mobx'

class WpCreateStore {
    newCheckedWP = false
    newWorkplace = false
    createModal = false
    isCreateFailed = false

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

    createFailed = () => {
        this.isCreateFailed = true
        setTimeout(() => {this.isCreateFailed = false}, 3000)
    }

    newHandler = () => {
        this.newWorkplace ? this.newWorkplace = false : this.newWorkplace = true
    }

    createWorkplace = async (data) => {
        await WorkplaceService.create(data)
        await WorkPlaceStore.getWorkplaces()
        await WorkPlaceStore.getNames()
        this.newWorkplaceChecker()
        this.createModal = false
    }
}

export default new WpCreateStore()