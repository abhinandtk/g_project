import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Invoices from '~/components/partials/account/Invoices';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const InvoicePage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Invoices',
        },
    ];
    return (
        // <ContainerPage title="Invoice" boxed={true}>
            <ContainerHomeElectronics title="Invoice" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Invoices />
            </div>
            </ContainerHomeElectronics>
        //</ContainerPage>
    );
};

export default InvoicePage;
