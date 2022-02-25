import WorkPlaceStore from './WorkPlaceStore'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable } from 'mobx'

class WpCreateStore {
    newWorkplace = false
    createModal = false
    currencies = ['EUR', 'USD', 'GBP', 'CHF', 'HRK']

    constructor() {
        makeAutoObservable(this)
    }

    createModalHandler = () => {
        this.createModal ? this.createModal = false : this.createModal = true
    }

    newHandler = () => {
        this.newWorkplace ? this.newWorkplace = false : this.newWorkplace = true
    }

    createWorkplace = async (form) => {
        let data = {
            docId: "",
            name: form.name,
            descr: form.description,
            currency: form.currency,
            salary: Number(form.salary),
        }
        WorkplaceService.create(data)
        WorkPlaceStore.getWorkplaces()
        WorkPlaceStore.getNames()
        this.createModal = false 
    }
}

export default new WpCreateStore()