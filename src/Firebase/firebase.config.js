// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log(import.meta.env.VITE_API_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "community-food-sharing-36bb7.firebaseapp.com",
    projectId: "community-food-sharing-36bb7",
    storageBucket: "community-food-sharing-36bb7.appspot.com",
    messagingSenderId: "643841840512",
    appId: "1:643841840512:web:ff4495946536d285725d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;