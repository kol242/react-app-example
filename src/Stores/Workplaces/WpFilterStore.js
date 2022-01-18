import WorkPlaceStore from './WorkPlaceStore'
import { makeAutoObservable} from 'mobx'

class WpFilterStore {
    filterObj = {}
    sortingType = {
        field: "Naziv",
        sorter: "asc"
    }
    filterTypeChecker = ""
    filter = false

    constructor() {
        makeAutoObservable(this)
    }

    filterHandler = () => {
        if(this.filter) {
            this.filter = false
            this.filterTypeChecker = ""
            WorkPlaceStore.getWorkplaces()
        } else {
            this.filter = true
        }
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
        WorkPlaceStore.getWorkplaces()
    }
}

export default new WpFilterStore()