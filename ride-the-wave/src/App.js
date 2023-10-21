import { useEffect, useState } from "react";
import firestore from "./Firebase/Firestore";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(firestore, "users", "user_id_001");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setDocument(docSnap.data().name);
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
