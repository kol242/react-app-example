import {db} from '../firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore'

class WorkPlaceStore {
    workPlaces = [];
    constructor(){
        makeAutoObservable(this)
        this.getWorkplaces()
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
    }
    setData(data) {
        this.workPlaces = data
    }
}

export default new WorkPlaceStore()