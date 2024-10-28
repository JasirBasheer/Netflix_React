import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyChPbOZ0Q7NlZqnEqV8VYwWWpyBqc5e30g",
    authDomain: "netflix-react-cfb1b.firebaseapp.com",
    projectId: "netflix-react-cfb1b",
    storageBucket: "netflix-react-cfb1b.appspot.com",
    messagingSenderId: "774733955764",
    appId: "1:774733955764:web:99736a89c02819b4a10de1",
    measurementId: "G-VPBPLL88VM"
};
console.log(firebaseConfig)

const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)