import customFetch from "../utils/customFetch";
import React, { useEffect, useState } from "react";

import ItemList from "./ItemList";
import {products} from "../utils/products";
import { useParams } from "react-router-dom";


const ItemListContainer = ({saludo}) => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=> {
        if (id === undefined) {
        customFetch(2000, products)
        .then(res=>setData(res))
        .catch(err=>console.log(err))
        } else {
            customFetch(2000, products.filter(item => item.categoryId === parseInt(id)))
        .then(res=>setData(res))
        .catch(err=>console.log(err))
        }
    },[id])

    return (
        <>
        <p>{saludo}</p>
        <ItemList items={data}/>
        </>
    )
}

export default ItemListContainer;