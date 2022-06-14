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
        
        : 
        setCartList([...cartList])
        duplicate.qtyItem += qty;
        
    }
    const removeItem = (id) => {
        let rest = cartList.filter(item => item.idItem =! id)
        setCartList(rest)

    }
    const deleteCart = () => {
        setCartList([])
    }
    //traemos item por id
    const calcTotalPerItem = (idItem) => {
        let indice = cartList.map(item => item.idItem).indexOf(idItem)
        return cartList[indice].priceItem * cartList[indice].qtyItem;
    }
    //a cada item le aplicamos calcTotalPerItem
    const calcSubTotal = () => {
        let totalUnitario = cartList.map(item => calcTotalPerItem(item.idItem))
        return totalUnitario.reduce(((acc, act) => acc + act), 0)
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.21

    }

    const calcTotal = () => {
        return calcSubTotal() + calcTaxes()
    }   
     const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem)
        return qtys.reduce(((ant, acc)=>ant + acc), 0);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, removeItem, deleteCart, calcTotalPerItem, calcSubTotal, calcTaxes, calcTotal, calcItemsQty }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;