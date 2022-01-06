import { createStore } from 'vuex'

// firebase imports
import { auth } from '../firebase/config'


export default createStore({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
      console.log('User state changed: ', state.user)
    }
  },
  actions: {
  /*  async signup(context, { email, password}) {
      console.log('store signup action')

      // async code
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if(res) {
        context.commit('setUser', res.user)
      } else {
        throw new Error('could not complete signup')
      }
    }*/
  } ,
  modules: {
  }
})
