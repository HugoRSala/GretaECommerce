import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let duplicate = cartList.find(prod => prod.idItem === item.id);
        duplicate === undefined ?
        setCartList([...cartList,
        {
            idItem: item.id,
            imgItem: item.image,
            titleItem: item.name,
            priceItem: item.cost,
            stockItem: item.stock,
            qtyItem: qty,
        }])

        : duplicate.qtyItem += qty;
    }
    const removeItem = (id) => {
        let rest = cartList.filter(item => item.idItem =! id)
        setCartList(rest)

    }
    const deleteCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;