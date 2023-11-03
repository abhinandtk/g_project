import React, { useState } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ShoppingCart from '~/components/partials/account/ShoppingCart';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';

const ShoppingCartPage = () => {

    const [orderData, setOrderData] = useState(null);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
        },
    ];
    return (
        // <ContainerPage title="Shopping Cart" boxed={true}>
        <ShareDataContext.Provider
            value={{
                orderData_: [orderData, setOrderData],
            }}>
            <ContainerHomeElectronics title="Shopping Cart" boxed={true}>
                <div className="ps-page--simple">
                    <BreadCrumb breacrumb={breadCrumb} />
                    <ShoppingCart />
                </div>
            </ContainerHomeElectronics>
         </ShareDataContext.Provider>
        // </ContainerPage>
    );
};

export default ShoppingCartPage;
