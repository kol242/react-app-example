import WorkerStore from './WorkerStore'
import { runInAction, makeAutoObservable } from 'mobx'
import WorkerService from '../../Common/Services/WorkerService'
import WorkplaceService from '../../Common/Services/WorkplaceService'

class CreateStore {
    newWorker = false
    createModal = false
    workplaceData = ""
    contracts = ["Određeno", "Neodređeno"]
    
    constructor(){
        makeAutoObservable(this)
    }

    createModalHandler = (data) => {
        this.workplaceData = data
        this.createModal ? this.createModal = false : this.createModal = true
    }

    createWorker = async (form) => {
        const collectionRef = await WorkplaceService.getById(this.workplaceData.docId)
        runInAction(() => {
            let data = {
                docId: "",
                name: form.name,
                lastName: form.lastName,
                age: Number(form.age),
                workPlaceId: this.workplaceData.docId,
                workPlace: collectionRef.data().Naziv,
                currency: collectionRef.data().Valuta,
                salary: Number(collectionRef.data().Placa),
                contract: form.contract
            }
            WorkerService.create(data)
            WorkerStore.getWorkers()
            this.createModal = false 
        })
    }

    newWorkerHandler = () => {
        this.newWorker ? this.newWorker = false : this.newWorker = true
    }

}

export default new CreateStore()