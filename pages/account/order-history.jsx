// import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';

import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import ChangePassword from '~/components/partials/account/ChangePassword';
import OrderHistory from '~/components/partials/account/OrderHistory';
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
        
            <ContainerHomeElectronics  boxed={true} title="Address">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <OrderHistory /> */}
                <UserMenu page={"OrderHistory"}/>
            </div>
            </ContainerHomeElectronics>
    );
};

export default ChangePasswordPage;
