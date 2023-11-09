import { useEffect, useState } from "react";
import db from "./Firebase/Firebase";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // const docRef = doc(firestore, "users", "user_id_001");
      const docRef = doc(db, "records", "user_id_001");
      const docRef2 = doc(docRef, "freestyle", "freestyle");
      const docSnap = await getDoc(docRef2);
  
      if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setDocument(docSnap.data().start_50);
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
    };

    fetchData();
  }, [])

  return (
    <div className="App">
        <p>
        {/* Document Data: {JSON.stringify(documentData)} */}
        Document Data: {document}
        </p>
    </div>
  );
}

export default App;
