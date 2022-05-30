import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react"
import customFetch from "../utils/customFetch";
const {products} = require("../utils/products")


const ItemDetailContainer = () => {
    const [data, setData] = useState({})

    useEffect(()=>{
        customFetch(2000, products[7])
        .then(res => setData(res))
        .catch(err => console.log(err))
    },[])

    return (
        <ItemDetail item={data} />
    )
}

export default ItemDetailContainer;