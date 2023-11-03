import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';

import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import ResetPassword from '~/components/partials/account/ResetPassword';
import { ShareDataContext } from '~/utilities/share-data-context';

const LoginPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Login',
        },
    ];
    return (
        // <ContainerPage title="Login" boxed={true}>
        <ShareDataContext.Provider
          > 
        <ContainerHomeElectronics title="Forget Password" boxed={true}> 

            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <ResetPassword />
            </div>
         {/* </ContainerPage> */}
         </ContainerHomeElectronics> 
         </ShareDataContext.Provider> 

    );
};

export default LoginPage;
