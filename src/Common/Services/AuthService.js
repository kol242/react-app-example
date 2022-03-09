import { auth } from './firebase-config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword } from 'firebase/auth'
import WorkPlaceStore from '../../Stores/Workplaces/WorkPlaceStore'
import WorkerStore from '../../Stores/Workers/WorkerStore'
import { makeAutoObservable } from 'mobx'
import { db } from './firebase-config'
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import ToastStore from '../../Stores/ToastStore'

class AuthService {
    userData = {}
    currentUser
    loggedIn = false
    signupChecker = false

    constructor() {
        makeAutoObservable(this)
    }

    signup = async (userData) => {
        try {
            const collectionRef = collection(db, "Users")
            await addDoc(collectionRef, {
                username: userData.username,
                company: userData.company,
                activity: userData.activity,
                country: userData.country,
                email: userData.email
            })
            createUserWithEmailAndPassword(auth, userData.email, userData.password)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "You successfully signed up. Log In to continue."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Signup failed!",
                message: "Something went wrong..."
            })
        }
        
    }

    login = async (userData) => {
        try {
            await signInWithEmailAndPassword(auth, userData.email, userData.password)
            this.getUserData(userData.email)
            this.loggedIn = true
            return this.setCurrentUser() 
        } catch(err) {
            this.loggedIn = false
            ToastStore.notificationType({
                type: "ERROR",
                title: "Login failed!",
                message: "Wrong email or password."
            })
            console.error(err)
        }
        
    }

    getUserData = async (email) => {
        const ref = query(collection(db, "Users"), where("email", "==", email))
        const data = await getDocs(ref)
        data.forEach(doc => {
            return this.userData = {
                username: doc.data().username,
                country: doc.data().country,
                activity: doc.data().activity,
                company: doc.data().company,
                id: doc.id,
            }
        })
    }

    setCurrentUser = () => {
        return auth.onAuthStateChanged(user => {
        this.currentUser = user
        })
    }

    logout = async () => {
        WorkPlaceStore.items = []
        WorkerStore.items = []
        await signOut(auth)
        this.loggedIn = false
        this.signupChecker = false
        ToastStore.notificationType({
            type: "SUCCESS",
            title: "Success!",
            message: "You are successfully logged out!"
        })
        return this.setCurrentUser()
    }

    userUpdate = async (userData) => {
        try {
            updateEmail(this.currentUser, this.currentUser.email)
            updatePassword(this.currentUser, userData.password)
            const collectionRef = doc(db, "Users", this.userData.id)
            await updateDoc(collectionRef, { 
                activity: userData.activity,
                company: userData.company,
                country: userData.country,
                username: userData.username,
                email: userData.email
            })
            this.getUserData(this.currentUser.email)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Your profile is successfully updated!"
            })    
        } catch(err) {
            console.error(err)
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating profile."
            })
        }
    }
}

export default new AuthService()