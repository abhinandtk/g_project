import React from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import Login from '~/components/partials/account/Login';

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
       
        <ContainerHomeElectronics title="Login" boxed={true}> 

            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Login />
                
            </div>
         </ContainerHomeElectronics> 
      

    );
};

export default LoginPage;
