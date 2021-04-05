import { createStore } from 'vuex'
import firebase from "firebase/app"
import router from "../router/index"
import {matchesCollection, usersCollection} from "../firebase"

export default createStore({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await firebase.auth().signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({ commit }, user) {
      const userProfile = await usersCollection.doc(user.uid).get()
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      // change route to dashboard
      router.push('/')
    },
    async getMatchesList() {
      const matchesList = await matchesCollection.get()
      return matchesList;
    }
  },
  modules: {
  }
})
