import React, { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import UserRegister from '~/components/partials/account/UserRegister';

const userRegister = () => {
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
               <UserRegister/>
            </div>
         </ContainerHomeElectronics> 
      

    );
};

export default userRegister;
