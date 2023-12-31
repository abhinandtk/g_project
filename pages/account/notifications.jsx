import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import Notifications from '~/components/partials/account/Notifications';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

const AccountNotificationsPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    return (
        // <ContainerPage title="Notifications" boxed={true}>
        <ContainerHomeElectronics title="Notifications" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Notifications />
            </div>
            </ContainerHomeElectronics>
        //</ContainerPage>
    );
};

export default AccountNotificationsPage;
