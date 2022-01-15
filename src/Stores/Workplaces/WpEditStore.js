import { makeAutoObservable} from 'mobx'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import WorkPlaceStore from './WorkPlaceStore'


class WpEditStore {
    editChecked = false
    editWorkplace = false

    constructor() {
        makeAutoObservable(this)
    }

    editWorkplaceChecker = () => {
        this.editChecked = true
        setTimeout(() => {this.editChecked = false}, 3000)
    }

    editHandler = () => {
        this.editWorkplace ? this.editWorkplace = false : this.editWorkplace = true
    }

    updateWorkplace = async (data) => {
        WorkplaceService.update(data)
        WorkPlaceStore.getWorkplaces()
        WorkPlaceStore.getNames()
        this.editWorkplaceChecker()
    }
}

export default new WpEditStore()