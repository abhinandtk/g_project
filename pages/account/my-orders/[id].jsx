import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import MyOrderDetail from '~/components/partials/account/MyOrderDetail';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { useRouter } from 'next/router';
import UserMenu from '~/components/partials/account/UserMenu';

const EditAddressPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Edit address',
        },
    ];
    return (
            <ContainerHomeElectronics title="Edit Address" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <UserMenu page={"MyOrderDetail"}/>

                {/* <MyOrderDetail /> */}
            </div>
            </ContainerHomeElectronics>
    );
};

export default EditAddressPage;
