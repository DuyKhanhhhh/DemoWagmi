import React from 'react';
import { PayButton } from './PayButton';
import "../css/BoxProduct.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/Slices/CartSlice';
const ProductCard = ({ product, chainId }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
    }
    return (
        <>
            <div className='col-6 col-md-4 mb-4'>
                <div className='card'>
                    <div>
                        <img className='img' src={'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1597821998048-538UNQI253SYL3KE9NGD/chup-anh-mon-an-breakfast-10.jpg'} alt={product.name} />
                    </div>
                    <div className='name'>{product.product}</div>
                    <div className='price'>${product.price}</div>
                    <button className='btn btn-success' onClick={handleAddToCart}>AddToCart</button>
                </div>
            </div >
        </>

    );
};

export default ProductCard;