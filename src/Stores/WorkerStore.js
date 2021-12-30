import {db} from '../Common/firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore'

class WorkersStore {
    workers = []
    searchedWorkers = []
    editChecked = false
    deletedChecked = false
    constructor(){
        makeAutoObservable(this)
        this.getWorkers()
    }

    deleteChecker = () => {
        this.deletedChecked = true
        setTimeout(() => {this.deletedChecked = false}, 3000)
    }

    editWorkerChecker = () => {
        this.editChecked = true
        setTimeout(() => {this.editChecked = false}, 3000)
    }

    createWorker = async (data) => {
        const collectionRef = collection(db, "Workers")
        await addDoc(collectionRef, {
            Ime: data.name,
            Prezime: data.lastName,
            Dob: data.age,
            Placa: data.salary,
            Pozicija: data.workPlace,
            IdRadnogMjesta: data.workPlaceId,
            Ugovor: data.contract
        }).then(docRef => {
            data.docId = docRef.id
            this.tempData.push(data)
            this.setData(this.tempData)
        })
    }

    refreshData = () => {
        this.searchedWorkers = []
    }


    searchHandler = (input) => {
        for(let i = 0; i < this.tempData.length; i++) {
            this.query = this.tempData.filter(el => 
                el.lastName.toUpperCase() === input.keyWord.toUpperCase() || (el.salary >= input.salaryRange1 && el.salary <= input.salaryRange2)
                || (el.age >= input.ageRange1 && el.age <= input.ageRange2)
                || el.workPlace === input.workPlace
                || el.contract === input.contract
            )
        }
        this.setSearchedData(this.query)
    }

    sorter = (sortingType) => {
        switch(sortingType) {
            case 'a>':
                this.workers.sort((a, b) => {
                    const nameA = a.lastName.toUpperCase()
                    const nameB = b.lastName.toUpperCase()
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
                this.workers.sort((a, b) => {
                    const nameA = a.lastName.toUpperCase()
                    const nameB = b.lastName.toUpperCase()
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
                this.workers.sort((a, b) => {
                    return b.salary - a.salary
                })
            break
            case 'p<': 
                this.workers.sort((a, b) => {
                    return a.salary - b.salary
                })
            break
            case 'g<': 
                this.workers.sort((a, b) => {
                    return b.age - a.age
                })
            break
            case 'g>': 
                this.workers.sort((a, b) => {
                    return a.age - b.age
                })
            break
            default: 
                console.log()
        }
    }

    deleteWorker = async (id) => {
        const collectionRef = doc(db, "Workers", id)
        await deleteDoc(collectionRef)
        for(let i = 0; i < this.tempData.length; i++) {
            if(this.tempData[i].docId === id) {
                this.tempData.splice(i, 1)
            }
        }
        this.setData(this.tempData)
    }

    getWorkers = async () => {
        const collectionRef = collection(db, "Workers")
        await getDocs(collectionRef).then((el) => {
            this.tempData = []
            el.forEach(doc => {
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
            this.setData(this.tempData)
        })
    }

    updateWorker = async (data) => {
        const collectionRef = doc(db, "Workers", data.docId)
        await updateDoc(collectionRef, { 
            Ime: data.name,
            Prezime: data.lastName,
            Dob: data.age,
            Placa: data.salary,
            Pozicija: data.workPlace
        })
        for(let i = 0; i < this.tempData.length; i++) {
            if(this.tempData[i].docId === data.docId) {
                this.tempData[i].name = data.name
                this.tempData[i].lastName = data.lastName
                this.tempData[i].age = data.age
                this.tempData[i].salary = data.salary
                this.tempData[i].workPlace = data.workPlace
            }
        }
        this.setData(this.tempData)
    }

    WorkplaceUpdate = async (data) => {
        const q = query(collection(db, "Workers"), where("IdRadnogMjesta", "==", data.docId))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((el) => {
            let tempData = doc(db, "Workers", el.id)
            updateDoc(tempData, {
                Pozicija: data.name,
                Placa: data.salary
            })
        })
        for(let i = 0; i < this.tempData.length; i++) {
            if(this.tempData[i].workPlaceId === data.docId) {
                this.tempData[i].salary = data.salary
                this.tempData[i].workPlace = data.name
            }
        }
        this.setData(this.tempData)
    }

    setData(data) {
        this.workers = data
    }

    setSearchedData(data) {
        this.searchedWorkers = data
    }
}

export default new WorkersStore()