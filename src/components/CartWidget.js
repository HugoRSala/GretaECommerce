import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const CartWidget = () => {
    return (
        <>  
            <Badge className='ml-4' badgeContent={10} color="error">
                <ShoppingCartOutlinedIcon />
            </Badge>
        </>
    )
}
export default CartWidget;
