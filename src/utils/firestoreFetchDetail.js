import { doc, getDoc } from "firebase/firestore";
import db from "./fireBaseConfig";


export const firebaseFetchDetail = async (idItem) => {
    const docRef = doc(db, "products", idItem);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {id: idItem,
            ...docSnap.data()};
    } else {
      // doc.data() will be undefined in this case
      console.log("ID no encontrado");
    }
}