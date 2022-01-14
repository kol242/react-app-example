import { makeAutoObservable } from 'mobx'
import WorkplaceService from '../Common/Services/WorkplaceService'

class WorkPlaceStore {
    workPlaces = []
    names = []
    searchedWorkplaces = []
    lastVisible = []
    firstVisible = []
    deleteId = ""

    filterObj = {}
    sortingType = {
        field: "Naziv",
        sorter: "asc"
    }
    
    nextLength = 6
    prevLength = 6

    filterTypeChecker = ""
    newChecked = false
    newCheckedWP = false
    editChecked = false
    filter = false
    deletedChecked = false
    newWorkplace = false
    newWorker = false
    editWorkplace = false
    deleteModal = false

    constructor(){
        makeAutoObservable(this)
        this.getWorkplaces()
        this.getNames()
    }

    newWorkerChecker = () => {
        this.newChecked = true
        setTimeout(() => {this.newChecked = false}, 3000)
    }

    deletedWPChecker = () => {
        this.deletedChecked = true
        setTimeout(() => {this.deletedChecked = false}, 3000)
    }

    editWorkplaceChecker = () => {
        this.editChecked = true
        setTimeout(() => {this.editChecked = false}, 3000)
    }

    newWorkplaceChecker = () => {
        this.newCheckedWP = true
        setTimeout(() => {this.newCheckedWP = false}, 3000)
    }

    newHandler = () => {
        this.newWorkplace ? this.newWorkplace = false : this.newWorkplace = true
    }
    
    newWorkerHandler = () => {
        this.newWorker ? this.newWorker = false : this.newWorker = true
    }
    
    editHandler = () => {
        this.editWorkplace ? this.editWorkplace = false : this.editWorkplace = true
    }

    filterHandler = () => {
        if(this.filter) {
            this.filter = false
            this.filterTypeChecker = ""
            this.getWorkplaces()
        } else {
            this.filter = true
        }
    }

    deleteModalHandler = (id) => {
        this.deleteModal ? this.deleteModal = false : this.deleteModal = true
        this.deleteId = id 
    }

    createWorkplace = async (data) => {
        WorkplaceService.create(data)
        this.getWorkplaces()
        this.getNames()
        this.newWorkplaceChecker()
    }

    deleteWorkplace = async () => {
        WorkplaceService.delete(this.deleteId)
        this.getWorkplaces()
        this.getNames()
        this.deletedWPChecker()
        this.deleteId = ""
        this.deleteModal = false
    }

    filterTypeHandler = (type) => {
        this.filterTypeChecker = type
    }

    filterValues = async (input) => {
        switch(this.filterTypeChecker) {
            case 'name':
                this.filterObj = {
                    field: "Naziv",
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
            default: 
                return null
        }
    }

    sorterType = (sortingType) => {
        switch(sortingType) {
            case 'nameAsc':
                this.sortingType = {
                    field: "Naziv",
                    sorter: "asc"
                }
            break
            case 'nameDesc':
                this.sortingType = {
                    field: "Naziv",
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
            default: 
                return null
        }
        this.getWorkplaces()
    }

    getWorkplaces = async () => {
        const documentSnapshot = await (
            this.filter ? WorkplaceService.filterGet(this.filterObj) 
            : WorkplaceService.get(this.sortingType)
        )
        this.prevLength = null
        this.nextLength = documentSnapshot.docs.length
        const docs = documentSnapshot.docs.slice(0,5)
            this.tempData = []
            docs.forEach(doc => {
                let temp = {
                    docId: doc.id,
                    name: doc.data().Naziv,
                    descr: doc.data().Opis,
                    salary: doc.data().Placa
                }
                this.tempData.push(temp)
            })
        this.workPlaces = this.tempData
        this.lastVisible = docs[docs.length-1]
        this.firstVisible = docs[0]
    }
    
    getNames = async () => {
        const docs = await WorkplaceService.getNames()
        this.tempData = []
        docs.forEach(doc => {
            let temp = {
                id: doc.id,
                name: doc.data().Naziv
            }
            this.tempData.push(temp)
        })
        this.names = this.tempData
    }

    prevPage = async () => {
        const documentSnapshot = await ( 
            this.filter ? WorkplaceService.filterPrevPage(this.filterObj, this.firstVisible) 
            : WorkplaceService.prevPage(this.firstVisible, this.sortingType) 
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
                name: doc.data().Naziv,
                descr: doc.data().Opis,
                salary: doc.data().Placa
            }
            this.tempData.push(temp)
        })
        this.workPlaces = this.tempData
        this.lastVisible = docs[docs.length-1]
        this.firstVisible = docs[0]
    }

    nextPage = async () => {
        const documentSnapshot = await ( 
            this.filter ? WorkplaceService.filterNextPage(this.filterObj, this.lastVisible) 
            : WorkplaceService.nextPage(this.lastVisible, this.sortingType) 
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
                name: doc.data().Naziv,
                descr: doc.data().Opis,
                salary: doc.data().Placa
            }
            this.tempData.push(temp)
        })
        this.workPlaces = this.tempData
        this.lastVisible = docs[docs.length-1]
        this.firstVisible = docs[0]  
    }

    updateWorkplace = async (data) => {
        WorkplaceService.update(data)
        this.getWorkplaces()
        this.getNames()
        this.editWorkplaceChecker()
    }
}

export default new WorkPlaceStore()