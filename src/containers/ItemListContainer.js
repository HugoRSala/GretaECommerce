import React from "react";
import ItemCount from "../components/ItemCount";

const ItemListContainer = ({saludo}) => {
    return (
        <>
        <p>{saludo}</p>
        <ItemCount stock={5} initial={1}  />
        </>
    )
}

export default ItemListContainer;