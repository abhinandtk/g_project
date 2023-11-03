import React, { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';
import ChangePassword from '~/components/partials/account/ChangePassword';
import UserMenu from '~/components/partials/account/UserMenu';

const ChangePasswordPage = () => {
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
        // <ContainerPage boxed={true} title="Address">
        
            <ContainerHomeElectronics  boxed={true} title="Address">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <ChangePassword /> */}
                <UserMenu page={"ChangePassword"}/>
            </div>
            </ContainerHomeElectronics>
        //</ContainerPage>
    );
};

export default ChangePasswordPage;
