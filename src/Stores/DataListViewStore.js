import { makeAutoObservable } from 'mobx'
import FilterStore from './Workers/FilterStore'
import WorkerStore from './Workers/WorkerStore'
import WorkPlaceStore from './Workplaces/WorkPlaceStore'
import WpFilterStore from './Workplaces/WpFilterStore'

class DataListViewStore {
    constructor(){
        makeAutoObservable(this)
    }

    fetchFunc = (dataset) => {
        switch (dataset) {
            case 'workers':
                return WorkerStore.items
            case 'workplaces':
                return WorkPlaceStore.items
            default:
                return null
        }
    }

    nextPage = (dataset) => {
        switch (dataset) {
            case 'workers':
                return WorkerStore.nextPage()
            case 'workplaces':
                return WorkPlaceStore.nextPage()
            default:
                return null
        }
    }

    sorter = (dataset, value) => {
        switch (dataset) {
            case 'workers':
                return FilterStore.sorterType(value)
            case 'workplaces':
                return WpFilterStore.sorterType(value)
            default:
                return null
        }
    }

    pageLength = (dataset) => {
        switch (dataset) {
            case 'workers':
                return {
                    prevLength: WorkerStore.prevLength,
                    nextLength: WorkerStore.nextLength
                }
            case 'workplaces':
                return {
                    prevLength: WorkPlaceStore.prevLength,
                    nextLength: WorkPlaceStore.nextLength
                }
            default:
                return null
        }
    }

    prevPage = (dataset) => {
        switch (dataset) {
            case 'workers':
                return WorkerStore.prevPage()
            case 'workplaces':
                return WorkPlaceStore.prevPage()
            default:
                return null
        }
    }
}

export default new DataListViewStore()