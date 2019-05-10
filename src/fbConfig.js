import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyDOhZ1-2Z11LD1gJ2VMR_nPlOuLYyRKGLo",
  authDomain: "uzmiauto-c503b.firebaseapp.com",
  databaseURL: "https://uzmiauto-c503b.firebaseio.com",
  projectId: "uzmiauto-c503b",
  storageBucket: "uzmiauto-c503b.appspot.com",
  messagingSenderId: "837372020693"
};
firebase.initializeApp(config);
const storage = firebase.storage().ref()
// firebase.firestore().settings({ timestampsInSnapshots: true })

// export default firebase

export {
  storage, firebase as default
}