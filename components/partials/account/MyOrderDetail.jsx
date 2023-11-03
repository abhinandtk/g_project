import React, { Component, useEffect, useState } from 'react';
import { Table, Divider, Tag, Card, Typography } from 'antd';
import Link from 'next/link';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import ProductCart from '~/components/elements/products/ProductCart';
import { StrapiProductThumbnail } from '~/utilities/product-helper';
import ProductTableSmallCard from './ProductTableSmallCard';
import ProductTableOrderDetail from './ProductTableOrderDetail';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { showNotification } from '~/utilities/common-helpers';
import { Labels } from '~/public/static/data/my-constants/Labels';

function MyOrderDetail({ language }) {
    const [myOrder, setMyOrder] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [offset, SetOffset] = useState(0);
    const router = useRouter();
    const { id } = router.query;
    // const language = useLanguageHook();
    const [orderStatus, setOrderStatus] = useState(null);

    const myOrderDatas = () => {
        Axios.post(apis.orderDetail, {
            session_id: constants['sessionId'],
            language: language,
            offset: offset,
            order_id: id,
        })
            .then((res) => {
                console.log(res,"resss in my order details");
                setMyOrder(res.data.data.orders_list[0]);
                setOrderStatus(res.data.data.orders_list[0].order_status);
                setApiSuccess(true);
            })
            .catch((err) => {
                console.log(err ,"in my order Detail");
                SetApiError(true);
            });
    };

    const cancelOrder = () => {
        Axios.post(apis.cancelOrder, {
            session_id: constants['sessionId'],
            language: language,
            order_id: id,
        })
            .then((res) => {
                setOrderStatus('Cancelled');
                showNotification(language,constants.Success, res.data.message);
            })
            .catch((err) => {
                SetApiError(true);
            });
    };

    useEffect(() => {
        myOrderDatas();
    }, []);

    const labels = Labels(language)
    return (
        language !== false && (
            <div className="col-lg-8">
                <div className="ps-page__content">
                    {apiSuccess && (
                        <div className="ps-section--account-setting">
                            <div className="ps-section__header">
                                <h3>
                                     {labels['Invoice #']}{myOrder.order_id_m} -
                                    <strong>{orderStatus}</strong>
                                    <strong style={{ marginLeft: '20%' }}>
                                        {labels['Total']}: ₹{' '}
                                        {parseInt(myOrder.total_prize)}
                                    </strong>
                                    {/* <p style={{textAlign:"end   "}}><b>Total:{myOrder.order_status} </b></p> */}
                                </h3>
                            </div>
                            <div className="ps-section__content">
                                <div className="row">
                                    <div className="col-md-4 col-12">
                                        <figure className="ps-block--invoice">
                                            <figcaption>{labels['Address']} </figcaption>
                                            <div className="ps-block__content">
                                                <p
                                                    style={{
                                                        wordWrap: 'break-word',
                                                    }}>
                                                    {myOrder.address}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    <div className="col-md-4 col-12">
                                        <figure className="ps-block--invoice">
                                            <figcaption>{labels['Billing Address']} </figcaption>
                                            <div className="ps-block__content">
                                                <p
                                                    style={{
                                                        wordWrap: 'break-word',
                                                    }}>
                                                    {myOrder.billing_address}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>

                                    <div className="col-md-4 col-12">
                                        <figure className="ps-block--invoice">
                                            <figcaption> {labels['Payments']}</figcaption>
                                            {/* <div className="ps-block__content">
                                                <p>
                                                    <span
                                                        style={{
                                                            color: 'black',
                                                        }}>
                                                            {labels['Cart total:']}
                                                        
                                                    </span>{' '}
                                                    {parseInt(
                                                        myOrder.total_prize
                                                    )}
                                                </p>
                                            </div> */}
                                            {myOrder.promocode_discound !==
                                                null && (
                                                <div className="ps-block__content">
                                                    <p>
                                                        <span
                                                            style={{
                                                                color: 'black',
                                                            }}>
                                                            {labels['Promocode Discount:']}

                                                            
                                                        </span>{' '}
                                                        {
                                                            myOrder.promocode_discound
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                            {myOrder.reward_point_discound !==
                                                null && (
                                                <div className="ps-block__content">
                                                    <p>
                                                        <span
                                                            style={{
                                                                color: 'black',
                                                            }}>
                                                            {labels['Reward point Discount:']}

                                                            
                                                            
                                                        </span>{' '}
                                                        {
                                                            myOrder.reward_point_discound
                                                        }
                                                    </p>
                                                </div>
                                            )}
                                            <div className="ps-block__content">
                                                <p>
                                                    <span
                                                        style={{
                                                            color: 'black',
                                                        }}>
                                                            {labels['Shipping Fee']}

                                                        
                                                    </span>{' '}
                                                    {myOrder.delivery_charge ===
                                                    0
                                                        ? 'Free'
                                                        : myOrder.delivery_charge}
                                                </p>
                                            </div>
                                            <div className="ps-block__content">
                                                <p>
                                                    <span
                                                        style={{
                                                            color: 'black',
                                                        }}>
                                                            {labels['Payment Method']}

                                                        
                                                    </span>{' '}
                                                    {myOrder.mode}
                                                </p>
                                            </div>
                                            <div className="ps-block__content">
                                                <p>
                                                    <span
                                                        style={{
                                                            color: 'black',
                                                        }}>
                                                            {labels['Payment Status:']}

                                                        
                                                    </span>{' '}
                                                    {myOrder.payment_status}
                                                </p>
                                            </div>
                                        </figure>
                                    </div>
                                    {orderStatus !== 'delivered' &&
                                        orderStatus !== 'Cancelled' && (
                                            <div className="col-md-4 col-12">
                                                {/* <a
                                                    onClick={() =>
                                                        cancelOrder()
                                                    }
                                                    className=" ps-btn--sm "
                                                    style={{
                                                        backgroundColor: 'none',
                                                        border: '1px solid gray',
                                                        color: 'black',
                                                    }}>
                                                        {labels['Cancel Order']}
                                                    
                                                </a> */}
                                            </div>
                                        )}
                                </div>

                                {/* <div className='product-table-small-card'> */}

                                {/* {myOrder.products.map((product,index)=>{ */}
                                <ProductTableSmallCard
                                    language={language}
                                    products={myOrder.products}
                                />
                                {/* })} */}

                                {/* </div> */}

                                <ProductTableOrderDetail
                                    language={language}

                                    products={myOrder.products}
                                />

                                <Link href="/account/order-history">
                                    <a className="ps-btn ps-btn--sm ">
                                    {labels['Back to Orders']}

                                        
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    );
}

export default MyOrderDetail;
