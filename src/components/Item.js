
import { DescriptionOutlined, LocalOfferOutlined } from '@mui/icons-material';
/* import { Divider } from '@mui/material'; */
/* import { Link, Router } from 'react-router-dom'; */


const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (

        <div className='flex flex-row flex-wrap border-2 rounded-lg mb-3 mx-3 shadow-2xl'>
            <div className='flex flex-col w-44 mb-3'>
                <div className='flex flex-col mb-6 items-center'>
                    <img className='w-40' src={pictureUrl} alt="" />
                    <span><strong>{title}</strong></span>
                </div>
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