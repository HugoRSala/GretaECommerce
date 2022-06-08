import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Cart = () => {
    const test = useContext(CartContext)
    return (
        <>
            <div>
                <h1 className='text-3xl text-center p-4'>Tu Carrito</h1>
                <div className='p-2 flex flex-row justify-around'>
                    <Link to='/'><Button variant="contained">Seguir comprando..</Button></Link>
                    {

                        test.cartList.length > 0 ?
                            <Button onClick={test.deleteCart}> Borrar todo </Button>
                            : <div />
                    }
                </div>
            </div>
            
            {
                test.cartList.length > 0 ?
                        test.cartList.map(item =>
                        <div key={item.idItem} className="w-full grid grid-cols-4 justify-center border-2 rounded-md mt-2 items-center">
                            <div className="flex justify-center">
                                <img className="w-40" alt="fotoproducto" src={item.imgItem}></img>
                            </div>
                            <div className="flex flex-col justify-between">
                                <h1 className="text-3xl">{item.titleItem}</h1>
                                <span className="text-3xl">Precio: ${item.priceItem}</span>
                                <span className="text-xl">stock: {item.stockItem}</span>
                            </div>
                            <div className='flex flex-col'>
                                <span className='text-2xl'>Cantidad:</span>
                                <span className='text-3xl'>{item.qtyItem}</span>
                            </div>
                            <div className="flex justify-center">
                                <Button onClick={()=>test.removeItem(item.idItem)}>borrar</Button>
                            </div>

                        </div>
                        )
                        :<p className='p-2 text-xl'>tu carrito está vacío :(</p>
            }
        </>
    )
}

export default Cart;