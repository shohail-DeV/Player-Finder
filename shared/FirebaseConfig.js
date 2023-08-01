// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_udSvwKGroWxCpr4eye0v2KekLgAhsuc",
  authDomain: "player-finder-a170a.firebaseapp.com",
  projectId: "player-finder-a170a",
  storageBucket: "player-finder-a170a.appspot.com",
  messagingSenderId: "388079179064",
  appId: "1:388079179064:web:a34b23937172b8a109ddcd"
};

//Quick check to not initialise app multiple times , which can cause perfomance issues
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
//Setting up the connection to the database
const db = getFirestore(app);
//Setting up the authentication
const auth = getAuth(app);
//Setting up the storage
const storage = getStorage(app);
//Setting up the provider for google authentication
const provider = new GoogleAuthProvider();

//Exporting the variables for usage in other files
export { db, auth, storage, provider };