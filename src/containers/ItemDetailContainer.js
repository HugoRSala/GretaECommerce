import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { firebaseFetchDetail } from "../utils/firestoreFetchDetail";



const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {idItem} = useParams();


    useEffect(()=>{
        firebaseFetchDetail(idItem)
        .then(res => setData(res))
        .catch(err => console.log(err))
    },[])

    return (
        
        <ItemDetail item={data} />
    )
}

export default ItemDetailContainer;