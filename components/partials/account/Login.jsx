import React, {  useEffect, useState } from 'react';
import Link from 'next/link';
import  { useRouter } from 'next/router';

import { Button, Form, Input } from 'antd';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import constants from '~/public/static/data/my-constants/Constants';
import { updateNavbar } from '~/store/datas/action';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigProvider } from 'antd';

import { facebookProvider } from '~/public/static/data/config/authMethods';
import { googleProvider } from '~/public/static/data/config/authMethods';


import firebase from '~/public/static/data/config/firebase-config';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';

function Login() {

    const router = useRouter()

    const socialLogin = (email, id, name) => {
        Axios.post(apis.socialRegistration, {
            language: 'English',
            social_authId: id,
            name: name,
            email: email,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    localStorage.setItem(
                        'session_id',
                        res.data.data.details.session_id
                    );
                    localStorage.setItem('email', email);
                    localStorage.setItem('name', name);
                    localStorage.setItem(
                        'refer-code',
                        res.data.data.details.refercode
                    );

                    

                    showNotification(language,constants.Success, res.data.message);
                    // window.location.assign('/');
                    router.push('/')
                    dispatch(updateNavbar(true));
                } else {
                    showNotification(language,constants.Info, res.data.message);
                }
            })
            .catch((err) => {
                showNotification(language,constants.Error);
            });
    };

    const socialMediaAuth = (provider) => {
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                console.log(res,"res in socialmediaauth");
                return (
                    res.user,
                    socialLogin(
                        res.additionalUserInfo.profile.email,
                        res.additionalUserInfo.profile.id,
                        res.additionalUserInfo.profile.name
                    )
                );
            })
            .catch((err) => {
                console.log(err,"err in socialmediaauth");

                return err;
            });
    };





    const [password, setPassword] = useState('');
    const [emailId, setEmailId] = useState('');
    const [loadingBtn, setLoadingBtn] = useState(false);
    const dispatch = useDispatch();
    // const language = useLanguageHook();

    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);

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
        setLoadingBtn(true);

        Axios.post(apis.login, {
            email: emailId,
            password: password,
            fcm: '',
            Platform: '0',
            language: language,
            refer_code: '',
            productVariantId:
                    localStorage.getItem('productVariantId') === null
                        ? null
                        :JSON.parse( localStorage.getItem('productVariantId')),
                quantity:
                localStorage.getItem("quantity") === null ? null :JSON.parse( localStorage.getItem("quantity")),
        })
            .then((res) => {
                console.log(res,"res in login");
                if (res.data.status === 1) {
                    localStorage.setItem('session_id', res.data.session_id);
                    localStorage.setItem('name', res.data.name);
                    localStorage.setItem('email', res.data.email);
                    localStorage.setItem('refer-code', res.data.refer_a_friend);
                    dispatch(updateNavbar(true));

                    showNotification(language,constants.Success, res.data.message);
                    // Router.push('/');
                    window.location.assign('/')
                    localStorage.removeItem('productVariantId')
                    localStorage.removeItem('quantity')

                } else {
                    showNotification(
                        language,
                        // res.data.status == 1
                        //     ? constants.Success
                            // : 
                            // constants.Error,
                            constants.Sorry,
                        res.data.message
                    );
                }
                setLoadingBtn(false);
            })
            .catch((err) => {
                console.log(err,"errr in login");

                setLoadingBtn(false);

                showNotification(language,constants.Error);
            });
        // }, 300);
    };
    return (
        <ConfigProvider direction="ltr">
            {language !== false && (
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={() => handleSubmit()}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>{lables['Login']}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/user-register">
                                    <a> {lables['Register']}</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5> {lables['Log In Your Account']}</h5>
                                <div className="form-group">
                                    <Form.Item
                                        validateTrigger="onSubmit"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your email!',
                                            },
                                            
                                        ]}>
                                        <Input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email address"
                                            onChange={(e) =>
                                                setEmailId(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group form-forgot">
                                    <Form.Item
                                        validateTrigger="onSubmit"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input your password!',
                                            },
                                        ]}>
                                        <Input.Password
                                            className="form-control"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </div>
                                <div className="form-group">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="remember-me"
                                            name="remember-me"
                                        />
                                    </div>
                                </div>
                                <Link href={'/account/forgot-password'}>
                                    <a className="login__forgot-password">
                                        
                                        {lables['forgot password']}
                                    </a>
                                </Link>

                                <div
                                    className="form-group submit"
                                    style={{
                                        marginTop: '2rem',
                                        color: 'blue',
                                    }}>
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
                                        <b>{lables['Login']}</b>
                                    </Button>
                                </div>
                            </div>
                            {/* <div
                                className="ps-form__footer"
                                style={{ paddingBottom: '0', paddingTop: '0' }}>
                                <p style={{ textAlign: 'center' }}>
                                    
                                    {lables['Connect with:']}
                                </p>
                                <div className="login-btn__parents">
                                    <div
                                        class="google-btn"
                                        onClick={() =>
                                            socialMediaAuth(googleProvider)
                                        }>
                                        <div class="google-icon-wrapper">
                                            <img
                                                class="google-icon"
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                            />
                                        </div>
                                        <p class="btn-text">
                                            <b>Sign in with google</b>
                                        </p>
                                    </div>
                                    <div>
                                        <button
                                            onClick={(e) =>
                                                socialMediaAuth(
                                                    facebookProvider
                                                )
                                            }
                                            class="loginBtn loginBtn--facebook">
                                            Login with Facebook
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </Form>
                </div>
            </div>
            )}
        </ConfigProvider>
    );
}

export default Login;
