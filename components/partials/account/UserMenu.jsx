import React, { Component, useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { ShareDataContext } from '~/utilities/share-data-context';
import AddAddress from './AddAddress';
import Addresses from './Addresses';
import ChangePassword from './ChangePassword';
import EditAddress from './EditAddress';
import ForgotPassword from './ForgotPassword';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import MyOrderDetail from './MyOrderDetail';
import OrderHistory from './OrderHistory';

import { useWindowSize } from '../homepage/electronic/ElectronicProductGroupWithCarousel';



function UserMenu({ page }) {
    // const language = useSelector((state) => state.datas.language);
    // const language = constants.language
    // const language = useLanguageHook();
    const [language, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
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

 
    // const language = useLanguageHook();

    const labels = Labels(language);

    const [addressData_, setAddressData_] = useState(null);

    const [width, height] = useWindowSize();


    return (
        language !== false && <ShareDataContext.Provider
            value={{
                address_data: [addressData_, setAddressData_],
            }}>
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        {language === constants['English'] && (
                            <div className="col-lg-4">
                                <div className="ps-section__left">
                                    {language !== undefined && (
                                    <AccountMenuSidebar
                                        language={language}
                                        activeType={'Address'}
                                    />
                                    )}
                                </div>
                            </div>
                        )}

                    {(language === constants['Arabic'] && width <= 991 )&& (
                            <div className="col-lg-4">
                                <div className="ps-section__left">
                                    <AccountMenuSidebar
                                        language={language}
                                        activeType={'Address'}
                                    />
                                </div>
                            </div>
                        )}

                        {page === 'Address' && <Addresses language={language} />}

                        {page === 'ChangePassword' && <ChangePassword language={language}/>}

                        {page === 'OrderHistory' && <OrderHistory language={language}/>}

                        {page === 'EditAddress' && <EditAddress language={language} />}

                        {page === 'AddAddress' && <AddAddress language={language} />}
                        
                        {page === 'MyOrderDetail' && <MyOrderDetail language={language} />}


                        


                        {(language === constants['Arabic'] && width > 991 )&& (
                            <div className="col-lg-4">
                                <div className="ps-section__left">
                                    <AccountMenuSidebar
                                        language={language}
                                        activeType={'Address'}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </ShareDataContext.Provider>
    );
    // }
}

export default UserMenu;
