import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () => {

    const test = useContext(CartContext)

    return (
        <>  
            <Badge className='ml-4' badgeContent={test.calcItemsQty()} color="error">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </>
    )
}
export default CartWidget;
