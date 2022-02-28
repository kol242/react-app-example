import { auth } from './firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import WorkPlaceStore from '../../Stores/Workplaces/WorkPlaceStore'
import WorkerStore from '../../Stores/Workers/WorkerStore'
import { makeAutoObservable } from 'mobx'
import { db } from './firebase-config'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'

class AuthService {
    userData = {}
    currentUser
    loading
    loggedIn = false

    constructor() {
        makeAutoObservable(this)
    }

    signup = async (email, password, userData) => {
        const collectionRef = collection(db, "Users")
        await addDoc(collectionRef, {
            username: userData.username,
            company: userData.company,
            activity: userData.activity,
            country: userData.country,
            email: email
        })
        return createUserWithEmailAndPassword(auth, email, password)
    }

    login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            const ref = query(collection(db, "Users"), where("email", "==", email))
            const data = await getDocs(ref)
            data.forEach(doc => {
                return this.userData = {
                    username: doc.data().username,
                    country: doc.data().country,
                    activity: doc.data().activity,
                    company: doc.data().company,
                }
            })
            this.loggedIn = true
            return this.setCurrentUser() 
        } catch(err) {
            this.loggedIn = false
            console.error(err)
        }
        
    }

    setCurrentUser = () => {
        return auth.onAuthStateChanged(user => {
        this.currentUser = user
        this.loading = false
        })
    }

    logout = async () => {
        WorkPlaceStore.items = []
        WorkerStore.items = []
        await signOut(auth)
        this.loggedIn = false
        return this.setCurrentUser()
    }
}

export default new AuthService()