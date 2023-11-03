import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Register from '~/components/partials/account/Register';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';


const RegisterPage = () => {
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
                <Register />
            </div>
        </ContainerHomeElectronics>
    );
};

export default RegisterPage;
