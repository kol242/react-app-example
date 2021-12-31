import {db} from '../Common/firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

class WorkPlaceStore {
    workPlaces = []
    searchedWorkplaces = []
    newChecked = false
    newCheckedWP = false
    editChecked = false
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

    createWorkplace = async (data) => {
        const collectionRef = collection(db, "WorkPlaces")
        await addDoc(collectionRef, {
            Naziv: data.name,
            Opis: data.descr,
            Placa: data.salary,
        }).then(docRef => {
            data.docId = docRef.id
            this.tempData.push(data)
            this.setData(this.tempData)
        })
    }

    deleteWorkplace = async (id) => {
        const collectionRef = doc(db, "WorkPlaces", id)
        await deleteDoc(collectionRef)
        for(let i = 0; i < this.tempData.length; i++) {
            if(this.tempData[i].docId === id) {
                this.tempData.splice(i, 1)
            }
        }
        this.setData(this.tempData)
    }

    refreshData = () => {
        this.searchedWorkplaces = []
    }

    searchHandler = async (input) => {
        for(let i = 0; i < this.tempData.length; i++) {
            this.query = this.tempData.filter(el => el.descr.toUpperCase() === input.keyWord.toUpperCase() 
            || (el.salary >= input.salaryRange1 && el.salary <= input.salaryRange2)
            || el.name === input.workPlace
            )
        }
        this.setSearchedData(this.query)
    }

    sorter = (sortingType) => {
        switch(sortingType) {
            case 'a>':
                this.workPlaces.sort((a, b) => {
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()
                    if (nameA < nameB) {
                        return -1
                    }
                    if (nameA > nameB) {
                        return 1
                    }
                    return 0
                })
            break
            case 'a<':
                this.workPlaces.sort((a, b) => {
                    const nameA = a.name.toUpperCase()
                    const nameB = b.name.toUpperCase()
                    if (nameA > nameB) {
                        return -1
                    }
                    if (nameA < nameB) {
                        return 1
                    }
                    return 0
                })
            break
            case 'p>': 
                this.workPlaces.sort((a, b) => {
                    return b.salary - a.salary
                })
            break
            case 'p<': 
                this.workPlaces.sort((a, b) => {
                    return a.salary - b.salary
                })
            break
            default: 
                console.log()
        }
    }

    getWorkplaces = async () => {
        const collectionRef = collection(db, "WorkPlaces")
        await getDocs(collectionRef).then((el) => {
            this.tempData = []
            el.forEach(doc => {
                let temp = {
                    docId: doc.id,
                    name: doc.data().Naziv,
                    descr: doc.data().Opis,
                    salary: doc.data().Placa
                }
                this.tempData.push(temp)
            })
            this.setData(this.tempData)
        })
    }

    updateWorkplace = async (data) => {
        const collectionRef = doc(db, "WorkPlaces", data.docId)
        await updateDoc(collectionRef, { 
            Naziv: data.name,
            Opis: data.descr,
            Placa: data.salary,
        })
        for(let i = 0; i < this.tempData.length; i++) {
            if(this.tempData[i].docId === data.docId) {
                this.tempData[i].name = data.name
                this.tempData[i].descr = data.descr
                this.tempData[i].salary = data.salary
            }
        }
        this.setData(this.tempData)
        this.setSearchedData(this.tempData)
        this.editWorkplaceChecker()
    }

    setData(data) {
        this.workPlaces = data
    }

    setSearchedData(data) {
        this.searchedWorkplaces = data
    }
}

export default new WorkPlaceStore()