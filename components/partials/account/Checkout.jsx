import React, { useEffect, useState } from 'react';
import FormCheckoutInformation from './modules/FormCheckoutInformation';
import ModulePaymentOrderSummary from '~/components/partials/account/modules/ModulePaymentOrderSummary';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
const Checkout = () => {
    const [checkoutData, setCheckoutData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);

    // const [promoCode,setPromocode] = useState()
    const language = useLanguageHook();

    

    function getCheckOutPageInfo() {
        Axios.post(apis.checkout, {
            session_id: constants['sessionId'],
            language: language,
        })
            .then((res) => {
                setCheckoutData(res.data.data);
                setApiSuccess(true);
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                   constants.Error
                );
            });
    }

    useEffect(() => {
        getCheckOutPageInfo();
    }, []);
    const refreshPage = () => {
        getCheckOutPageInfo();
    };

    const continueShipping = (promocode) => {
        Axios.post(apis.continueShipping, {
            session_id: constants['sessionId'],
            language: language,
        })
            .then((res) => {
                setCheckoutData(res.data.data);
                setApiSuccess(true);
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                    constants.Error
                );
            });
    };

    return (
        <div className="ps-checkout ps-section--shopping">
            <div className="container">
                {/* <div className="ps-section__header">
                    <h1>Checkout Information</h1>
                </div> */}  
                <div className="ps-section__content" style={{border:"1px solid blue"}}>
                    <div className="ps-form--checkout">
                        <div className="ps-form__content">
                            <div className="row">
                                {apiSuccess && (
                                    <>
                                        <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                            <FormCheckoutInformation
                                                address={checkoutData.address}
                                                refreshPage={refreshPage}
                                            />
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12  ps-block--checkout-order">
                                            <div className="ps-form__orders">
                                                <h3>Your order</h3>
                                                <ModulePaymentOrderSummary
                                                    shipping={
                                                        checkoutData.shipping
                                                    }
                                                    amount={checkoutData.total}
                                                    cartItems={
                                                        checkoutData.products
                                                    }
                                                    continueShipping={
                                                        continueShipping
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
