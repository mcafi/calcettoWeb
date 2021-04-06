import { createStore } from 'vuex'
import firebase from "firebase/app"
import "firebase/auth"
import router from "../router/index"
import {matchesCollection, usersCollection} from "../firebase"

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

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
      console.log(user)
      const userProfile = await usersCollection.doc(user.uid).get()
      // set user profile in state
      commit('setUserProfile', userProfile.data())
      console.log(userProfile.data())
      // change route to dashboard
      router.push('/')
    },
    async googleSignIn({ dispatch }) {
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;

          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          console.log(token);
          var user = result.user;
          dispatch('fetchUserProfile', user);
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          console.log(credential);
        });
    },
    async getMatchesList() {
      const matchesList = await matchesCollection.get()
      return matchesList;
    },
    getUser() {
      return this.state.userProfile
    }
  },
  modules: {
  }
})
