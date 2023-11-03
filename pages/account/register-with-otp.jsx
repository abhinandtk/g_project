import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import RegisterWithOtpCompo from '~/components/partials/account/RegisterWithOtp';

const RegisterWithOtp = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Register an account',
        },
    ];

    return (
        <ContainerHomeElectronics title="Register" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <RegisterWithOtpCompo />
            </div>
        </ContainerHomeElectronics>
    );
};

export default RegisterWithOtp;
