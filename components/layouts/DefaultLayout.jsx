import React from 'react';
import { connect } from 'react-redux';
import Head from './modules/Head';
import { BackTop } from 'antd';
import LazyLoad from 'react-lazyload';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
const DefaultLayout = ({ children }) => {
const router = useRouter()
const currentUrl = router.asPath

return(
    <div className="layout--default">
        <Head />
        {children}
        <div id="loader-wrapper">
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
        </div>
        {currentUrl != '/page/submit-details' ?
        <div
            style={{
                padding: '1rem',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                width: '45px',
                height: 'auto',
                position: 'fixed',
                right: '3vw',
                bottom: '10vh',
            }}>
            <a href="https://wa.me/918281224422" target="_blank" rel="noreferrer">
                <LazyLoad>
                    <img
                        src="/static/img/whatsapp.png"
                        alt={constants.ZAINBAY}
                    />
                </LazyLoad>
            </a>
        </div>:<></>}
        <BackTop style={{position:"fixed",bottom:"20vh"}}>
            <button className="ps-btn--backtop">
                <i className="icon-arrow-up"></i>
            </button>
        </BackTop>
    </div>
);
}

export default DefaultLayout;
