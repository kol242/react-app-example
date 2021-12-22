import {db} from '../firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

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
            Pozicija: data.workPlace
        }).then(docRef => {
            data.docId = docRef.id
            this.tempData.push(data)
            this.setData(this.tempData)
        })
    }

    deleteWorker = async (id) => {
        const collectionRef = doc(db, "Workers", id)
        await deleteDoc(collectionRef)
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
                    workPlace: doc.data().Pozicija
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
                this.tempData[i].Ime = data.name
                this.tempData[i].Prezime = data.lastName
                this.tempData[i].Dob = data.age
                this.tempData[i].Placa = data.salary
                this.tempData[i].Pozicija = data.workPlace
            }
        }
        this.setData(this.tempData)
    }
    setData(data) {
        this.workers = data
    }
}

export default new WorkersStore()