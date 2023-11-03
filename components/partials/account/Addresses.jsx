import React, { Component, useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import { useRouter } from 'next/router';
import { ShareDataContext } from '~/utilities/share-data-context';
import { useDispatch, useSelector } from 'react-redux';
import { getAddress } from '~/store/collection/action';
import { addItemToCompare } from '~/store/compare/action';
import { showNotification } from '~/utilities/common-helpers';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import Error from '~/pages/404';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { Labels } from '~/public/static/data/my-constants/Labels';

function Addresses({language}) {
    const [addressData, setAddressData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const Router = useRouter();
    const [addressData_, setAddressData_] = useState(null);


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
            language: language,
        })
            .then((res) => {
                if (res.data.status === 1) {
                    setAddressData(res.data.data.address);
                    setApiSuccess(true);
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
    }


    useEffect(() => {
        getAddress();
    }, []);

    const labels = Labels(language)


    return (
        language !== false &&  <>
            {apiSuccess && (
                <div className="col-lg-8">
                    <div className="ps-section--account-setting">
                        <div className="ps-section__content">
                            <div className="row">
                                <div className="col-md-12 col-12">
                                    <figure className="ps-block--address">
                                        <figcaption style={{textAlign:language === constants.Arabic && 'right'}}>{labels['Address']} </figcaption>

                                        <div className="ps-block__content">
                                            {addressData.length === 0 ? (
                                                <>
                                                    <p>
                                                    
                                                        {labels['You Have Not Set Address Yet.']}
                                                    </p>
                                                    <Link href="/account/add-address">
                                                        <a>{labels['Add']} </a>
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    {addressData.map(
                                                        (address, index) => {
                                                            return (
                                                                <>
                                                                    <div
                                                                        className={`ps-block--address__address ${
                                                                            address.is_default ===
                                                                                true &&
                                                                            `ps-block--address__default`
                                                                        }`}>
                                                                            {address.is_default && <div style={{float:"right",border:"1px solid #E1E1E1",padding:"1px 3px"}}>Delivery Address</div>}
                                                                            {address.is_billing_default && <div style={{float:"right",border:"1px solid #E1E1E1",padding:"1px 3px",marginRight:"5px"}}>Billing Address </div>}
                                                                        <p
                                                                            style={{
                                                                                fontWeight:
                                                                                    '600',
                                                                                fontSize:
                                                                                    '25px',
                                                                            }}>
                                                                            {
                                                                                address.name
                                                                            }
                                                                        </p>
                                                                        <p>
                                                                            {
                                                                                address.streetAddress
                                                                            }
                                                                            ,{' '}
                                                                            {
                                                                                address.state
                                                                            }
                                                                            ,{' '}
                                                                            {
                                                                                address.postcode
                                                                            }
                                                                            ,{' '}
                                                                            {
                                                                                address.phone
                                                                            }{' '}
                                                                        </p>

                                                                        <Link
                                                                            href={`/account/edit-address/${address.addressId}`}>
                                                                            <a
                                                                                onClick={() =>
                                                                                    setAddressData_(
                                                                                        addressData[
                                                                                            index
                                                                                        ]
                                                                                    )
                                                                                }>
                                                                                    {labels['Edit']}
                                                                                
                                                                            </a>
                                                                        </Link>
                                                                    </div>
                                                                </>
                                                            );
                                                        }
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </figure>
                                </div>

                                {addressData.length !== 0 && (
                                    <div className="col-md-12 col-12">
                                        <figure className="ps-block--address">
                                            <div className="ps-block__content" style={{width:"100%",display:"flex",justifyContent:language === constants.Arabic && 'right'}}>
                                                <>
                                                    <a
                                                        className="ps-btn"
                                                        href=""
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            Router.push(
                                                                '/account/add-address'
                                                            );
                                                        }}>
                                                        {labels['Add Address']}
                                                    </a>
                                                </>
                                            </div>
                                        </figure>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    );
    // }
}

export default Addresses;
