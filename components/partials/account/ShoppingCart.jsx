import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { showNotification } from '~/utilities/common-helpers';
import Error from '~/pages/404';
import FormCheckoutInformation from './modules/FormCheckoutInformation';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import Router from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { ShareDataContext } from '~/utilities/share-data-context';
import { useDispatch } from 'react-redux';
import { addPlaceOrderDatas, updateNavbar } from '~/store/datas/action';
import ProductTableCart from './ProductTableCart';
import ProductTableCartSmallScreen from './ProductTableCartSmallScreen';
import { useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import Head from 'next/head';
function ShoppingCart(props) {
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [cartPageDatas, setCartPageDatas] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const { orderData_ } = useContext(ShareDataContext);
    const [orderDatas, setOrderDatas] = orderData_;
    const [loadingPlaceOrderBtn, setLoadingPlaceOrderBtn] = useState(false);
    const dispatch = useDispatch();

    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);


    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, []);

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, [changeLanguage]);

    const labels = Labels(language);

    const cartDatas = () => {
        console.log("sssssssssssss");
        let body;
        if (constants.sessionId !== null) {
            body = {
                session_id: constants.sessionId,
                language: language,
            };
        } else {
            body = {
                productVariantId:
                    localStorage.getItem('productVariantId') === null
                        ? null
                        : JSON.parse(localStorage.getItem('productVariantId')),
                quantity:
                    localStorage.getItem('quantity') === null
                        ? null
                        : JSON.parse(localStorage.getItem('quantity')),
                language: language,
            };
        }

        Axios.post(
            constants.sessionId !== null ? apis.viewCart : apis.viewGuestCart,
            body
        )
            .then((res) => {
                if (res.data.status === 1) {
                    setCartPageDatas([res.data.data]);
                    setApiSuccess(true);
                    setCartProducts(res.data.data.products);
                } else {
                    
                    // showNotification(language, constants.Error);
                    // SetApiError(true);
                }
            })
            .catch((err) => {
                // showNotification(language, constants.Error);
                // SetApiError(true);
            });
    };

    useEffect(() => {
        language !== false && cartDatas();
    }, []);

    useEffect(() => {
        language !== false && cartDatas();
    }, [language]);

    const handleUpdateCart = (productVarient, quantity, index, lessOrAdd) => {
        if (localStorage.getItem('session_id') !== null) {
            Axios.post(apis.updateCart, {
                session_id: localStorage.getItem('session_id'),
                language: language,
                productSlugVarient: productVarient,
                quantity: quantity,
            })
                .then((res) => {
                    if (res.data.status === 1) {
                        cartDatas();
                        showNotification(
                            language,
                            constants.Success,
                            res.data.message
                        );
                    } else {
                        cartDatas();
                        showNotification(
                            language,
                            constants.Sorry,
                            res.data.message
                        );
                    }
                })
                .catch((err) => {
                    SetApiError(true);
                    showNotification(language, constants.Error);
                });
        } else {
            let quantity_ = [...JSON.parse(localStorage.getItem('quantity'))];
            quantity_[index] = String(quantity);
            localStorage.setItem('quantity', JSON.stringify(quantity_));
            cartDatas();
            showNotification(
                language,
                constants.Success,
                labels['Cart Updated Successfully']
            );
        }
        // }
    };

    const handleRemoveCartItem = (removeItemId) => {
        if (localStorage.getItem('session_id') === null) {
            const new_product_datas = JSON.parse(
                localStorage.getItem('productVariantId')
            ).filter((item, index) => index !== removeItemId);

            localStorage.setItem(
                'productVariantId',
                JSON.stringify(new_product_datas)
            );

            const new_quantity_datas = JSON.parse(
                localStorage.getItem('quantity')
            ).filter((item, index) => index !== removeItemId);
            localStorage.setItem(
                'quantity',
                JSON.stringify(new_quantity_datas)
            );
            dispatch(updateNavbar(true));

            const updatedProducts = cartProducts.filter(
                (item, index) => index !== removeItemId
            );
            setCartProducts(updatedProducts);

            // cartDatas();

            showNotification(
                language,
                constants.Success,
                labels['Cart Updated Successfully']
            );
            // setCartcount(cartcount == 0 ? null : cartcount - 1);
        } else {
            Axios.post(apis.removeFromCart, {
                session_id: localStorage.getItem('session_id'),
                language: language,
                productSlugVarient: removeItemId,
            })

                .then((res) => {
                    if (res.data.status === 1) {
                        const new_datas = cartPageDatas.filter(
                            (item) => item.slug_Id !== removeItemId
                        );
                        setCartPageDatas(new_datas);
                        //       setCartcount(cartcount == 0 ? null : cartcount - 1);

                        cartDatas();
                        showNotification(
                            language,
                            constants.Success,
                            res.data.message
                        );
                    }
                })
                .catch((err) => {
                    SetApiError(true);
                    showNotification(language, constants.Error);
                });
        }
    };

    const refreshPage = () => {
        cartDatas();
    };

    const placeOrder = (promocode, paymentMethod, rewardPoint) => {
        // console.log(cartProducts,"cartProductscartProducts");
        setLoadingPlaceOrderBtn(true);
        // let proceed = false;
        // cartProducts.map((item, index) => {
        //     if (item.product_stock < parseInt(item.quantity)) {
        //         proceed = true;
        //     }
        // });
        // console.log(proceed,"proceed");
        // if (proceed) {
        //     showNotification(
        //         language,
        //         constants.Sorry,
        //         labels['cart containes out of stock products, please remove.']
        //     );
        // } else {
            if (cartPageDatas[0].address.length === 0) {
                showNotification(
                    language,
                    constants.Sorry,
                    labels['please add Address before place order']
                );
                setLoadingPlaceOrderBtn(false);
            } else if (paymentMethod === null) {
                showNotification(
                    language,
                    constants.Sorry,
                    labels['please choose any payment option']
                );
                setLoadingPlaceOrderBtn(false);
            } else {
                Axios.post(apis.placeOrder, {
                    session_id: constants['sessionId'],
                    language: language,
                    promocode: promocode,
                    reward_point_apply: rewardPoint,
                    payment_mode: paymentMethod,
                    platform: '1',
                })
                    .then((res) => {
                        console.log(res, 'res in place order');
                        setApiSuccess(true);
                        if (res.data.status === 1) {
                            setOrderDatas(res.data.data.order_details);
                            dispatch(
                                addPlaceOrderDatas(res.data.data.order_details)
                            );

                            localStorage.setItem(
                                'OrderSuccessDetails',
                                res.data.data.order_details
                            );

                            if (paymentMethod == "cod"){
                                Router.push('/account/place-order');
                            }
                            else {
                                Router.push(constants.port+'/API/payment?order_id='+res.data.data.order_details.order_id_m);
                            }

                           

                            setLoadingPlaceOrderBtn(false);
                        } else {
                            setLoadingPlaceOrderBtn(false);
                            showNotification(
                                language,
                                constants.Sorry,
                                res.data.data.message
                            )
                        }
                    })
                    .catch((err) => {
                        console.log(
                            err,
                            constants['sessionId'],
                            language,
                            promocode,
                            rewardPoint,
                            paymentMethod,
                            'err in place order'
                        );

                        SetApiError(true);
                        showNotification(language, constants.Error);
                        setLoadingPlaceOrderBtn(false);
                    });
            }
        // }
    };

    return (
        <>
        <React.Fragment>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-Q0SB10G1ZD');`
                    }}
                ></script>
            </Head>
            <noscript
                dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-Q0SB10G1ZD" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}>
            </noscript>
        </React.Fragment>
            {language !== false && (
                <div className="ps-section--shopping ps-shopping-cart">
                    <div className="container">
                        <h3 style={{ fontWeight: '600', color: '#242424' }}>
                            {labels['Shopping cart']}
                        </h3>

                        <div className="ps-section__content">
                            {localStorage.getItem('productVariantId') === null && constants.sessionId === null ? (<div style={{height:"300px",textAlign:"center",fontSize:"22px"}}>No products in cart..</div>):""}
                            {apiError && <Error />}
                            {apiSuccess && (
                                <>
                                    {cartProducts.length === 0 ? (
                                        <div style={{ height: '40vh' }}>
                                            <h3
                                                style={{
                                                    color: 'gray',
                                                    textAlign: 'center',
                                                }}>
                                                {labels['No products in Cart']}
                                            </h3>
                                        </div>
                                    ) : (
                                        <>
                                            {cartProducts.map(
                                                (product, index) => {
                                                    return (
                                                        <ProductTableCartSmallScreen
                                                            key={index}
                                                            language={language}
                                                            index={index}
                                                            handleUpdateCart={
                                                                handleUpdateCart
                                                            }
                                                            handleRemoveCartItem={
                                                                handleRemoveCartItem
                                                            }
                                                            product={product}
                                                            refreshPage={refreshPage}

                                                        />
                                                    );
                                                }
                                            )}

                                            <ProductTableCart
                                                language={language}
                                                handleRemoveCartItem={
                                                    handleRemoveCartItem
                                                }
                                                handleUpdateCart={
                                                    handleUpdateCart
                                                }
                                                cartPageDatas={cartProducts}
                                                refreshPage={refreshPage}
                                            />

                                            <div className="row">
                                                {apiSuccess &&
                                                    constants.sessionId !==
                                                        null && (
                                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                            <FormCheckoutInformation
                                                              title={
                                                                labels['Shipping Address']
                                                                }
                                                                language={
                                                                    language
                                                                }
                                                                address={
                                                                    cartPageDatas[0]
                                                                    .address
                                                                }
                                                                refreshPage={
                                                                    refreshPage
                                                                }
                                                            />
                                                                <FormCheckoutInformation
                                                                    title={
                                                                        labels['Billing Address']
                                                                    }
                                                                    language={
                                                                        language
                                                                    }
                                                                    address={
                                                                        cartPageDatas[0]
                                                                            .billing_address
                                                                    }
                                                                    refreshPage={
                                                                        refreshPage
                                                                    }
                                                                />
                                                            <div className="ps-section__cart-actions">
                                                                <Link href="/shop">
                                                                    <a>
                                                                        <i className="icon-arrow-left mr-2"></i>

                                                                        {
                                                                            labels[
                                                                                'Back to Shop'
                                                                            ]
                                                                        }
                                                                    </a>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    )}

                                                {apiSuccess &&
                                                    constants.sessionId ===
                                                        null && (
                                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                                            <hr />
                                                        </div>
                                                    )}

                                                {apiSuccess &&
                                                    constants.sessionId ===
                                                        null && (
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                                            <hr />
                                                            <div className="ps-block--checkout-order">
                                                                <div className="ps-block__content">
                                                                    <figure>
                                                                        <figcaption>
                                                                            <strong>
                                                                                {
                                                                                    labels[
                                                                                        ' Item Total:'
                                                                                    ]
                                                                                }
                                                                            </strong>
                                                                            <small>
                                                                                ₹{' '}
                                                                                {parseFloat(
                                                                                    cartPageDatas[0]
                                                                                        .cart_total
                                                                                ).toFixed(
                                                                                    2
                                                                                )}
                                                                            </small>
                                                                        </figcaption>
                                                                    </figure>
                                                                    <Link href="/account/login">
                                                                        <a
                                                                            className="ps-btn"
                                                                            style={{
                                                                                width: '100%',
                                                                                textAlign:
                                                                                    'center',
                                                                            }}>
                                                                            {
                                                                                labels[
                                                                                    'Login'
                                                                                ]
                                                                            }{' '}
                                                                        </a>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                {apiSuccess &&
                                                    constants.sessionId !==
                                                        null && (
                                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 ">
                                                            <div
                                                                className="ps-form__orders"
                                                                style={{
                                                                    marginTop:
                                                                        '5rem',
                                                                }}>
                                                                <ModulePaymentOrderSummary
                                                                    language={
                                                                        language
                                                                    }
                                                                    shipping={
                                                                        cartPageDatas[0]
                                                                            .shipping_fee
                                                                    }
                                                                    amount={
                                                                        cartPageDatas[0]
                                                                            .cart_total
                                                                    }
                                                                    placeOrder={
                                                                        placeOrder
                                                                    }
                                                                    loadingPlaceOrderBtn={
                                                                        loadingPlaceOrderBtn
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
    // }
}

// export default connect(mapStateToProps)(ShoppingCart);
export default ShoppingCart;
