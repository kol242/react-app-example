import {db} from '../firebase-config'
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


class WorkerService {
    constructor(){
        this.get()
    }

    create = async (data) => {
        const collectionRef = collection(db, "Workers")
        await addDoc(collectionRef, {
            Ime: data.name,
            Prezime: data.lastName,
            Dob: data.age,
            Placa: data.salary,
            Pozicija: data.workPlace,
            IdRadnogMjesta: data.workPlaceId,
            Ugovor: data.contract
        })
    }

    get = async (sortingType) => {
        const sortData = await sortingType
        const ref = query(collection(db, "Workers"), 
        orderBy(sortData.field, sortData.sorter), 
        limit(7))
        return getDocs(ref)
    }

    update = async (data) => {
        const collectionRef = doc(db, "Workers", data.docId)
        await updateDoc(collectionRef, { 
            Ime: data.name,
            Prezime: data.lastName,
            Dob: data.age,
            Placa: data.salary,
            Pozicija: data.workPlace,
            Ugovor: data.contract
        })
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
        const collectionRef = doc(db, "Workers", id)
        await deleteDoc(collectionRef)
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