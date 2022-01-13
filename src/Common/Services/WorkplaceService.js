import {db} from '../firebase-config'
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
    FieldPath
} from 'firebase/firestore'


class WorkerService {
    constructor(){
        this.get()
        this.getNames()
    }

    create = async (data) => {
        const collectionRef = collection(db, "WorkPlaces")
        await addDoc(collectionRef, {
            Naziv: data.name,
            Opis: data.descr,
            Placa: data.salary,
        })
    }

    get = async (sortingType) => {
        const sortData = await sortingType
        const ref = query(collection(db, "WorkPlaces"), 
        orderBy(sortData.field, sortData.sorter), 
        limit(6))
        return getDocs(ref)
    }
    
    getById = async (id) => {
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
        const collectionRef = doc(db, "WorkPlaces", data.docId)
        await updateDoc(collectionRef, { 
            Naziv: data.name,
            Opis: data.descr,
            Placa: data.salary,
        })
    }

    delete = async (id) => {
        const collectionRef = doc(db, "WorkPlaces", id)
        await deleteDoc(collectionRef)
    }

    nextPage = (lastData, sortingType) => {
        const ref = query(collection(db, "WorkPlaces"), 
        orderBy(sortingType.field, sortingType.sorter), 
        startAfter(lastData), limit(6))
        return getDocs(ref)   
    }

    prevPage = (firstData, sortingType) => {
        const ref = query(collection(db, "WorkPlaces"), 
        orderBy(sortingType.field, sortingType.sorter), 
        endBefore(firstData), 
        limitToLast(6))
        return getDocs(ref)
    }

    filterGet = (filterData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        limit(6))
        return getDocs(ref)
    }

    filterNextPage = (filterData, lastData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        startAfter(lastData), 
        limit(6))
        return getDocs(ref)   
    }

    filterPrevPage = (filterData, firstData) => {
        const ref = query(collection(db, "WorkPlaces"), 
        where(filterData.field, filterData.operator, filterData.data), 
        orderBy(documentId(FieldPath)), 
        endBefore(firstData), 
        limitToLast(6))
        return getDocs(ref)
    }
}

export default new WorkerService()