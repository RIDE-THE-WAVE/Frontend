import firebase from "./Firebase.js";
import { doc, getDoc } from "firebase/firestore";

const docRef = doc(firebase, "users", "user_id_1");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
}

export default querySnapShot;