import firebase from "firebase/app"
import "firebase/firebase-firestore"

const firebaseConfig = {
    apiKey: "AIzaSyD_PC8N-O55gUs55-TkidQD1kvISvj-6Ng",
    authDomain: "cooking-ninja-site-29775.firebaseapp.com",
    projectId: "cooking-ninja-site-29775",
    storageBucket: "cooking-ninja-site-29775.appspot.com",
    messagingSenderId: "454551130780",
    appId: "1:454551130780:web:a505e2951e2e4b43c65359"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

export {projectFirestore}