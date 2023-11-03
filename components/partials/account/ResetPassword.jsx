import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { Form, Input, notification } from 'antd';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import { useRouter } from 'next/router';
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { setForgetPasswordEmail } from '~/store/datas/action';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';

function ResetPassword() {
    const [otp, setOtp] = useState('');
    const [emailId, setEmailId] = useState('');
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);

    const lables = Labels(language);
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
    const dispatch = useDispatch();
    // const language = useLanguageHook();

    const handleFeatureWillUpdate = (e) => {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    };
    const router = useRouter();
    const email = useSelector((state) => state.datas.forgetPasswordEmaiId);

    const handleSubmit = (e) => {
        console.log(otp,"otp");
        Axios.post(apis.resetPassword, {
            email: email,
            language: language,
            password: confirmPassword,
            otp: otp,
            productVariantId:
            localStorage.getItem('productVariantId') === null
                ? null
                :JSON.parse( localStorage.getItem('productVariantId')),
        quantity:
        localStorage.getItem("quantity") === null ? null :JSON.parse( localStorage.getItem("quantity")),
        })
            .then((res) => {
                if (res.data.status === 1) {
                    showNotification(language,constants.Success, res.data.message);

                    // setApiSuccess(true);
                    dispatch(setForgetPasswordEmail(null));
                    localStorage.setItem('session_id', res.data.session_id);
                    localStorage.setItem('name', res.data.name);
                    localStorage.setItem('email', res.data.email);
                    localStorage.setItem('refer-code', res.data.refer_a_friend);

                    // router.push('/', null, {
                    //     shallow: true,
                    // });
                    window.location.assign('/')

                } else {
                    showNotification(language,constants.Sorry, res.data.message);
                }
            })
            .catch((err) => {
                SetApiError(true);

                showNotification(language,constants.Error);
            });
    };
    return (
        language !== false && 
        <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={() => handleSubmit()}>
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="/account/login">
                                <a>

                                {lables['Reset your password']}

                                </a>
                            </Link>
                        </li>
                        
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                           
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
                               
                            </div>
                            <div className="form-group">
                                <Form.Item
                                        validateTrigger="onSubmit"

                                    name="newPassword"
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
                                      \n one digit`,

                                            pattern: new RegExp(
                                                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/g
                                            ),
                                        },
                                    ]}>
                                    <Input.Password
                                        className="form-control"
                                        type="password"
                                        placeholder="New Password"
                                        onChange={(e) =>
                                            setNewPassword(e.target.value)
                                        }
                                        value={newPassword}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group">
                                <Form.Item
                                        validateTrigger="onSubmit"

                                    name="Confirmpassword"
                                    dependencies={['newPassword']}
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
                                      \n one digit`,

                                            pattern: new RegExp(
                                                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/g
                                            ),
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (
                                                    !value ||
                                                    getFieldValue(
                                                        'newPassword'
                                                    ) === value
                                                ) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(
                                                    new Error(
                                                        'The two passwords that you entered do not match!'
                                                    )
                                                );
                                            },
                                        }),
                                    ]}>
                                    <Input.Password
                                        className="form-control"
                                        type="password"
                                        placeholder="Confirm Password"
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                        value={confirmPassword}
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group submit">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                   
                                {lables['Reset Password']}

                                </button>
                            </div>
                        </div>
                        
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ResetPassword;
