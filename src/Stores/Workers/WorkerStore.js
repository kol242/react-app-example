import FilterStore from './FilterStore'
import WorkerService from '../../Common/Services/WorkerService'
import { runInAction, makeAutoObservable } from 'mobx'

class WorkerStore {
    workers = []
    lastVisible = []
    firstVisible = []
    nextLength = 7
    prevLength = 7

    constructor(){
        makeAutoObservable(this)
        this.getWorkers()
    }

    getWorkers = async () => {
        const documentSnapshot = await (
            FilterStore.filter ? WorkerService.filterGet(FilterStore.filterObj) 
            : WorkerService.get(FilterStore.sortingType)
        )
        runInAction(() => {
            this.prevLength = null
            this.nextLength = documentSnapshot.docs.length
            const docs = documentSnapshot.docs.slice(0,5)
                this.tempData = []
                docs.forEach(doc => {
                    let temp = {
                        docId: doc.id,
                        name: doc.data().Ime,
                        lastName: doc.data().Prezime,
                        age: doc.data().Dob,
                        salary: doc.data().Placa,
                        workPlace: doc.data().Pozicija,
                        workPlaceId: doc.data().IdRadnogMjesta,
                        contract: doc.data().Ugovor
                    }
                    this.tempData.push(temp)
                })
            this.workers = this.tempData
            this.lastVisible = docs[docs.length-1]
            this.firstVisible = docs[0] 
        })
    }

    prevPage = async () => {
        const documentSnapshot = await ( 
            FilterStore.filter ? WorkerService.filterPrevPage(FilterStore.filterObj, this.firstVisible) 
            : WorkerService.prevPage(this.firstVisible, FilterStore.sortingType) 
        )
        runInAction(() => {
            this.prevLength = documentSnapshot.docs.length
            if(this.nextLength < 7) {
                this.nextLength = 7
            }
            const docs = documentSnapshot.docs.slice(0,5)
            this.tempData = []
            docs.forEach(doc => {
                let temp = {
                    docId: doc.id,
                    name: doc.data().Ime,
                    lastName: doc.data().Prezime,
                    age: doc.data().Dob,
                    salary: doc.data().Placa,
                    workPlace: doc.data().Pozicija,
                    workPlaceId: doc.data().IdRadnogMjesta,
                    contract: doc.data().Ugovor
                }
                this.tempData.push(temp)
            })
            this.workers = this.tempData
            this.lastVisible = docs[docs.length-1]
            this.firstVisible = docs[0]
        })
    }

    nextPage = async () => {
        const documentSnapshot = await ( 
            FilterStore.filter ? WorkerService.filterNextPage(FilterStore.filterObj, this.lastVisible) 
            : WorkerService.nextPage(this.lastVisible, FilterStore.sortingType) 
        )
        runInAction(() => {
            this.nextLength = documentSnapshot.docs.length
            if(this.prevLength < 7) {
                this.prevLength = 7
            }
            const docs = documentSnapshot.docs.slice(0,5)
            this.tempData = []
            docs.forEach(doc => {
                let temp = {
                    docId: doc.id,
                    name: doc.data().Ime,
                    lastName: doc.data().Prezime,
                    age: doc.data().Dob,
                    salary: doc.data().Placa,
                    workPlace: doc.data().Pozicija,
                    workPlaceId: doc.data().IdRadnogMjesta,
                    contract: doc.data().Ugovor
                }
                this.tempData.push(temp)
            })
            this.workers = this.tempData
            this.lastVisible = docs[docs.length-1]
            this.firstVisible = docs[0]
        })
    }
}

export default new WorkerStore()