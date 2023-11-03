import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux';
import Link from 'next/link';

import MiniCart from './MiniCart';
import AccountQuickLinks from './AccountQuickLinks';
import constants from '~/public/static/data/my-constants/Constants';
import LanguageSwicher from './LanguageSwicher';
import { useRouter } from 'next/router';

function ElectronicHeaderActions({ language }) {
    const wishlistCount = useSelector((state) => state.datas.wishlistCount);
    const router = useRouter();

    return (
        <div
            className="header__actions"
            style={{ width: '100%', padding: '10px 0px 10px 10px' }}>
            {/* <LanguageSwicher /> */}
            {/* <div className="ps-dropdown language ps-dropdown__language" style={{minWidth:"70px"}}>
            <Link href="/shoppage/shoppagehome" >
                Shop
            </Link>
            <ul className="ps-dropdown-menu">
                <li>
                <a href="#">content1</a> 
                </li>
                <li>
                <a href="#">content2</a> 
                </li>

            </ul>
            </div> */}

            <Link href="/shoppage/shoppagehome" className="header__extra">
                Shop
            </Link>
            <Link href="/sell" className="header__extra">
                Sell
            </Link>

            <Link href="/service" className="header__extra">
                Service
            </Link>
            <Link href="/collection-points" className="header__extra">
                Collection Points
            </Link>
            <a
                onClick={() =>
                    router.push('/account/shopping-cart', null, {
                        shallow: true,
                    })
                }>
                <MiniCart language={language} />
            </a>

            {constants['sessionId'] !== null ? (
                <AccountQuickLinks language={language} isLoggedIn={true} />
            ) : (
                <AccountQuickLinks language={language} isLoggedIn={false} />
            )}
        </div>
    );
}

export default ElectronicHeaderActions;
