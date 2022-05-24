import Item from "../components/Item"
import {ProductsContainer} from "../components/styledComponents"

const ItemList = ({items}) => {
    return (
        <ProductsContainer>
            {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name} price={item.cost} pictureUrl={item.image} stock={item.stock} /> )
            : <span>Cargando Productos...</span>
            }
        </ProductsContainer>
    )

}

export default ItemList;