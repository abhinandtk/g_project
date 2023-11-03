import React from 'react';

import MyAccount from '~/components/partials/account/MyAccount';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'My Account',
        },
    ];
    return (
        //<ContainerPage title="My account" boxed={true}>
             <ContainerHomeElectronics  title="My account" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <MyAccount />
            </div>
            </ContainerHomeElectronics>
        //</ContainerPage>
    );
};

export default MyAccountPage;
