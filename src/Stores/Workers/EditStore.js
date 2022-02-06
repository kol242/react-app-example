import WorkerStore from './WorkerStore'
import WorkerService from '../../Common/Services/WorkerService'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import { makeAutoObservable, runInAction } from 'mobx'
import DataListViewStore from '../DataListViewStore'

class EditStore {
    editWorker = false
    editModal = false
    currentWorker = {}
    contract = ["Određeno", "Neodređeno"]
    
    constructor(){
        makeAutoObservable(this)
    }

    editModalHandler = (data) => {
        this.currentWorker = data
        this.editModal ? this.editModal = false : this.editModal = true
    }

    editWorkerHandler = () => {
        this.editWorker ? this.editWorker = false : this.editWorker = true
    }

    updateWorker = async (form) => {
        const temp = await WorkplaceService.getByName(form.workplace)
        runInAction(() => {
            let data = {}
            temp.forEach(doc => data = {
                docId: this.currentWorker.docId,
                name: form.name,
                lastName: form.lastName,
                age: Number(form.age),
                salary: Number(doc.data().Placa),
                workPlace: doc.data().Naziv,
                workPlaceId: doc.id,
                contract: form.contract
            })
            WorkerService.update(data)
            WorkerStore.getWorkers(DataListViewStore.fetchFunc)
            this.editModal = false 
        })
    }

    WorkplaceUpdate = async (data) => {
        await WorkerService.WorkplaceUpdate(data)
        runInAction(() => {
            WorkerStore.getWorkers()
        })
    }
}

export default new EditStore()