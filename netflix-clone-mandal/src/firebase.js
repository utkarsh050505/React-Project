import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_r2nxjLKqsnwP_ljc98aPBqaK86IEZ24",
    authDomain: "netflix-clone-mandal.firebaseapp.com",
    projectId: "netflix-clone-mandal",
    storageBucket: "netflix-clone-mandal.appspot.com",
    messagingSenderId: "127844263473",
    appId: "1:127844263473:web:f70c6404cde93611aed710"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;