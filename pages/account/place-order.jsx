import React, { useContext } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import Addresses from '~/components/partials/account/Addresses';
import Notifications from '~/components/partials/account/Notifications';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import OrderSuccess from '~/components/partials/account/OrderSuccess';
import { ShareDataContext } from '~/utilities/share-data-context';
import { useSelector } from 'react-redux';

const AccountNotificationsPage = () => {

    const datas = useSelector((state) => state.datas)

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Addresses',
        },
    ];
    
    return (
        

        <ContainerHomeElectronics title="Orderd" boxed={true}>
            <div className="ps-page--my-account">
                <BreadCrumb breacrumb={breadCrumb} />
                <OrderSuccess datas={datas.placeOrderDetails}/>
            </div>
            </ContainerHomeElectronics>
    );
};

export default AccountNotificationsPage;
    