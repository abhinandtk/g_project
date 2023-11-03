import React, { useState } from 'react';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import MyOrders from './modules/MyOrders';

function OrderHistory({language}) {
    
    const labels = Labels(language)

    return (

                    <div className="col-lg-8">
                        <div className="ps-page__content">
                            <div className="ps-section--account-setting">
                                <div className="ps-section__header">
                                    <h3 style={{textAlign:language === constants.Arabic && 'right'}}>{labels['My Orders']} </h3>
                                </div>
                                <div className="ps-section__content">
                                    <MyOrders language={language}/>
                                </div>
                            </div>
                        </div>
                    </div>

    );
}

export default OrderHistory;
