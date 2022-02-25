import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyXJhG77caqIJnAMUDgXqapvG_rVBI0lQ",
  authDomain: "saminchat-20509.firebaseapp.com",
  projectId: "saminchat-20509",
  storageBucket: "saminchat-20509.appspot.com",
  messagingSenderId: "547744637217",
  appId: "1:547744637217:web:aebfe0553b925c8ab89e60",
  measurementId: "G-XFHS489J9Q"
})
const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }