
import { DescriptionOutlined, LocalOfferOutlined } from '@mui/icons-material';
/* import { Divider } from '@mui/material'; */
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';


const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (

        <div className='flex flex-row flex-wrap border-2 rounded-lg mb-3 mx-3 shadow-2xl'>
            <div className='flex flex-col w-44 mb-3'>
                <Link to={`/item/${id}`}>
                    <div className='flex flex-col mb-6 items-center'>
                        <img className='w-40' src={pictureUrl} alt="" />
                        <span><strong>{title}</strong></span>
                        <span className="w-full text-sm text-right">más detalles <AddIcon /></span>
                    </div>
                </Link>
                <div>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </div>
                <div>
                    <DescriptionOutlined />{stock} unid.
                </div>


                <div style={{ cursor: "pointer" }}>
                    {/*  <Link to={`/item/${id}`}><InfoOutlined />Details</Link> */}
                </div>

            </div>
        </div>

    );
}

export default Item;