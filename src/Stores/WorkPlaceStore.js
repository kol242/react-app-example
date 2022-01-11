import { makeAutoObservable } from 'mobx'
import WorkplaceService from './WorkplaceService'

class WorkPlaceStore {
    workPlaces = []
    searchedWorkplaces = []
    lastVisible = []
    firstVisible = []

    filterObj = {}
    sortingType = {
        field: "Naziv",
        sorter: "asc"
    }
    
    nextLength = 6
    prevLength = 6

    filterTypeChecker = "descr"
    newChecked = false
    newCheckedWP = false
    editChecked = false
    filter = false
    deletedChecked = false

    constructor(){
        makeAutoObservable(this)
        this.getWorkplaces()
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

    filterHandler = () => {
        if(this.filter) {
            this.filter = false
            this.getWorkplaces()
        } else {
            this.filter = true
        }
    }

    createWorkplace = async (data) => {
        WorkplaceService.create(data)
        this.newWorkplaceChecker()
    }

    deleteWorkplace = async (id) => {
        WorkplaceService.delete(id)
        this.deletedWPChecker()
    }

    filterTypeHandler = (type) => {
        this.filterTypeChecker = type
    }

    filterValues = async (input) => {
        switch(this.filterTypeChecker) {
            case 'descr':
                this.filterObj = {
                    field: "Opis",
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
            case 'workplace':
                this.filterObj = {
                    field: "Naziv",
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
        if(this.nextLength || this.prevLength < 6) {
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
        this.editWorkplaceChecker()
    }
}

export default new WorkPlaceStore()