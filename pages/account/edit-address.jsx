import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import EditAddress from '~/components/partials/account/EditAddress';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const EditAddressPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Edit address',
        },
    ];
    return (
        // <ContainerPage title="Edit Address" boxed={true}>
            <ContainerHomeElectronics title="Edit Address" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <EditAddress />
            </div>
            </ContainerHomeElectronics>
        // </ContainerPage>
    );
};

export default EditAddressPage;
