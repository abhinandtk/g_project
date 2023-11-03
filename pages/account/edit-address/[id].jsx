import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import EditAddress from '~/components/partials/account/EditAddress';
import ContainerPage from '~/components/layouts/ContainerPage';
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
        // <ContainerPage title="Edit Address" boxed={true}>
            <ContainerHomeElectronics title="Edit Address" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <EditAddress addressId={id}/> */}
                <UserMenu page={"EditAddress"}/>
            </div>
            </ContainerHomeElectronics>
        // </ContainerPage>
    );
};

export default EditAddressPage;
