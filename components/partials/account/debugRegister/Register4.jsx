import React, { Component, useContext, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

import { Button, Form, Input, List } from 'antd';
import { connect } from 'react-redux';
import apis from '~/public/static/data/my-constants/Api';

import CountryPhoneInput, { ConfigProvider } from 'antd-country-phone-input';
import en from 'world_countries_lists/data/countries/en/world.json';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';
import Axios from 'axios';
import { ShareDataContext } from '~/utilities/share-data-context';
import { showNotification } from '~/utilities/common-helpers';
import { useDispatch } from 'react-redux';
import constants from '~/public/static/data/my-constants/Constants';
import { facebookProvider, googleProvider } from '~/public/static/data/config/authMethods';
import socialMediaAuth from '~/public/static/data/service/auth';

function Register4() {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phonenum, setPhone] = useState('');
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);

    

    const handleFirebaseAuth = async (provider) => {
        const res = await socialMediaAuth(provider);
        
        
        // res. 

    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        
        Axios.post(apis.register, {
            email: emailId,
            password: password,
            name: name,
            phone: phonenum,
            fcm: '',
            Platform: '0',
            
            refer_code:'',
            productVariantId: JSON.parse(localStorage.getItem("productVariantId")),
            quantity: JSON.parse(localStorage.getItem("quantity")),
            language:constants.language,
            
        })

            .then((res) => {
                setApiSuccess(true);
                if (res.data.status === 1 || res.data.status === 3) {

                    Router.push('/account/register-with-otp');
                    localStorage.setItem("email-to-reg-otp",emailId)
                    showNotification(
                       
                           constants.Success,
                        res.data.message,
                    )
                }else{
                showNotification(
                    res.data.status == 1
                        ? constants.Success
                        : constants.Error,
                    res.data.message
                )
            }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                    constants.Error
                );
            });
    };

    return (
        <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={(e)=>handleSubmit(e)}
                    >
                    <ul className="ps-tab-list">
                        <li>
                            <Link href="/account/login">
                                <a>Login</a>
                            </Link>
                        </li>
                        <li className="active">
                            <Link href="/account/register">
                                <a>Register</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="ps-tab active" id="register">
                        <div className="ps-form__content">
                            <h5>Register An Account</h5>
                            <div className="form-group">
                                <Form.Item
                                    validateTrigger='onSubmit'
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
                                        {
                                            pattern: new RegExp(
                                                `^[a-zA-Z\s]*$`
                                            ),
                                            message: 'name must be text',
                                        },
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
                                    validateTrigger='onSubmit'

                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your email!',
                                        },
                                    ]}>
                                    <Input
                                        className="form-control"
                                        type="email"
                                        placeholder="Email address"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group form-forgot">
                                <Form.Item
                                    validateTrigger='onSubmit'

                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!',
                                        },
                                        {
                                            message: `password must be 8 character ,\n
                                                  \n one uppercase ,
                                                  \n one lowercase ,
                                                  \n one digit,
                                                  \n one special character`,


                                            pattern: new RegExp(
                                        
                                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])[A-Za-z\d$&+,:;=?@#|'<>.^*()%!-]{8,}$/g
                                            ),
                                        },
                                    ]}>
                                    <Input.Password
                                        className="form-control"
                                        type="password"
                                        placeholder="Password..."
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group submit">
                                <button
                                    
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                        <div className="ps-form__footer" style={{paddingBottom:"0",paddingTop:"0"}}>
                                <p style={{textAlign:"center"}}>Connect with:</p>
                                <div className='login-btn__parents'>
                                    <div className="google-btn"
                                     onClick={() =>
                                                handleFirebaseAuth(
                                                    googleProvider
                                                )
                                            }
                                            >
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
                                        <button 
                                        onClick={(e) =>
                                                handleFirebaseAuth(
                                                    facebookProvider
                                                )
                                            } 
                                            className="loginBtn loginBtn--facebook">
                                            Login with Facebook
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register4;
