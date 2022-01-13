import { makeAutoObservable } from 'mobx'
import WorkerService from '../Common/Services/WorkerService'

class WorkerStore {
    workers = []
    searchedWorkers = []

    lastVisible = []
    firstVisible = []

    filterObj = {}
    sortingType = {
        field: "Prezime",
        sorter: "asc"
    }
    
    nextLength = 6
    prevLength = 6

    filterTypeChecker = "lastName"
    isEdited = false
    isDeleted = false
    filter = false
    editWorker = false
    
    constructor(){
        makeAutoObservable(this)
        this.getWorkers()
    }

    deleteChecker = () => {
        this.isDeleted = true
        setTimeout(() => {this.isDeleted = false}, 3000)
    }

    editChecker = () => {
        this.isEdited = true
        setTimeout(() => {this.isEdited = false}, 3000)
    }

    filterHandler = () => {
        if(this.filter) {
            this.filter = false
            this.getWorkers()
        } else {
            this.filter = true
        }
    }

    editWorkerHandler = () => {
        this.editWorker ? this.editWorker = false : this.editWorker = true
    }

    filterTypeHandler = (type) => {
        this.filterTypeChecker = type
    }

    filterValues = (input) => {
        switch(this.filterTypeChecker) {
            case 'lastName':
                this.filterObj = {
                    field: "Prezime",
                    operator: "==",
                    data: input.keyWord
                }
            break
            case 'salaryMore':
            this.filterObj = {
                field: "Placa",
                operator: ">",
                data: Number(input.salaryMore)
            }
            break
            case 'salaryLess':
            this.filterObj = {
                field: "Placa",
                operator: "<",
                data: Number(input.salaryLess)
            }
            break
            case 'ageMore':
                this.filterObj = {
                    field: "Dob",
                    operator: ">",
                    data: Number(input.ageMore)
                }
            break
            case 'ageLess':
                this.filterObj = {
                    field: "Dob",
                    operator: "<",
                    data: Number(input.ageLess)
                }
            break
            case 'contract':
                this.filterObj = {
                    field: "Ugovor",
                    operator: "==",
                    data: input.contract
                }
            break
            case 'workplace':
                this.filterObj = {
                    field: "Pozicija",
                    operator: "==",
                    data: input.workPlace
                }
            break
            default: 
                return null
        }
    }

    sorterType = (sortingType) => {
        switch(sortingType) {
            case 'nameAsc':
                this.sortingType = {
                    field: "Prezime",
                    sorter: "asc"
                }
            break
            case 'nameDesc':
                this.sortingType = {
                    field: "Prezime",
                    sorter: "desc"
                }
            break
            case 'salaryDesc': 
                this.sortingType = {
                    field: "Placa",
                    sorter: "desc"
                }
            break
            case 'salaryAsc': 
                this.sortingType = {
                    field: "Placa",
                    sorter: "asc"
                }
            break
            case 'ageDesc': 
                this.sortingType = {
                    field: "Dob",
                    sorter: "desc"
                }
            break
            case 'ageAsc': 
                this.sortingType = {
                    field: "Dob",
                    sorter: "asc"
                }
            break
            default: 
                return null
        }
        this.getWorkers()
    }

    createWorker = (data) => {
        WorkerService.create(data)
        this.getWorkers()
    }

    updateWorker = (data) => {
        WorkerService.update(data)
        this.getWorkers()
        this.editChecker()
    }

    WorkplaceUpdate = (data) => {
        WorkerService.WorkplaceUpdate(data)
        this.getWorkers()
    }

    deleteWorker = (id) => {
        WorkerService.delete(id)
        this.deleteChecker()
        this.getWorkers()
    }

    getWorkers = async () => {
        const documentSnapshot = await (
            this.filter ? WorkerService.filterGet(this.filterObj) 
            : WorkerService.get(this.sortingType)
        )
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
    }

    prevPage = async () => {
        const documentSnapshot = await ( 
            this.filter ? WorkerService.filterPrevPage(this.filterObj, this.firstVisible) 
            : WorkerService.prevPage(this.firstVisible, this.sortingType) 
        )
        this.prevLength = documentSnapshot.docs.length
        if(this.nextLength < 6) {
            this.nextLength = 6
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
    }

    nextPage = async () => {
        const documentSnapshot = await ( 
            this.filter ? WorkerService.filterNextPage(this.filterObj, this.lastVisible) 
            : WorkerService.nextPage(this.lastVisible, this.sortingType) 
        )
        this.nextLength = documentSnapshot.docs.length
        if(this.prevLength < 6) {
            this.prevLength = 6
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
    }
}

export default new WorkerStore()