import { useContext } from 'react'
import { CartContext } from './CartContext'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { collection, serverTimestamp, doc, setDoc, updateDoc, increment } from 'firebase/firestore'
import db from '../utils/fireBaseConfig'
import Swal from 'sweetalert2'


const Cart = () => {
    const test = useContext(CartContext)
    
    const createOrder = () => {
        let itemsForDB = test.cartList.map(item => ({
            id: item.idItem,
            price: item.priceItem,
            qty: item.qtyItem,
            title: item.titleItem,

        }) 
           )
        let order = {
            buyer: {
                email: 'leo@messi.com',
                name: 'Leo Messi',
                phone: '123456789'
            },
            date: serverTimestamp(),
            items: itemsForDB,

            total:test.calcTotal() 

        }
        
        
        const createOrderInFirestore = async () => {
            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order)
            return newOrderRef
        }
        createOrderInFirestore()
        .then(res => Swal.fire({
            text:'your ID order is ' + res.id,
            confirmButtonColor: '#000000'}))
        .catch(err => console.log(err));
        
        //actualización de stock
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem)
           await updateDoc(itemRef, {
               stock: increment(-item.qtyItem)
           }) 
        });
        
        //borrar carrito al comprar        
        test.deleteCart()
    }
    return (
        <>
            <div>
                <h1 className='text-3xl text-center p-4'>Tu Carrito</h1>
                <div className='p-2 flex flex-row justify-around'>
                    <Link to='/'><Button variant="contained">Seguir comprando..</Button></Link>
                    {

                        test.cartList.length > 0 ?
                            <Button onClick={test.deleteCart}>Borrar todo</Button>
                            : <div />
                    }
                </div>
            </div>


            <div className='w-full flex flex-row h-full'>
                <div className='flex flex-col w-4/6'>
                    {
                        test.cartList.length > 0 ?
                            test.cartList.map(item =>

                                <div key={item.idItem} className="w-full grid grid-cols-4 justify-center mt-2 items-center h-40">
                                    <div className="flex justify-center">
                                        <img className="w-40" alt="fotoproducto" src={item.imgItem}></img>
                                    </div>
                                    <div className="flex flex-col justify-between">
                                        <h1 className="text-xl">{item.titleItem}</h1>
                                        <span className="text-lg">Precio: ${item.priceItem}</span>
                                        <span className="text-base">stock: {item.stockItem}</span>
                                    </div>
                                    <div className='flex flex-col text-center'>
                                        <span className='text-lg'>Cantidad:</span>
                                        <span className='text-xl'>{item.qtyItem}</span>
                                    </div>
                                    <div className="flex flex-row justify-around">
                                        <div className='flex flex-col text-center'>
                                            <span className='text-lg'>Total: </span>
                                            <span className='text-xl'>${test.calcTotalPerItem(item.idItem)}</span>
                                        </div>

                                        <Button onClick={() => test.removeItem(item.idItem)}>x</Button>
                                    </div>

                                </div>


                            )
                            : <p className='w-full p-2 text-xl'>tu carrito está vacío :(</p>
                    }
                </div>
                <div className='w-2/6 mr-4 flex flex-col p-4 border-2 rounded-md shadow-xl mt-4 h-96'>
                    <h1 className='text-center text-xl'>CheckOut</h1>
                    <div className='flex flex-col h-full justify-around'>
                        <span className='text-lg'>subtotal: ${test.calcSubTotal()} </span>
                        <span className='text-lg'>impuestos: ${test.calcTaxes()} </span>
                        <span className='text-lg'>Total: ${test.calcTotal()} </span>
                    </div>
                    <Button onClick={createOrder}>Ir a Pagar</Button>
                    
                </div>
            </div>
        </>
    )
}

export default Cart;