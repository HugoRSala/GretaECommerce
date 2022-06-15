import { getDocs, collection, query, where, orderBy } from "firebase/firestore";
import db from "./fireBaseConfig";


export const firebaseFetch = async (idCategory) => {
    let q;
    idCategory ?
        q = query(collection(db, "products"), where("categoryId", "==", idCategory ))
    :   q = query(collection(db, "products"), orderBy("name"))
    
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }))
    return dataFromFirestore
    ;
};