import customFetch from "../utils/customFetch";
import React, { useEffect, useState } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "./ItemList";
import {products} from "../utils/products";


const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([])

    useEffect(()=> {
        customFetch(2000, products)
        .then(res=>setData(res))
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        <p>{saludo}</p>
        <ItemList items={data}/>
        <ItemCount stock={5} initial={1}  />
        </>
    )
}

export default ItemListContainer;