import {db} from '../firebase-config'
import {addDoc, collection } from 'firebase/firestore'
import {nanoid} from 'nanoid'


export function createStore() {
    const phonesColectionRef = collection(db, "phoneMake")
    return {
        phones: [],

        async createUser(name){
            await addDoc(phonesColectionRef, { name: name, id: nanoid() })
        },
    }
}