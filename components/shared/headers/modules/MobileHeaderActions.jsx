import React, { Component, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import AccountQuickLinks from './AccountQuickLinks';
import Link from 'next/link';
import AccountQuickLinksMobile from './AccountQuickLinksMobile';
import LanguageSwicher from './LanguageSwicher';
import { useRouter } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';
import ArabicLanguageSwicher from './ArabicLanguageSwicher';
import MiniCart from './MiniCart';
import HamburgerMenu from './HamburgerMenu';
/*import { Drawer } from 'antd';
import PanelCartMobile from '../../panel/PanelCartMobile';*/
function MobileHeaderActions({ language }) {
    const router = useRouter();

    const menuItems = useSelector((state) => state.datas.menuItems);

    const wishlistCount = useSelector((state) => state.datas.wishlistCount);

    return (
        <div className="navigation__right">
            <div
                className="header__actions"
                style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                {/* <a >
                {language === constants.Arabic  ? (
                    <div style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
                    <ArabicLanguageSwicher/>
                    </div>
                ):(
                    <LanguageSwicher />

                )}
                
            </a> */}

                {/* <a
                className="header__extra"
                onClick={() =>
                    router.push(
                        constants['sessionId'] === null
                            ? '/account/login'
                            : '/account/wishlist',
                        null,
                        {
                            shallow: true,
                        }
                    )
                }>
                <i className="icon-heart"></i>
                {wishlistCount !== null && (
                    <span style={{backgroundColor:constants['secondaryColor']}}>
                        <i>{wishlistCount}</i>
                    </span>
                )}
            </a> */}
                <a
                    style={{ marginRight: '10px' }}
                    onClick={() =>
                        router.push('/account/shopping-cart', null, {
                            shallow: true,
                        })
                    }>
                    <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                        <MiniCart language={language} />
                    </div>
                </a>
            </div>
            <div style={{ marginTop: '10px' }}>
                <HamburgerMenu source={menuItems} />
            </div>
        </div>
    );
}

export default MobileHeaderActions;
