import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import apis from '~/public/static/data/my-constants/Api';
import constants from '~/public/static/data/my-constants/Constants';
import { Checkbox, Form, Input } from 'antd';
import Link from 'next/link';
import { Labels } from '~/public/static/data/my-constants/Labels';

function ChangePasswordForm(props) {
    // render() {
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function sumbitForm(e) {
        // e.preventDefault();
        props.handleChangePassword(
            currentPassword,
            newPassword,
            
        );
    }

    const labels = Labels(props.language)


    return (
        <Form className="ps-form--edit-address" onFinish={(e) => sumbitForm(e)}>
            <div className="ps-form__header">
                <h3 style={{textAlign:props.language === constants.Arabic && 'right'}}> {labels['Change Password']}</h3>
            </div>
            <div className="ps-form__content">
                <div className="form-group">
                    <Form.Item
                        name="currentPassword"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                            
                        ]}>
                        <Input.Password
                            className="form-control"
                            type="password"
                            placeholder="Current Password..."
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            value={currentPassword}
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="newPassword"
                        
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
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
                            placeholder="New Password..."
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <Form.Item
                        name="Confirmpassword"
                        dependencies={['newPassword']}
                        
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
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
                                        getFieldValue('newPassword') === value
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
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            value={confirmPassword}
                        />
                    </Form.Item>
                </div>


                <div className="form-group submit" style={{width:"100%", display:"flex",justifyContent:props.language === constants.Arabic && 'flex-end'}}>
                    <button type="submit" className="ps-btn" >
                        {labels['Change Password']}
                    </button>
                </div>
            </div>
        </Form>
    );
    // }
}

export default ChangePasswordForm;
