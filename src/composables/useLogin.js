import { ref } from 'vue'

//firebase imports
import { auth, db } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { doc, updateDoc } from "firebase/firestore";

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        if(!res) {
            throw new Error('Could not login')
        }

        const userdetailsRef = doc(db, "users", auth.currentUser.uid);

        // Set last login date and time for user
        await updateDoc(userdetailsRef, {
            lastSignIn: new Date ((auth.currentUser.metadata.lastSignInTime) ).toLocaleString()  //lastSignInTime
        });



        error.value = null
        isPending.value = false
    }
    catch(err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useLogin = () => {
    return { error, isPending, login}
}

export default useLogin