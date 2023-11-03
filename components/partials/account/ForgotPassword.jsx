import React, {useEffect, useState } from 'react';
import Link from 'next/link';


import { Form, Input, notification } from 'antd';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setForgetPasswordEmail } from '~/store/datas/action';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';



function ForgotPassword() {
    const [emailId, setEmailId] = useState('');
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    // const language = useLanguageHook();


    const router = useRouter()
    const dispatch = useDispatch()
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

    const handleSubmit = (e) => {
        Axios.post(apis.forgotPassword, {
            email: emailId,
            language:language,
        })
            .then((res) => {
                if (res.data.status === 1) {

                    showNotification(language,constants.Success, res.data.message);

         

                    dispatch(setForgetPasswordEmail(emailId))
                    router.push('/account/reset-password',null,{shallow:true});
                    // window.location.assign('/')
                }else{
                    showNotification(
                        language,
                        constants.Sorry,
                        res.data.message,
                        
                    );
                }
                
            })
            .catch((err) => {
                SetApiError(true);

                showNotification(
                    language,
                   constants.Error
                );
            });
    };
    return (
        language !== false && 
        <div className="ps-my-account" style={{minHeight:"0"}}>

            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={() => handleSubmit()}>
                    <ul className="ps-tab-list">
                        <li className="active">
                            <Link href="#">
                                <a>
                                {lables['Email Verifiation']}

                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/account/register">
                                <a>Email Verifiation</a>
                            </Link>
                        </li> */}
                    </ul>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            {/* <h5>Log In Your Account</h5> */}
                            <div className="form-group">
                                <Form.Item
                                    name="username"
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
                                            setEmailId(e.target.value)
                                        }
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group submit">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                      {lables['Verify']}
                                </button>
                            </div>
                        </div>
                       
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default ForgotPassword;
