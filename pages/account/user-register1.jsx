import React, { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

import Link from 'next/link';
import Router from 'next/router';

import { Button, Form, Input, notification } from 'antd';
import { connect } from 'react-redux';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import constants from '~/public/static/data/my-constants/Constants';
import { updateNavbar } from '~/store/datas/action';
import { useDispatch } from 'react-redux';
import { ConfigProvider } from 'antd';

import { facebookProvider } from '~/public/static/data/config/authMethods';
import { googleProvider } from '~/public/static/data/config/authMethods';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import socialMediaAuth from '~/public/static/data/service/auth';
import firebase from '~/public/static/data/config/firebase-config';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const UserRegister1 = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];


    const handleFirebaseAuth = async (provider) => {
        const res = await socialMediaAuth(provider);
        
        
        // res. 

    };

    const handleLogout = async () => {
        firebase.auth().signOut();
    };

    const [password, setPassword] = useState('');
    const [emailId, setEmailId] = useState('');
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [loadingBtn, setLoadingBtn] = useState(false);
    const dispatch = useDispatch();
    const language = useLanguageHook();


    const handleSubmit = (e) => {
        Axios.post(apis.register, {
            email: emailId,
            password: password,
            name: name,
            phone: phonenum,
            fcm: '',
            Platform: '0',

            refer_code: '',
            productVariantId:
                constants.productVariantId === null
                    ? null
                    : constants.productVariantId,
            quantity: constants.quantity === null ? null : constants.quantity,
            language: language,
        })

            .then((res) => {
                setApiSuccess(true);
                if (res.data.status === 1 || res.data.status === 3) {

                    Router.push('/account/register-with-otp');
                    localStorage.setItem('email-to-reg-otp', emailId);
                    showNotification(constants.Success, res.data.message);
                } else {
                    showNotification(
                        res.data.status == 1
                            ? constants.Success
                            : constants.Error,
                        res.data.message
                    );
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(constants.Error);
            });
    };

    return (
       
        <ContainerHomeElectronics title="Login" boxed={true}> 

            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
               
                <ConfigProvider direction="ltr">
            <div className="ps-my-account">
                <div className="container">
                    <Form
                        className="ps-form--account"
                        onFinish={() => handleSubmit()}>
                        <ul className="ps-tab-list">
                            <li className="active">
                                <Link href="/account/login">
                                    <a>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/register">
                                    <a>Register</a>
                                </Link>
                            </li>
                        </ul>
                        <div className="ps-tab active" id="sign-in">
                            <div className="ps-form__content">
                                <h5>Log In Your Account</h5>
                                <div className="form-group">
                                <Form.Item
                                    validateTrigger="onSubmit"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your name!',
                                        },
                                        {
                                            message: `name minimum character 3 `,

                                            min: 3,
                                        },
                                        {
                                            message: `name maximum character 20 `,

                                            max: 20,
                                        },
                                        // {
                                        //     pattern: new RegExp(
                                        //         `^[a-zA-Z\s]*$`
                                        //     ),
                                        //     message: 'name must be text',
                                        // },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </div>
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
                                        forgot password
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
                                        <b>Login</b>
                                    </Button>
                                </div>
                            </div>
                            <div className="ps-form__footer" style={{paddingBottom:"0",paddingTop:"0"}}>
                                <p style={{textAlign:"center"}}>Connect with:</p>
                                <div className='login-btn__parents'>
                                    <div className="google-btn" onClick={() =>
                                                handleFirebaseAuth(
                                                    googleProvider
                                                )
                                            }>
                                        <div className="google-icon-wrapper">
                                            <img
                                                className="google-icon"
                                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                            />
                                        </div>
                                        <p className="btn-text">
                                            <b>Sign in with google</b>
                                        </p>
                                    </div>
                                    <div>
                                        <button onClick={(e) =>
                                                handleFirebaseAuth(
                                                    facebookProvider
                                                )
                                            } className="loginBtn loginBtn--facebook">
                                            Login with Facebook
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
                
            </div>
         </ContainerHomeElectronics> 
      

    );
};

export default UserRegister1;
