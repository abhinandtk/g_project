import React, { useEffect } from 'react';
import MobileHeaderActions from '../headers/modules/MobileHeaderActions';
import Link from 'next/link';
import { stickyHeader } from '~/utilities/common-helpers';
import { Labels } from '~/public/static/data/my-constants/Labels';

const HeaderMobileProduct = ({language}) => {
    const stickyHeader = () => {
        let number =
            window.pageXOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0;
        const header = document.getElementById('header-mobile');
        if (header !== null) {
        if (number >= 300) {
                header.classList.add('header--sticky');
            } else {
                header.classList.remove('header--sticky');
            }
        }
    };
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const labels =Labels(language)

    return (
        <header
            
            className="header header--mobile header--mobile-product"
            id="header-mobile"
            data-sticky="true">
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/" className="header__back">
                        
                            <i className="icon-chevron-left icon-previous-mobile-header" ></i>
                            <strong>{labels['Back to previous']} </strong>
                        
                    </Link>
                </div>
                <div className="navigation__right">
                    <MobileHeaderActions language={language}/>
                </div>
            </div>
        </header>
    );
};

export default HeaderMobileProduct;
