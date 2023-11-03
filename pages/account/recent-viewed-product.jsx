import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import RecentViewedProducts from '~/components/partials/account/RecentViewedProducts';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const RecentViewedProductsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Recent Viewed Products',
        },
    ];
    return (
        // <ContainerPage title="Recent Viewed Products">
        <ContainerHomeElectronics title="Recent Viewed Products">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <RecentViewedProducts />
            </div>
        </ContainerHomeElectronics>
        // </ContainerPage>
    );
};

export default RecentViewedProductsPage;
