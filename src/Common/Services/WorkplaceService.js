import {db} from './firebase-config'
import { 
    collection, 
    addDoc, 
    getDocs,
    getDoc, 
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
    FieldPath,
    writeBatch
} from 'firebase/firestore'
import WpFilterStore from '../../Stores/Workplaces/WpFilterStore'
import ToastStore from '../../Stores/ToastStore'
import AuthService from './AuthService'

class WorkerService {
    create = async (data) => {
        try {
            const collectionRef = collection(db, "WorkPlaces")
            await addDoc(collectionRef, {
                Naziv: data.name,
                Opis: data.descr,
                Placa: data.salary,
                Valuta: data.currency,
                User: AuthService.currentUser.uid
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Workplace is successfully added."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error adding workplace."
            })
        }
    }

    fetchSorter = () => {
        return WpFilterStore.sortingType
    }

    get = async () => {
        try {
            const sortData = await this.fetchSorter()
            const user = await AuthService.currentUser.uid
            const ref = query(collection(db, "WorkPlaces"), where("User", "==", user),
            sortData ? orderBy(sortData.field, sortData.sorter) : orderBy("Naziv", "asc"), 
            limit(7))
            return getDocs(ref)
        } catch (e) {
            console.error(e)
        }
    }
    
    getById = (id) => {
        return getDoc(doc(db, "WorkPlaces", id))
    }

    getByName = (docData) => {
        const q = query(collection(db, "WorkPlaces"), where("Naziv", "==", docData))
        return getDocs(q)
    }

    getNames = () => {
        const ref = collection(db, "WorkPlaces")
        return getDocs(ref)
    }

    update = async (data) => {
        try {
            const collectionRef = doc(db, "WorkPlaces", data.docId)
            await updateDoc(collectionRef, { 
                Naziv: data.name,
                Opis: data.descr,
                Placa: data.salary,
            })
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Workplace is successfully updated."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error updating workplace."
            })
        }
    }

    delete = async (id) => {
        try {
            const workplaceRef = doc(db, "WorkPlaces", id)
            const q = query(collection(db, "Workers"), where("IdRadnogMjesta", "==", id))
            const workersRef = await getDocs(q)
            const batch = writeBatch(db)
            workersRef.forEach(worker => {
                batch.delete(worker.ref)
            })
            await batch.commit()
            await deleteDoc(workplaceRef)
            ToastStore.notificationType({
                type: "SUCCESS",
                title: "Success!",
                message: "Workplace is successfully deleted."
            })
        } catch {
            ToastStore.notificationType({
                type: "ERROR",
                title: "Error!",
                message: "Error deleting workplace."
            })
        }
    }

    nextPage = (lastData, sortingType) => {
        const ref = query(collection(db, "WorkPlaces"), 
        orderBy(sortingType.field, sortingType.sorter), 
        startAfter(lastData), limit(7))
        return getDocs(ref)   
    }

    prevPage = (firstData, sortingType) => {
        const ref = query(collection(db, "WorkPlaces"), 
        orderBy(sortingType.field, sortingType.sorter), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }

    filterGet = (filterData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        limit(7))
        return getDocs(ref)
    }

    filterNextPage = (filterData, lastData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        startAfter(lastData), 
        limit(7))
        return getDocs(ref)   
    }

    filterPrevPage = (filterData, firstData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        orderBy(documentId(FieldPath)), 
        endBefore(firstData), 
        limitToLast(7))
        return getDocs(ref)
    }
}

export default new WorkerService()