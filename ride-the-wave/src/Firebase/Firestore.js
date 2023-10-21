import firebase from "./Firebase";
import { getFirestore } from "firebase/firestore";

const firestore = getFirestore(firebase);

export default firestore;