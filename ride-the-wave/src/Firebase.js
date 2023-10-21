// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe6fVC3LRmtgHicKPlZ08R06tYlM0lnhg",
  authDomain: "ride-the-wave.firebaseapp.com",
  databaseURL: "https://ride-the-wave-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ride-the-wave",
  storageBucket: "ride-the-wave.appspot.com",
  messagingSenderId: "699905227310",
  appId: "1:699905227310:web:43f89446d65b9860e37dbf",
  measurementId: "G-YLFQH74Z48"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(Firebase);

export default Firebase;