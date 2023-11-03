import React, { Component, useState } from 'react';
import Link from 'next/link';
import FormEditAddress from './modules/FormEditAddress';
import constants from '~/public/static/data/my-constants/Constants';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { showNotification } from '~/utilities/common-helpers';
import { Router, useRouter } from 'next/router';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import ChangePasswordForm from './modules/ChangePasswordForm';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

function ChangePassword({language}) {
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    // const language = useLanguageHook();


    const Router = useRouter();
    // render() {
    const handleChangePassword = (currentPass, newPass) => {
        Axios.post(apis.changePassword, {
            session_id: constants['sessionId'],
            language: language,
            current_password: currentPass,
            new_password: newPass,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    showNotification(language,constants.Error, res.data.message);
                    Router.push('/');
                } else if (res.data.status === 2) {
                    showNotification(language,constants.Sorry, res.data.message);
                } else {
                    showNotification(
                        language,
                       constants.Error
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
        <div className="col-lg-8">
            <div className="ps-page__content">
                <ChangePasswordForm
                    language={language}
                    handleChangePassword={handleChangePassword}
                />
            </div>
        </div>
    );
    // }
}

export default ChangePassword;
