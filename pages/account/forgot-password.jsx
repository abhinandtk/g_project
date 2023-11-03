import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';

import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import ForgotPassword from '~/components/partials/account/ForgotPassword';
import EmailVerification from '~/components/partials/account/ForgotPassword';
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
        <ContainerHomeElectronics title="Forgot Password" boxed={true}> 

            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <ForgotPassword />
            </div>
         {/* </ContainerPage> */}
         </ContainerHomeElectronics> 
         </ShareDataContext.Provider> 

    );
};

export default LoginPage;
