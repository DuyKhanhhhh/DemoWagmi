import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { removeFromCart } from '@/redux/Slices/CartSlice';
import { PayButton } from './PayButton';

export default function CardProduct() {
    const { item, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const totalPrice = item.reduce((acc, currentItem) => {
        const price = parseFloat(currentItem.price); // Chuyển đổi giá thành số
        return acc + (isNaN(price) ? 0 : price); // Kiểm tra giá có phải là số không
    }, 0);
    return (
        <div>
            <Header />
            <div className='container mt-3'>
                <table className="table table-success table-striped">
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                    {item.map((items) => (
                        <tr key={items.id}>
                            <td>
                                src={'https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1597821998048-538UNQI253SYL3KE9NGD/chup-anh-mon-an-breakfast-10.jpg'}
                            </td>
                            <td>
                                {items.product}
                            </td>
                            <td>
                                {items.price}
                            </td>
                            <td>
                                <button onClick={() => dispatch(removeFromCart(items.id))} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </table>
                <div>
                    <h2>Tổng Giá: ${totalPrice.toFixed(2)}</h2>
                    <PayButton price={totalPrice} ></PayButton>
                </div>
            </div>
        </div>
    )
}
