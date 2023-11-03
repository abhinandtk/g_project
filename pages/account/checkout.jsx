import React from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import Checkout from '~/components/partials/account/Checkout';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
const CheckoutPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Checkout Information',
        },
    ];
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getCart());
    // }, [dispatch]);

    return (
        // <ContainerPage title="Checkout" boxed={true}>
            <ContainerHomeElectronics title="Checkout" boxed={true}>
            <div className="ps-page--simple">
                <BreadCrumb breacrumb={breadCrumb} />
                <Checkout />
            </div>
            </ContainerHomeElectronics>
       // </ContainerPage>
    );
};

// export default connect()(CheckoutPage);
export default CheckoutPage
