import React, { useState } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';
import Register4 from '~/components/partials/account/debugRegister/Register4';

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

    const [email, setEmail] = useState(null);


    return (
        <ShareDataContext.Provider
            value={{
                email: [email, setEmail],
            }}> 
        <ContainerHomeElectronics title="Register" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <Register4 />
                {/* <Login/> */}
            </div>
            </ContainerHomeElectronics>
            </ShareDataContext.Provider>
        //</ContainerPage>
    );
};

export default RegisterPage;
