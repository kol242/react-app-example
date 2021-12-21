// import { useObserver } from 'mobx-react'
import { NewDataForm } from './Components/NewDataForm'
// import { useStore } from './Stores/StoreContext'
import { useEffect, useState } from 'react'
import {db} from './firebase-config'
import {collection, deleteDoc, doc, getDocs} from 'firebase/firestore'

function App() {
  // const dataStore = useStore()
  const [phones, setPhones] = useState([])
  const phonesColectionRef = collection(db, "phoneMake")

  const deletePhone = async (id) => {
    const phoneDoc = doc(db, "phoneMake", id)
    await deleteDoc(phoneDoc)
  }

  useEffect(() => {
    const getPhones = async () => {
      const data = await getDocs(phonesColectionRef)
      setPhones(data.docs.map((doc) => ({...doc.data(), docId: doc.id})))
    }
    getPhones()
  })

  return (
    <>
      <h1>Test Project</h1>
      <h2>Phone List</h2>
      <ul>
        {phones.map((phone, index) => (
        <div>
          <li key={index}>
          {phone.name} <button onClick={() => {deletePhone(phone.docId)}}>Delete Phone</button>
          </li>          
        </div>
        ))}
      </ul>
      <NewDataForm/>
    </>
  );
}

export default App;
