import ItemCount from "./ItemCount"


const ItemDetail = ({ item }) => {

    const onAdd = (qty) => {
        alert(`You have selected ${qty} items`)
    }

    return (
        <>
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
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />

                </div>
            </div>
        </>
    )
}

export default ItemDetail