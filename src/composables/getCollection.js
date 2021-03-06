import { ref, watchEffect } from 'vue'

// firebase imports
import { db } from '../firebase/config'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

const getCollection = (c, q) => {
    const documents = ref(null)

    // collection reference
    let colRef = collection(db, c)

    // if we do pass in a query then it will update the colRef
    if(q){
        colRef = query(colRef, where(...q))
    }


    // go into collection and fetch realtime data
    const unsub = onSnapshot(colRef, snapshot => {
        let results = []
        snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
        })

        //update values
        documents.value = results
    })

    // used to unsubscribe from snapshot on unmounting
    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { documents }
}

export default getCollection