import React, { useState } from 'react';
import Link from 'next/link';
import { connect, useDispatch, useSelector } from 'react-redux';
// import Input from 'antd/es/input';
import { Button, Radio, Input, Checkbox } from 'antd';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import { useEffect } from 'react';
import $ from 'jquery';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { LoadingOutlined } from '@ant-design/icons';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { callrewardPointandPromocodeApis } from '~/store/datas/action';

const ModulePaymentOrderSummary = ({
    shipping,
    amount,
    cartItems,
    placeOrder,
    loadingPlaceOrderBtn,
    language,
}) => {
    const callRewardPointAndPromocode = useSelector((state) => state.datas.callrewardPointandPromocode);
    const dispatch = useDispatch()
    const [promoCode, setPromocode] = useState(null);
    const [promocodeResult, setPromocodeResult] = useState(null);
    const [rewardPointResult, setRewardPointResult] = useState(0);

    const [loadingPromoBtn, setLoadingPromoBtn] = useState(false);

    const [promoMessage, setPromoMessage] = useState('');
    const [applyRewardPointMessage, setApplyRewardPointMessage] =
        useState(null);

    const [paymentMethod, setPaymentMethod] = useState(null);

    const [discountDatas, setDiscountDatas] = useState([]);
    const [rewardStatusCode, setRewardStatusCode] = useState(null);
    const [loadinCheckBoxBtn, setLoadinCheckBoxBtn] = useState(false);

    // const language = useLanguageHook();

    const checkDiscounts = (from, rewardPoint = false) => {
        if (from === 'promocode') {
            setLoadingPromoBtn(true);
        }

        Axios.post(apis.discounts, {
            session_id: constants['sessionId'],
            promocode: promoCode == ' ' || promoCode == null ? null : promoCode,
            language: language,
            rewardPoint: rewardPoint,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    setDiscountDatas(res.data);
                    setPromocodeResult(res.data.data.promoCodeDiscount);
                    setPromoMessage(res.data.data.promoCodeMessage);
                    setRewardStatusCode(res.data.data.rewardPointStatus);
                    console.log(
                        res.data.data,
                        constants['sessionId'],
                        promoCode == ' ' || promoCode == null
                            ? null
                            : promoCode,
                        rewardPoint,
                        'res.data.data in discount'
                    );
                    res.data.data.promoCodeMessage !== null &&
                        res.data.data.promoCodeMessage !== '' &&
                        showNotification(
                            language,
                            res.data.data.promoCodeDiscount != null
                                ? constants.Success
                                : constants.Info,
                            res.data.data.promoCodeMessage
                        );

                    setRewardPointResult(res.data.data.rewardPointDiscount);

                    setApplyRewardPointMessage(
                        res.data.data.rewardPointMessage
                    );

                    res.data.data.rewardPointMessage !== null &&
                        res.data.data.rewardPointStatus !== 0 &&
                        showNotification(
                            language,
                            constants.Success,
                            res.data.data.rewardPointMessage
                        );

                    res.data.data.rewardPointMessage !== null &&
                        res.data.data.rewardPointStatus === 0 &&
                        showNotification(
                            language,
                            constants.Success,
                            res.data.data.rewardPointMessage
                        );

                    setLoadinCheckBoxBtn(false);
                } else {
                    console.log(res, 'err in abcd');

                    showNotification(language, constants.Error);
                }

                setLoadingPromoBtn(false);
            })
            .catch((err) => {
                console.log(err, 'err in abc');
                showNotification(language, constants.Error);
                setLoadingPromoBtn(false);
            });
    };

    const checkPromocode = () => {
        
        if (promoCode !== '') {
            setLoadingPromoBtn(true); 
   
        Axios.post(apis.PromoCodeApply, {
            session_id: constants['sessionId'],
            promocode: promoCode == ' ' || promoCode == null ? null : promoCode,
            language: language,
        }).then((res) => {
            console.log(res,"res in promocode" ,promoCode,promoCode == ' ' || promoCode == null ? null : promoCode);
            if (res.data.status === 1) {
                setPromocodeResult(res.data.data.promoCodeDiscount);
                // res.data.data.promoCodeMessage !== null &&
                //     res.data.data.promoCodeMessage !== '' &&
                    showNotification(
                        language,
                        res.data.data.promoCodeStatus !== 0 ? constants.Success :constants.Info,
                        res.data.data.promoCodeMessage
                    );
                
            }else{
                showNotification(language, constants.Error);
            }
            setLoadingPromoBtn(false);
            dispatch(callrewardPointandPromocodeApis(false))
        })
        .catch((err) => {
            dispatch(callrewardPointandPromocodeApis(false))
            
            showNotification(language, constants.Error);
            setLoadingPromoBtn(false);
        });
    }
    };

    const checkRewardPoint = (rewardPoint) => {
        
        if (rewardPoint) {
            Axios.post(apis.RewardPointApply, {
                session_id: constants['sessionId'],
                
                language: language,
            }).then((res) => {
                console.log(res,"ressss");

                if (res.data.status === 1) {
                    setRewardStatusCode(res.data.data.rewardPointStatus);
                    setRewardPointResult(res.data.data.rewardPointDiscount);
    
                        setApplyRewardPointMessage(
                            res.data.data.rewardPointMessage
                        );
    
                        // res.data.data.rewardPointMessage !== null &&
                        //     res.data.data.rewardPointStatus !== 0 &&
                        
                            showNotification(
                                language,
                                res.data.data.rewardPointStatus !== 0 ? constants.Success :constants.Info,
                                res.data.data.rewardPointMessage
                            );
    
                }else{
                    showNotification(language, constants.Error);
                }
                dispatch(callrewardPointandPromocodeApis(false))
                setLoadinCheckBoxBtn(false)
                
            })
            .catch((err) => {
                dispatch(callrewardPointandPromocodeApis(false))
                
                showNotification(language, constants.Error);
                setLoadinCheckBoxBtn(false)
            });
        }else{
            setLoadinCheckBoxBtn(false)
            setRewardStatusCode(null)
            setRewardPointResult(null)
        }
       
    };

    useEffect(() => {
        if (callRewardPointAndPromocode) {
            setPromocodeResult(null)
            setRewardPointResult(null)
            setRewardStatusCode(null)
        }
        
    }, [callRewardPointAndPromocode])
    

    let shippingView, totalView;
    const labels = Labels(language);

    shippingView = (
        <figure>
            <figcaption>
                <strong>{labels['Shipping Fee']} </strong>
                <small>
                    {' '}
                    {shipping === 'free' || shipping === 0
                        ? 'Free'
                        : `₹ ${shipping}`}
                </small>
            </figcaption>
        </figure>
    );
    totalView = (
        <figure className="ps-block__total">
            <h3>
                {labels['Total']}

                <strong>
                    {' '}
                    ₹{' '}
                    {parseInt(amount) +
                        (shipping === 'free' ||
                        shipping === null ||
                        shipping === 0
                            ? 0
                            : parseInt(shipping)) -
                        (promocodeResult !== null ? promocodeResult : 0) -
                        rewardPointResult}
                </strong>
            </h3>
            {/* <a style={{fontSize:"12px",color:"#666"}}>{labels["(Incl VAT)"]}</a> */}
        </figure>
    );

    return (
        <div className="ps-block--checkout-order">
            <div className="ps-block__content">
                <figure>
                    <figcaption>
                        <strong> {labels[' Item Total:']} </strong>
                        <small>₹ {amount}</small>
                    </figcaption>
                </figure>
                {shippingView}
                <div className="form-group" style={{ marginTop: '2rem' }}>
                    <figure className="">
                        <strong> {labels['Add Promocode']}</strong>
                        <div className="row">
                            <Input.Group className="ps-block--checkout-order__promocode">
                                <Input
                                    placeholder="promocode"
                                    onChange={(e) =>
                                        setPromocode(e.target.value)
                                    }
                                    size="large"
                                    value={promoCode}
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
                                            :checkPromocode()

                                    }>
                                    {labels['Check']}
                                </Button>
                            </Input.Group>
                        </div>
                    </figure>
                </div>

                {/* <figure
                    className="cart__reward-point"
                    style={{ width: '100%' }}>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            padding: '1rem',
                        }}>
                        <div>
                            {loadinCheckBoxBtn ? (
                                <LoadingOutlined
                                    style={{ fontSize: 24 }}
                                    spin
                                />
                            ) : (
                                <Checkbox
                                    className="checkbox-input__cart"
                                    checked={rewardStatusCode === 1}
                                    
                                    onChange={(e) => {
                                        setLoadinCheckBoxBtn(true);
                                        // checkDiscounts(null, e.target.checked);
                                        checkRewardPoint(e.target.checked)
                                    }}></Checkbox>
                            )}
                        </div>{' '}
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <strong>{labels['Apply Reward Point']} </strong>
                    </div>
                </figure> */}

                {promocodeResult !== null && (
                    <figure>
                        <figcaption>
                            <strong style={{ color: 'green' }}>
                                {labels['Promocode Discount']}
                            </strong>
                            <small>
                                ₹ {parseFloat(promocodeResult).toFixed(2)}
                            </small>
                        </figcaption>
                    </figure>
                )}

                {/* {rewardPointResult !== 0 && rewardPointResult !== null && (
                    <figure>
                        <figcaption>
                            <strong style={{ color: 'green' }}>
                                {labels['Reward point Discount']}
                            </strong>
                            <small>
                                ₹ {parseFloat(rewardPointResult).toFixed(2)}
                            </small>
                        </figcaption>
                    </figure>
                )} */}
                <figure>
                    <strong>{labels['Payment Method']} </strong> <br />
                    <div style={{ marginTop: '1rem' }}>
                        <Radio.Group
                            onChange={(e) => setPaymentMethod(e.target.value)}>
                            <Radio value={'online'}>{labels['Online']}</Radio>
                            <Radio value={'cod'}>
                                {labels['Cash on delivery']}
                            </Radio>
                        </Radio.Group>
                    </div>
                </figure>
                {totalView}
            </div>
            <div className="ps-block__footer">
                <Button
                    className="ps-btn"
                    style={{ width: '100%' }}
                    htmlType="submit"
                    loading={loadingPlaceOrderBtn}
                    onClick={() => {
                        placeOrder(
                            promoCode,
                            paymentMethod,
                            rewardPointResult === 0 ? false : true
                        );
                    }}>
                    {labels['Place Order']}
                </Button>
            </div>
        </div>
    );
};
export default ModulePaymentOrderSummary;
