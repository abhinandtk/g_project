import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import ProductOnCart from '~/components/elements/products/ProductOnCart';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { setNavCartProduct, updateNavbar } from '~/store/datas/action';
import { useRouter } from 'next/router';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

function MiniCart({language}) {
    const cartItem = useSelector((state) => state.datas.navCartProudct);

    

    const router = useRouter()
    const dispatch = useDispatch();

    const labels = Labels(language);

    const handleRemoveCartItem = (e, removeId, price,index_) => {
        e.preventDefault();
        if (localStorage.getItem('session_id') === null) {
            
            const new_product_datas = JSON.parse(
                localStorage.getItem('productVariantId')
            ).filter((item, index) => item !== removeId
            );

            localStorage.setItem(
                'productVariantId',
                JSON.stringify(new_product_datas)
            );

            const new_quantity_datas = JSON.parse(
                localStorage.getItem('quantity')
            ).filter((item, index) => index !== index_);
            localStorage.setItem(
                'quantity',
                JSON.stringify(new_quantity_datas)
            );

            dispatch(updateNavbar(true));
            showNotification(language,constants.Success, labels['Cart Updated Successfully']);
        } else {
            Axios.post(apis.removeFromCart, {
                session_id: constants['sessionId'],
                language: language,
                productSlugVarient: removeId,
            })

                .then((res) => {
                    if (res.data.status === 1) {


                        const new_datas = cartItem[0].filter(
                            (item) => item.slug_Id !== removeId
                        );
                        dispatch(
                            setNavCartProduct([new_datas, cartItem[1] - price])
                        );
                        
                    


                        showNotification(language,constants.Success, res.data.message);
                    }
                })
                .catch((err) => {
                    showNotification(
                        language,
                        constants.Error
                    );
                });
        }
    };

    let cartItemsView;
    if (cartItem.length > 0) {
        if (cartItem[0].length > 0) {
            const productItems = cartItem[0].map((item,index) => {
                return (
                    <ProductOnCart 
                    language={language}
                        index={index}
                        product={item}
                        key={item.slug_Id}
                        removeCart={handleRemoveCartItem}
                    />
                );
            });

            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">{productItems}</div>
                    <div className="ps-cart__footer">
                        <h3>
                            {labels[' Item Total:']}
                            <strong>₹ {parseFloat( cartItem[1]).toFixed(2)}</strong>
                        </h3>
                        <figure>
                            <a
                                onClick={() =>
                                    router.push('/account/shopping-cart', null, {
                                        shallow: true,
                                    })
                                }
                                className="ps-btn"
                                style={{ maxWidth: '100%' }}>
                                {labels[' View Cart']}
                            </a>
                        </figure>
                    </div>
                </div>
            );
        } else {
            cartItemsView = (
                <div className="ps-cart__content">
                    <div className="ps-cart__items">
                        <span>{labels[' No products in cart']}</span>
                    </div>
                </div>
            );
        }
    }else {
        cartItemsView = (
            <div className="ps-cart__content">
                <div className="ps-cart__items">
                    <span>{labels[' No products in cart']}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="ps-cart--mini">
            <a className="header__extra" href="#">
                <i className="icon-bag2"></i>
                {cartItem.length > 0 && cartItem[0].length > 0 && (
                    <span>
                        <i>{cartItem.length > 0 && cartItem[0].length}</i>
                    </span>
                )}
            </a>
            {cartItemsView}
        </div>
    );
}

export default MiniCart;
