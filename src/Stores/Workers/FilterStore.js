import WorkerStore from './WorkerStore'
import { makeAutoObservable } from 'mobx'
import DataListViewStore from '../DataListViewStore'

class FilterStore {
    sortingType = {
        field: "Prezime",
        sorter: "asc"
    }
    filterTypeChecker = ""
    filter = false
    filterObj = {}

    constructor(){
        makeAutoObservable(this)
    }

    filterHandler = () => {
        if(this.filter) {
            this.filter = false
            this.filterTypeChecker = ""
            WorkerStore.getWorkers()
        } else {
            this.filter = true
        }
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
        WorkerStore.getWorkers(DataListViewStore.fetchFunc)
    }

    
}

export default new FilterStore()