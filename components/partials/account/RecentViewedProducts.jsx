import React, { Component } from 'react';
import Link from 'next/link';
import AccountMenuSidebar from './modules/AccountMenuSidebar';

class RecentViewedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section className="ps-my-account ps-page--account">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="ps-section__left">
                                <AccountMenuSidebar activeType={'Recent Viewed Product'} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <section className="ps-section--account-setting">
                                <div className="ps-section__content">
                                    <p>No product here.</p>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default RecentViewedProducts;
