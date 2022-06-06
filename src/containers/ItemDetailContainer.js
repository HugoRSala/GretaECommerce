import ItemDetail from "../components/ItemDetail";
import { useState, useEffect } from "react"
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
const {products} = require("../utils/products")


const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {id} = useParams();


    useEffect(()=>{
        customFetch(2000, products.find(item => item.id === parseInt(id)))
        .then(res => setData(res))
        .catch(err => console.log(err))
    },[])

    return (
        
        <ItemDetail item={data} />
    )
}

export default ItemDetailContainer;