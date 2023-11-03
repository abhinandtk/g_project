import React, { useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';
import UserMenu from '~/components/partials/account/UserMenu';

const MyAccountPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    const [addressData, setAddressData] = useState(null);
    return (
        // <ContainerPage boxed={true} title="Address">
        <ShareDataContext.Provider
        value={{
            address_data: [addressData, setAddressData],
        }}>
            <ContainerHomeElectronics  boxed={true} title="Address">
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                {/* <Addresses /> */}
                <UserMenu page={"Address"}/>

            </div>
            </ContainerHomeElectronics>
            </ShareDataContext.Provider>
        //</ContainerPage>
    );
};

export default MyAccountPage;
