import {db} from './firebase-config'
import { 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    deleteDoc, 
    updateDoc, 
    query, 
    where,
    orderBy,
    limit,
    startAfter,
    endBefore,
    limitToLast, 
    documentId,
    FieldPath
} from 'firebase/firestore'
import FilterStore from '../../Stores/Workers/FilterStore'
import ToastStore from '../../Stores/ToastStore'

class WorkerService {
    sortingType = {
        field: "Prezime",
        sorter: "asc"
    }

    constructor(){
        this.get()
    }

    create = async (data) => {
        try {
            const collectionRef = collection(db, "Workers")
            await addDoc(collectionRef, {
                Ime: data.name,
                Prezime: data.lastName,
                Dob: data.age,
                Placa: data.salary,
                Pozicija: data.workPlace,
                IdRadnogMjesta: data.workPlaceId,
                Ugovor: data.contract,
                Valuta: data.currency
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Worker is successfully added."
            }) 
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding new worker."
            })
        }
    }

    fetchSorter = () => {
        return this.sortingType = FilterStore.sortingType
    }

    get = async () => {
        try {
            const ref = query(
                collection(db, "Workers"), 
                orderBy(this.sortingType.field, this.sortingType.sorter), 
                limit(7)
            ) 
        return getDocs(ref)
        } catch (e) {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error loading workers."
            })
            console.error(e)
        }
    }

    update = async (data) => {
        try {
            const collectionRef = doc(db, "Workers", data.docId)
            await updateDoc(collectionRef, { 
                Ime: data.name,
                Prezime: data.lastName,
                Dob: data.age,
                Placa: data.salary,
                Pozicija: data.workPlace,
                Ugovor: data.contract
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Worker is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error editing worker."
            })
        }
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
    }

    delete = async (id) => {
        try {
            const collectionRef = doc(db, "Workers", id)
            await deleteDoc(collectionRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Worker is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting worker."
            })
        }
    }

    nextPage = (lastData, sortingType) => {
        const ref = query(collection(db, "Workers"), 
        orderBy(sortingType.field, sortingType.sorter), 
        startAfter(lastData), limit(7))
        return getDocs(ref)   
    }

    prevPage = (firstData, sortingType) => {
        const ref = query(collection(db, "Workers"), 
        orderBy(sortingType.field, sortingType.sorter), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

    filterGet = (filterData) => {
        const ref = query(collection(db, "Workers"), 
        where(filterData.field, filterData.operator, filterData.data), 
        limit(7))
        return getDocs(ref)
    }

    filterNextPage = (filterData, lastData) => {
        const ref = query(collection(db, "Workers"), 
        where(filterData.field, filterData.operator, filterData.data), 
        startAfter(lastData), 
        limit(7))
        return getDocs(ref)   
    }

    filterPrevPage = (filterData, firstData) => {
        const ref = query(collection(db, "Workers"), 
        where(filterData.field, filterData.operator, filterData.data), 
        orderBy(documentId(FieldPath)), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }
}

export default new WorkerService()