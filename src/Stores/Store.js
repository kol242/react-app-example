import {db} from '../firebase-config'
import { makeAutoObservable } from 'mobx'
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore'

class PhoneStore {
    phones = [];
    constructor(){
        makeAutoObservable(this)
        this.getPhones()
    }

    createPhone = async (data) => {
        const collectionRef = collection(db, "PhoneBrands")
        await addDoc(collectionRef, {Name: data.name} ).then(docRef => {
            data.docId = docRef.id
            this.tempData.push(data)
            this.setData(this.tempData)
        })
    }

    deletePhone = async (id) => {
        const collectionRef = doc(db, "PhoneBrands", id)
        await deleteDoc(collectionRef)
    }

    getPhones = async () => {
        const collectionRef = collection(db, "PhoneBrands")
        await getDocs(collectionRef).then((el) => {
            this.tempData = []
            el.forEach(doc => {
                let temp = {
                    docId: doc.id,
                    name: doc.data().Name
                }
                this.tempData.push(temp)
            })
            this.setData(this.tempData)
            console.log(this.tempData)
        })
    }

    setData(data) {
        this.phones = data
    }
}

export default new PhoneStore()