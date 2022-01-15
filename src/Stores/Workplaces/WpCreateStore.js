import { makeAutoObservable} from 'mobx'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import WorkPlaceStore from './WorkPlaceStore'


class WpCreateStore {
    newCheckedWP = false
    newWorkplace = false

    constructor() {
        makeAutoObservable(this)
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
    }
}

export default new WpCreateStore()