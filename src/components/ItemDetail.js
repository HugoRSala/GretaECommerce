import React, { useState } from "react";
import ButtonCheckOut from "./ButtonCheckOut";
import ItemCount from "./ItemCount";


const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert(`You have selected ${qty} items`)
        setItemCount(qty)
    }

    return (
        <>
        {
            item && item.image
            ?
            <div className="flex flex-row justify-around w-2/3 mt-2 ml-2 border-2 shadow-2xl rounded-md">
                <div>
                    <img src={item.image} alt="imagen" className="w-96"></img>
                </div>
                <div className="flex flex-col justify-around w-1/3">
                    <div>
                        <h2 className="text-4xl">{item.name}</h2>
                    </div>
                    <div>
                        <h2 className="text-base">{item.description}</h2>
                    </div>
                    <div>
                        <h2 className="text-3xl">${item.cost}</h2>
                    </div>
                    <div>
                        <h2 className="text-base">stock {item.stock}</h2>
                    </div>
                    {
                        itemCount === 0 
                        ?
                        <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        :
                        <ButtonCheckOut></ButtonCheckOut>
                        
                    }
                </div>
            </div>
            : <span>cargando..</span>
        }    
        </>
    );
}

export default ItemDetail;