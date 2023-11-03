import React from 'react';
import { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
const labels = Labels(constants['English']);
const SiteFeatures = ({ freeDeliveryLimit }) => (
    <section className="ps-site-features pt-5 pb-5">
        <div className="container">
            <div className="ps-block--site-features ps-block--site-features-2">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <img src="/static/img/site_features/ic_fast_free_delivery.svg" alt="" style={{ height: '10vh' }} />
                    </div>
                    <div className="ps-block__right">
                        <h4> {labels['Free Delivery']}</h4>
                        {/* <p>{labels['For all oders over']} ₹ {freeDeliveryLimit}</p> */}
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        {/* <i className="icon-credit-card ps-block--site-features__icons"></i> */}
                        <img src="/static/img/site_features/ic_secure_pay.svg" alt="" style={{ height: '9vh' }} />
                    </div>
                    <div className="ps-block__right">
                        <h4>{labels['Secure Payment']}</h4>
                        {/* <p>{labels['100% secure payment']}</p> */}
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        {/* <i className="icon-bubbles ps-block--site-features__icons"></i> */}
                        <img src="/static/img/site_features/ic_customer_support.svg" alt="" style={{ height: '9vh' }} />
                    </div>
                    <div className="ps-block__right">
                        <h4>{labels['24/7 Support']}</h4>
                        {/* <p>{labels['Dedicated support']}</p> */}
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        {/* <i className="icon-sync ps-block--site-features__icons"></i> */}
                        <img src="/static/img/site_features/ic_return.svg" alt="" style={{ height: '9vh' }} />
                    </div>
                    <div className="ps-block__right">
                        <h4>{labels['90 Days Return']}</h4>
                        {/* <p>{labels['If goods have problems']}</p> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default SiteFeatures;
