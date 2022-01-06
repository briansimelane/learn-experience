import { ref } from 'vue'

//firebase imports
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { db } from "@/firebase/config";
import { doc, setDoc } from "firebase/firestore";

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        if(!res) {
            throw new Error('Could not complete signup')
        }

        // update displayName and add user to user collection
        updateProfile(auth.currentUser, {
        displayName: displayName /*, photoURL: "https://example.com/jane-q-user/profile.jpg" */    
        })

      setDoc(doc(db, 'users', auth.currentUser.uid), {
            name: displayName,
            email: email,
            facilitator: false,
            administrator: false,
            lastSignIn: auth.currentUser.metadata.lastSignInTime.toLocaleString() 
            })

        //reset error and pending
        error.value = null
        isPending.value = false
    }
    catch(err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useSignup = () => {
    return { error, isPending, signup}
}

export default useSignup