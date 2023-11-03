import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import apis from '~/public/static/data/my-constants/Api';
import OtpInput from 'react-otp-input';
import { Button, Form } from 'antd';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import { useDispatch, useSelector } from 'react-redux';
import constants from '~/public/static/data/my-constants/Constants';
import { updateNavbar } from '~/store/datas/action';
import { Labels } from '~/public/static/data/my-constants/Labels';

function RegisterWithOtpCompo() {
    const [otp, setOtp] = useState('');
    const dispatch = useDispatch()
    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
    const [loadingBtn,setLoadingBtn] = useState(false)

    const lables = Labels(language)
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


    const handleSubmit = (e) => {
        setLoadingBtn(true)

        Axios.post(apis.registerWithOtp, {
            email: typeof window !== 'undefined' && localStorage.getItem('email-to-reg-otp'),
            otp: otp,
            fcm: '',
            productVariantId:
                    localStorage.getItem('productVariantId') === null
                        ? null
                        :JSON.parse( localStorage.getItem('productVariantId')),
                quantity:
                localStorage.getItem("quantity") === null ? null :JSON.parse( localStorage.getItem("quantity")),
            Platform: '0',
            language: language,
        })
            .then((res) => {
               

                if (res.data.status == 1) {
                    
                    localStorage.setItem(
                        'session_id',
                        res.data.data.session_id
                    );
                    localStorage.setItem('name', res.data.data.name);
                    localStorage.setItem('email', res.data.data.email);
                    localStorage.setItem(
                        'refer-code',
                        res.data.data.refer_a_friend
                    );
                    showNotification(language,constants.Success, res.data.message);
                    dispatch(updateNavbar(true));
                    localStorage.removeItem('email-to-reg-otp');
                    localStorage.removeItem('productVariantId');
                    localStorage.removeItem('quantity');
                    // Router.push('/');
                    setLoadingBtn(false)
                    window.location.assign('/')
                }else{
                    showNotification(language,constants.Sorry, res.data.message,);
                    setLoadingBtn(false)

                }
            })
            .catch((err) => {
                setLoadingBtn(false)
                showNotification(
                    language,
                   constants.Error
                );
            });
    };

    return (
        language !== false && <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={() => handleSubmit()}
                >
                    <ul className="ps-tab-list">
                        <li>
                            <Link href="/account/login">
                                <a>{lables['Login']}</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/account/register">
                                <a> {lables['Register']}</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register" >
                        <div className="ps-form__content" >
                            <h5> {lables['Verify With Otp']}</h5>

                            <div className="form-group submit" >
                                <div className='otp-input-parent__login'>
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    autoFocus
                                    numInputs={6}
                                    otpType="number"
                                    disabled={false}
                                    className={`register-otp__otp-inputs-parent`}
                                />
                                </div>
                                {/* <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                   
                                    {lables['Verify Otp']}
                                </button> */}
                                <Button
                                        htmlType="submit"
                                        className="login-btn"
                                        loading={loadingBtn}
                                        style={{
                                            width: '100%',
                                            height: '50px',
                                            backgroundColor:
                                                constants.secondaryColor,
                                            fontWeight: '800',
                                            border: 'none',
                                        }}>
                                        <b> {lables['Verify Otp']}</b>
                                    </Button>
                            </div>
                        </div>
                        
                    </div>
                </Form>
            </div>
        </div>
    );
    
}


export default RegisterWithOtpCompo;
