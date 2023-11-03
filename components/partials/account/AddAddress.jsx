import React, { Component, useState } from 'react';
import Link from 'next/link';
import FormEditAddress from './modules/FormEditAddress';
import constants from '~/public/static/data/my-constants/Constants';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { showNotification } from '~/utilities/common-helpers';
import { Router, useRouter } from 'next/router';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

function AddAddress({ language }) {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    // const language = useLanguageHook();

    const Router = useRouter();
    // render() {
    const handleAddAddress = (datas, defaultAddress,billingAddress) => {
        Axios.post(apis.addAddress, {
            session_id: constants['sessionId'],
            language: language,
            name: datas.name,
            phone: datas.phone,
            postcode: datas.postCode,
            state: datas.state,
            streetAddress: datas.streetAddress,
            default: defaultAddress,
            billing: billingAddress,
            region:datas.region
        })
            .then((res) => {
                console.log("hai this is nothing",res)
                setApiSuccess(true);
                showNotification(language,constants.Success, res.data.message);
                Router.push('/account/addresses');
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(language,constants.Error);
            });
    };

    return (
        language !== false && (
            <div className="col-lg-8">
                <div className="ps-page__content">
                    <FormEditAddress
                        language={language}
                        handleAddAddress={handleAddAddress}
                    />
                </div>
            </div>
        )
    );
    // }
}

export default AddAddress;
