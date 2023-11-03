import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Input from 'antd/es/input';
import { Button, Radio } from 'antd';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';

const ModulePaymentOrderSummary = ({
    shipping,
    amount,
    cartItems,
    placeOrder,
}) => {
    const [promoCode, setPromocode] = useState(null);
    const [promocodeResult, setPromocodeResult] = useState(null);
    const [loadingPromoBtn, setLoadingPromoBtn] = useState(false);
    const [promoMessage, setPromoMessage] = useState('');
    const [paymentMethod, setPaymentMethod] = useState(null);
    
    const checkPromocode = () => {
        setLoadingPromoBtn(true);
        Axios.post(apis.promocode, {
            session_id: constants['sessionId'],
            promocode: promoCode,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    setPromocodeResult(res.data.discount);
                } else if (res.data.status === 2) {
                    setPromoMessage(res.data.message);
                } else {
                    showNotification(
                        constants.Error
                    );
                }

                setLoadingPromoBtn(false);
            })
            .catch((err) => {
                showNotification(
                    constants.Error

                );
                setLoadingPromoBtn(false);
            });
    };

    let listItemsView, shippingView, totalView;
    // if (cartItems.length > 0) {
    //     listItemsView = cartItems.map(product => (
    //         <Link href="/" key={product.slug_Id}>
    //             <a>
    //                 <strong>
    //                     {product.Name}
    //                     <span>x{product.quantity}</span>
    //                 </strong>
    //                 <small>₹ { parseInt(product.quantity) * parseInt(product.cut_prize)}</small>
    //             </a>
    //         </Link>
    //     ));
    // } else {
    //     listItemsView = <p>No Product.</p>;
    // }
    // if (shipping === true) {
    shippingView = (
        <figure>
            <figcaption>
                <strong>Shipping Fee</strong>
                <small>{shipping === 'free' ? 'Free' : shipping}</small>
            </figcaption>
        </figure>
    );
    totalView = (
        <figure className="ps-block__total">
            <h3>
                Total
                <strong>
                    {' '}
                    ₹{' '}
                    {parseInt(amount) +
                        (shipping === 'free' ||
                        shipping === null ||
                        shipping === undefined
                            ? 0
                            : parseInt(shipping)) -
                        (promocodeResult !== null ? promocodeResult : 0)}
                </strong>
            </h3>
        </figure>
    );
    // } else {
    //     totalView = (
    //         <figure className="ps-block__total">
    //             <h3>
    //                 Total
    //                 <strong>${parseInt(amount)}.00</strong>
    //             </h3>
    //         </figure>
    //     );
    // }
    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                {/* <figure>
                    <figcaption>
                        <strong>Product</strong>
                        <strong>total</strong>
                    </figcaption>
                </figure> */}
                {/* <figure className="ps-block__items">{listItemsView}</figure> */}
                <figure>
                    <figcaption>
                        <strong>Item Total</strong>
                        <small>₹ {amount}</small>
                    </figcaption>
                </figure>
                {shippingView}
                <div className="form-group" style={{ marginTop: '2rem' }}>
                    <figure className="">
                        <strong>Add Promocode</strong>
                        <div className="row">
                            {/* <Input
                            size="large"
                            placeholder="promocode"
                            onChange={(e) => setPromocode(e.target.value)}
                            style={{width:"60%"}}
                        />
                        <Button type="primary" loading={true} onClick={() => checkPromocode()}>
                            check
                        </Button> */}

                            <Input.Group className="ps-block--checkout-order__promocode">
                                <Input
                                    placeholder="promocode"
                                    onChange={(e) =>
                                        setPromocode(e.target.value)
                                    }
                                    size="large"
                                />

                                <Button
                                    type="primary"
                                    loading={loadingPromoBtn}
                                    size="large"
                                    onClick={() =>
                                        promoCode === null
                                            ? setPromoMessage(
                                                  'please input your field'
                                              )
                                            : checkPromocode()
                                    }>
                                    Check
                                </Button>
                                <p style={{ color: 'red' }}>{promoMessage}</p>
                            </Input.Group>
                        </div>
                    </figure>
                </div>
                {promocodeResult !== null && (
                    <figure>
                        <figcaption>
                            <strong style={{ color: 'green' }}>Discount</strong>
                            <small>₹ {promocodeResult}</small>
                        </figcaption>
                    </figure>
                )}{' '}
                <figure>
                    <strong>Payment Metthod</strong> <br />
                    <Radio.Group
                        // onChange={e =>
                        //     this.handleChangePaymentMethod(
                        //         e
                        //     )
                        // }
                        // value={this.state.method}
                        onChange={(e) => setPaymentMethod(e.target.value)}>
                        <Radio value={'online'}>Online</Radio>
                        <Radio value={'cod'}>COD</Radio>
                    </Radio.Group>
                </figure>
                {totalView}
            </div>
            <div className="ps-block__footer">
                <button
                    className="ps-btn"
                    style={{ width: '100%' }}
                    onClick={() => {
                        placeOrder(promoCode, paymentMethod);
                    }}>
                    Place Order
                </button>
            </div>
        </div>
    );
};
// export default connect(state => state.cart)(ModulePaymentOrderSummary);
export default ModulePaymentOrderSummary;
