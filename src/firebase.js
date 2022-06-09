import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvT_eX_jtblbXCU7Y5AMKXQdbDauebHW4",
  authDomain: "facebook-clone-27.firebaseapp.com",
  // databaseURL: "https://facebook-clone-27-default-rtdb.firebaseio.com",
  projectId: "facebook-clone-27",
  storageBucket: "facebook-clone-27.appspot.com",
  messagingSenderId: "945621164053",
  appId: "1:945621164053:web:7aec8dc4324b535787ae1c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
