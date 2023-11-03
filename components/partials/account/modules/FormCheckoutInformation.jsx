import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { Form, Input, Modal, Radio } from 'antd';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import constants from '~/public/static/data/my-constants/Constants';
import { showNotification } from '~/utilities/common-helpers';
import Addresses from '../Addresses';
import AllAddress from './AllAddress';
import AddAddress from '../AddAddress';
import FormEditAddress from './FormEditAddress';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';

function FormCheckoutInformation(props) {
    const [addressData, setAddressData] = useState([]);
    const [billingAddressData, setBillingAddressData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const Router = useRouter();
    const [isQuickView, setIsQuickView] = useState(false);
    const [isQuickViewBilling, setIsQuickViewBilling] = useState(false);
    const [isFormQuickView, setIsFormQuickView] = useState(false);
    // const language = useLanguageHook();

    const labels = Labels(props.language)
    

  

    const handleShowQuickView = (e) => {
        if (props.title === labels['Shipping Address']){

            setIsQuickView(true);
        }
        else{
            setIsQuickViewBilling(true);
        }       
        // e.preventDefault();
    };

    const handleHideQuickView = (e) => {
        // e.preventDefault();
        setIsQuickView(false);
        setIsQuickViewBilling(false);
    };



    let session_id;

    if (typeof window !== 'undefined') {
        session_id =
            localStorage.getItem('session_id') === null
                ? ''
                : localStorage.getItem('session_id');
    } else {
        session_id = '';
    }

    function getAddress() {
        Axios.post(apis.getAddress, {
            session_id: session_id,
            language: props.language,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    setAddressData(res.data.data.address);
                    setBillingAddressData(res.data.data.address);
                    setApiSuccess(true);
                    // props.refreshPage()
                } else {
                    showNotification(

                        props.language,
                        constants.Error
                    );
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(
                    props.language,
                    constants.Error
                );
            });
    }

    const handleSetDefaultAddress = (addressId) => {
        Axios.post(apis.setDefaultAddress, {
            session_id: session_id,
            language: props.language,
            addressId: addressId,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    props.refreshPage();
                    setApiSuccess(true);
                    handleHideQuickView();
                } else {
                    showNotification(props.language,
                        constants.Error
                    );
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(props.language,
                    constants.Error

                );
            });
    };

    const handleSetBillingAddress = (addressId) => {

        Axios.post(apis.setBillingAddress, {
            session_id: session_id,
            language: props.language,
            addressId: addressId,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    props.refreshPage();
                    setApiSuccess(true);
                    handleHideQuickView();
                } else {
                    showNotification(props.language,
                        constants.Error
                    );
                }
            })
            .catch((err) => {
                SetApiError(true);
                showNotification(props.language,
                    constants.Error

                );
            });
    };

    const handleAddAddress = (datas,defaultAddress,billingAddress) => {
        Axios.post(apis.addAddress, {
            session_id: constants['sessionId'],
            language: props.language,
            name:datas.name ,
            phone:datas.phone,
            postcode:datas.postCode,
            state:datas.state,
            streetAddress:datas.streetAddress,
            default:defaultAddress,
            billing:billingAddress,
            region:datas.region
        })
            .then((res) => {

                setApiSuccess(true);
                showNotification(props.language,constants.Success, res.data.message,);
                // Router.push('/account/addresses');
                props.refreshPage()
                setIsFormQuickView(false)
                getAddress()

            })
            .catch((err) => {
                SetApiError(true);
                showNotification(props.language,
                    constants.Error
                );
            });
    };

    useEffect(() => {
        getAddress();
    }, []);

    // render() {
    return (
        props.language !== false &&  <>
            <figure className="ps-block--address" style={{ marginTop: '2rem' }}>
                <figcaption>{props.title}</figcaption>
                <div className="ps-block__content">
                    <div defaultValue={1} className="ps-block--address__select">
                        {constants['sessionId'] !== null ? (
                            props.address.length === 0 ? (
                                <>
                                    <p>{labels['Add address before place order']} </p>
                                    {/* <Link href="/account/add-address"> */}
                                        <a className="ps-btn" onClick={()=>setIsFormQuickView(true)}>{labels['Add Address']}</a>
                                    {/* </Link> */}
                                </>
                            ) : (
                                props.address.map((address, index) => {
                                    return (
                                        <>
                                            <div className="ps-block--address__address">
                                                <div>
                                                    <p
                                                        style={{
                                                            fontWeight: '600',
                                                        }}>
                                                        {address.name}
                                                    </p>
                                                    <button
                                                        // className="ps-btn"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Quick View"
                                                        onClick={(e) => {
                                                            handleShowQuickView();
                                                            e.preventDefault();
                                                        }}>
                                                            {labels['Change']}
                                                        
                                                    </button>
                                                </div>

                                                <p>
                                                    {address.streetAddress},{' '}
                                                    {address.state},{' '}
                                                    {address.postcode},{' '}
                                                    {address.phone}{' '}
                                                </p>

                                            </div>
                                        </>
                                    );
                                })
                            )
                        ) : (

                            <Link href="/account/login">
                                <a className="ps-btn"> {labels['Login']}</a>
                            </Link>
                        )}
                    </div>
                </div>
            </figure>

            {apiSuccess && (
                <>
                <Modal
                    centered
                    footer={null}
                    width={1024}
                    onCancel={(e) => handleHideQuickView(e)}
                    visible={isQuickView}
                    closeIcon={<i className="icon icon-cross2"></i>}>
                    <h3> {labels['Address']}</h3>
                    {addressData.map((address, index) => {
                        return (
                            <AllAddress
                                key={index}
                                address={address}
                                handleSetDefaultAddress={
                                    handleSetDefaultAddress
                                }
                            />
                        );
                    })}
                    {/* <Link href="/account/add-address"> */}
                        <a className="ps-btn ps-btn--fullwidth" onClick={()=>{setIsQuickView(false);setIsFormQuickView(true)}}>{labels['Add Address']}</a>
                    {/* </Link> */}
                </Modal>
                <Modal
                    centered
                    footer={null}
                    width={1024}
                    onCancel={(e) => handleHideQuickView(e)}
                    visible={isQuickViewBilling}
                    closeIcon={<i className="icon icon-cross2"></i>}>
                    <h3> billing</h3>
                    {addressData.map((address, index) => {
                        return (
                            <AllAddress
                                key={index}
                                address={address}
                                handleSetDefaultAddress={
                                    handleSetBillingAddress
                                }
                            />
                        );
                    })}
                    {/* <Link href="/account/add-address"> */}
                        <a className="ps-btn ps-btn--fullwidth" onClick={()=>{setIsQuickView(false);setIsFormQuickView(true)}}>{labels['Add Address']}</a>
                    {/* </Link> */}
                </Modal>
 
 

                <Modal
                    centered
                    footer={null}
                    width={1024}
                    onCancel={(e) => setIsFormQuickView(false)}
                    visible={isFormQuickView}
                    closeIcon={<i className="icon icon-cross2"></i>}>
                   
                     <div className="ps-page__content">
                            <FormEditAddress
                                language= {props.language}

                                
                                handleAddAddress={handleAddAddress}
                                quickView={true}
                                setIsFormQuickView={setIsFormQuickView}
                            />
                        </div>
                    
                </Modal>
                </>
            )}

        </>
    );
}

export default FormCheckoutInformation;
