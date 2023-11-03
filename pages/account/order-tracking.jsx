import React from 'react';
import OrderTracking from '~/components/partials/account/OrderTracking';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const OrderTrackingPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Order Tracking',
        },
    ];
    return (
        // <ContainerPage title="Order Tracking" boxed={true}>
        <ContainerHomeElectronics title="Order Tracking" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <OrderTracking />
            </div>
            </ContainerHomeElectronics>
        // </ContainerPage>
    );
};

export default OrderTrackingPage;
