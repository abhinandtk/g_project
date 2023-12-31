import React, { Component } from 'react';

import BreadCrumb from '~/components/elements/BreadCrumb';
import MyAccount2 from '~/components/partials/account/MyAccount2';
import ContainerPage from '~/components/layouts/ContainerPage';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';

class MyAccountPage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/',
                },
                {
                    text: 'My Account',
                },
            ],
        };
    }

    render() {
        return (
            // <ContainerPage title="My account 2">
                <ContainerHomeElectronics title="My account 2">
                <div className="ps-page--my-account">
                    <BreadCrumb breacrumb={this.state.breadCrumb} />
                    <MyAccount2 />
                </div>
                </ContainerHomeElectronics>
            // </ContainerPage>
        );
    }
}

export default MyAccountPage2;
