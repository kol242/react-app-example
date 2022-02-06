import { makeAutoObservable } from 'mobx'

class DataListViewStore {
    dataset = []

    constructor(){
        makeAutoObservable(this)
    }

    fetchFunc = (data) => {
        return this.dataset = data
    }
    
    nextPage = (data) => {
        return this.dataset = data
    }

    prevPage = (data) => {
        return this.dataset = data
    }

    sorter = (data) => {
        return this.dataset = data
    }

}

export default new DataListViewStore()