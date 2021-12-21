import React from 'react'
import {db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore'
// import { useStore } from '../Stores/StoreContext'
import {nanoid} from 'nanoid'


export const NewDataForm = () => {
    const phonesColectionRef = collection(db, "phoneMake")
    const [newName, setNewName] = React.useState("")
    // const dataStore = useStore()
    const createUser = async (user) => {
        await addDoc(phonesColectionRef, { name: newName, id: nanoid() })
        setNewName('')
    }
    return <>
        <input 
            value={newName} 
            onChange={(e) => setNewName(e.target.value)} 
            type="text"
            placeholder='Name...'
            />
        <button onClick={createUser}>Add New Phone</button>
    </>
}