import React from "react";
import { useState } from "react"
import { Button } from "@mui/material";

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [contador, setContador] = useState(0)

    const increment = () => {
        if (contador < stock) {
            setContador(contador + 1)

        }


    }
    const decrement = () => {
        if (contador > initial) {
            setContador(contador - 1)

        }
    }
    const agregar = () => {
        alert(`se agregaron ${contador} productos al carrito`)
    }
    return (
        <div className="flex gap-8 mt-4">
            <div className="flex ml-4 text-xl font-semibold">
                <button className="w-8 h-8 rounded-md" onClick={decrement}>-</button>
                <span className="w-8 h-8 flex justify-center items-center">{contador}</span>
                <button className="w-8 h-8 rounded-md" onClick={increment}>+</button>
            </div>
            {
                stock && contador
                ? <Button variant="contained" color="primary" onClick={() => 
                    onAdd(contador)}>Agregar</Button>
                : <Button variant="contained" disabled>Agregar</Button>
            }
        </div>
    )
}

export default ItemCount;