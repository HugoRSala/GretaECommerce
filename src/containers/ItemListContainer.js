import { firebaseFetch } from "../utils/firestoreFetch";
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";




const ItemListContainer = ({ saludo }) => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firebaseFetch(idCategory)
            .then(res => setData(res))
            .catch(err => console.log(err))
}, [idCategory]);

return (
    <>
         <ItemList items={data} />
    </>
)
}

export default ItemListContainer;