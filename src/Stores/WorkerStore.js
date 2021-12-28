import {db} from '../firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore'

class WorkersStore {
    workers = [];
    constructor(){
        makeAutoObservable(this)
        this.getWorkers()
    }

    createWorker = async (data) => {
        const collectionRef = collection(db, "Workers")
        await addDoc(collectionRef, {
            Ime: data.name,
            Prezime: data.lastName,
            Dob: data.age,
            Placa: data.salary,
            Pozicija: data.workPlace,
            IdRadnogMjesta: data.workPlaceId
        }).then(docRef => {
            data.docId = docRef.id
            this.tempData.push(data)
            this.setData(this.tempData)
        })
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
                    workPlaceId: doc.data().IdRadnogMjesta
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
}

export default new WorkersStore()