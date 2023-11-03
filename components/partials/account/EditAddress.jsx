import React, { Component, useContext, useState } from 'react';
import Link from 'next/link';
import FormEditAddress from './modules/FormEditAddress';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import apis from '~/public/static/data/my-constants/Api';
import { ShareDataContext } from '~/utilities/share-data-context';
import Axios from 'axios';
import { showNotification } from '~/utilities/common-helpers';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

function EditAddress(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

    const router = useRouter();
    const { id } = router.query;
    // render() {
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    // const language = useLanguageHook();


    // const { address_data } = useContext(ShareDataContext);
    // const [addressData_, setAddressData_] = address_data;
    const [addressData_, setAddressData_] = useState(null);

    const Router = useRouter();
    // render() {
    const handleAddAddress = (datas, defaultaddress,billingAddress) => {
        console.log("inside",datas,);
        Axios.post(apis.editAddress, {
            session_id: constants['sessionId'],
            language: props.language,
            addressId: id,
            name: datas.name,
            phone: datas.phone,
            postcode: datas.postCode,
            state: datas.state,
            streetAddress: datas.streetAddress,
            default: defaultaddress,
            billing: billingAddress,
            region:datas.region,
        })
            .then((res) => {
                // setHomePageData([res.data.data]);
                if (res.data.status === 1) {
                    setApiSuccess(true);
                    showNotification(props.language,constants.Success, res.data.message,);
                    Router.push('/account/addresses');
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                    props.language,
                   constants.Error
                );
            });
    };

    return (
        <ShareDataContext.Provider
            value={{
                address_data: [addressData_, setAddressData_],
            }}>
            <div className="col-lg-8">
                <div className="ps-page__content">
                    <FormEditAddress
                        language={ props.language}
                        handleAddAddress={handleAddAddress}
                        editAddress={true}
                        // addressData={addressData_}
                    />
                </div>
            </div>
        </ShareDataContext.Provider>
    );
    // }
}

export default EditAddress;
