import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZip2kg75PWHuxn7Hoj7SKVKkieUcvwmk",
  authDomain: "game-app-42449.firebaseapp.com",
  databaseURL: "https://game-app-42449-default-rtdb.firebaseio.com",
  projectId: "game-app-42449",
  storageBucket: "game-app-42449.appspot.com",
  messagingSenderId: "660641613900",
  appId: "1:660641613900:web:eb779935add73441b2cce9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);