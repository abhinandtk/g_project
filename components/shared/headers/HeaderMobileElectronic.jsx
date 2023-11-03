import React, { Component, useState } from 'react';
import CurrencyDropdown from './modules/CurrencyDropdown';
import Link from 'next/link';
import LanguageSwicher from './modules/LanguageSwicher';
import MobileHeaderActions from './modules/MobileHeaderActions';
import constantsEnglish from '~/public/static/data/my-constants/Constants';
// import labelEnglish from '~/public/static/data/my-constants/Labels';
import labels, { Labels } from '~/public/static/data/my-constants/Labels';
import constants from '~/public/static/data/my-constants/Constants';
import { useRouter } from 'next/router';
import HeaderCategories from '~/components/partials/homepage/electronic/HeaderCategories';
import { useSelector } from 'react-redux';
import HamburgerMenu from './modules/HamburgerMenu';

function HeaderMobileElectronic({ language }) {
    // constructor({ props }) {
    //     super(props);
    // }

    // render() {
    const [keyword, setKeyword] = useState('');
    const Router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();
        Router.push(`/shop?search=${keyword}`);
    }

    const labels = Labels(language);
    const headerCats = useSelector((state) => state.datas.headerCats);
    const menuItems = useSelector((state) => state.datas.menuItems);

    return (
        <header className="header header--mobile electronic">
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/">
                        <a className="ps-logo">
                            <img
                                src="/static/img/gava_logo_final.png"
                                alt="gava"
                                style={{ width: '60px', height: 'auto' }}
                            />
                        </a>
                    </Link>
                </div>
                <MobileHeaderActions language={language} />
            </div>
                
            <div className="ps-search--mobile">
                <form
                    className="ps-form--search-mobile"
                    action="/"
                    method="get"
                    onSubmit={handleSubmit}>
                    <div className="form-group--nest">
                        <input
                            className="form-control"
                            type="text"
                            dir={language === constants.Arabic && 'rtl'}
                            placeholder={labels["I'm Shopping for..."]}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button>
                            <i className="icon-magnifier"></i>
                        </button>
                    </div>
                </form>
            </div>

            {/* <HeaderCategories data={headerCats} lang={language}/> */}
        </header>
    );
    // }
}

export default HeaderMobileElectronic;
