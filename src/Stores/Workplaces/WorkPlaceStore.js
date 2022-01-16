import { makeAutoObservable } from 'mobx'
import WorkplaceService from '../../Common/Services/WorkplaceService'
import WpFilterStore from './WpFilterStore'

class WorkPlaceStore {
    workPlaces = []
    names = []
    lastVisible = []
    firstVisible = []

    nextLength = 7
    prevLength = 7

    constructor(){
        makeAutoObservable(this)
        this.getWorkplaces()
        this.getNames()
    }

    getWorkplaces = async () => {
        const documentSnapshot = await (
            WpFilterStore.filter ? WorkplaceService.filterGet(WpFilterStore.filterObj) 
            : WorkplaceService.get(WpFilterStore.sortingType)
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
            WpFilterStore.filter ? WorkplaceService.filterPrevPage(WpFilterStore.filterObj, this.firstVisible) 
            : WorkplaceService.prevPage(this.firstVisible, WpFilterStore.sortingType) 
        )
        this.prevLength = documentSnapshot.docs.length
        if(this.nextLength < 7) {
            this.nextLength = 7
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
            WpFilterStore.filter ? WorkplaceService.filterNextPage(WpFilterStore.filterObj, this.lastVisible) 
            : WorkplaceService.nextPage(this.lastVisible, WpFilterStore.sortingType) 
        )
        this.nextLength = documentSnapshot.docs.length
        if(this.prevLength < 7) {
            this.prevLength = 7
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
}

export default new WorkPlaceStore()