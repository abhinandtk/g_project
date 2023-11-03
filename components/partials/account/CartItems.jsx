import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ProductCart from '~/components/elements/products/ProductCart';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { callrewardPointandPromocodeApis } from '~/store/datas/action';

function CartItems(props) {
    const [quantity, setQuantity] = useState(parseInt(props.product.quantity));
    const dispatch = useDispatch();
    const [productStock,setProductStock] = useState(props.product.product_stock)
    
    const lables = Labels(props.language);
    
    return (
        <tr key={props.product.id}>
            <td>
                <ProductCart
                    language={props.language}
                    product={props.product}
                />
            </td>
            {console.log(productStock < quantity ,productStock,quantity ,"productStock < quantity",props.product,)}
            <td className="price">
                ₹ {props.product.cut_prize}
                {(productStock < quantity) && (
                    <p style={{ color: 'red' }}>{lables['out of stock']}</p>
                )}
            </td>

            <td>
                <div className="form-group--number">
                    <select
                        className="form-control"
                        style={{ borderRadius: '0' }}
                        onChange={(e) => {
                            e.preventDefault();
                            setQuantity(e.target.value);
                            props.handleUpdateCart(
                                props.product.slug_Id,
                                e.target.value,
                                props.index
                            );
                            dispatch(callrewardPointandPromocodeApis(true));
                            props.refreshPage()
                        }}>
                        {[...Array(11)].map(
                            (e, i) =>
                                i !== 0 && (
                                    <option selected={quantity === i} value={i}>
                                        {i}
                                    </option>
                                )
                        )}
                    </select>
                </div>
            </td>
            <td>₹ {(quantity * props.product.cut_prize).toFixed(2)}</td>
            <td>
                <a
                    href="#"
                    onClick={(e) => {
                        props.handleRemoveCartItem(
                            localStorage.getItem('session_id') !== null
                                ? props.product.slug_Id
                                : props.index
                        );
                        e.preventDefault();
                    }}>
                    <i className="icon-cross"></i>
                </a>
            </td>
        </tr>
    );
}

export default CartItems;
