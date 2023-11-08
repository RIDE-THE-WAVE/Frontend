import firebase from "./Firebase";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(firebase);

export default db;