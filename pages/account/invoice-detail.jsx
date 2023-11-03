import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import InvoiceDetail from '~/components/partials/account/InvoiceDetail';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const InvoiceDetailPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invoice Detail',
        },
    ];
    return (
        // <ContainerPage title="Invoice detail" boxed={true}>
            <ContainerHomeElectronics title="Invoice detail" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <InvoiceDetail />
            </div>
            </ContainerHomeElectronics>
        // </ContainerPage> 
    );
};

export default InvoiceDetailPage;
