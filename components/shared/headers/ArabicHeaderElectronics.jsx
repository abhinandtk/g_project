import React, { useEffect } from 'react';

import Link from 'next/link';
import menuData from '~/public/static/data/menu';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import ElectronicHeaderActions from '~/components/shared/headers/modules/ElectronicHeaderActions';
import Menu from '~/components/elements/menu/Menu';
import { stickyHeader } from '~/utilities/common-helpers';

import constants from '~/public/static/data/my-constants/Constants';
// import labels from '~/public/static/data/my-constants/Labels';
import Image from 'next/image';
import ArabicSearchHeader from './modules/ArabicSearchHeader';
import ArabicElectronicHeaderActions from './modules/ArabicElectronicHeaderActions';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useSelector } from 'react-redux';
import HeaderCategories from '~/components/partials/homepage/electronic/HeaderCategories';
// import labelEnglish from '~/public/static/data/my-constants/Labels';

const ArabicHeaderElectronic = ({cartItem,menuItems,language}) => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const labels = Labels(constants.Arabic)
    const headerCats = useSelector((state) => state.datas.headerCats);

    return (
        <header
            className="header header--standard header--electronic arabic-header"
            id="headerSticky"
            style={{ width: '100%' }}>
            <div className="header__content"  style={{ width: '100%' }}>
                <div  className="pl-5 pr-5"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <div className="header__content-right" style={{ width: '30%' }}>
                        <ArabicElectronicHeaderActions language={language}/>
                    </div>
                    <div className="header__content-center" style={{ width: '50%' }}>
                        {/* <SearchHeader labels={labels}/> */}
                        <ArabicSearchHeader/>
                    </div>
                    <div className="header__content-left" style={{ width: '20%' }}>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className="icon-menu"
                                    style={{ marginBottom: '1rem' }}></i>
                                {/* <span> {labels['Shop by Department']}</span> */}
                                <a className="header-cats" style={{ marginRight: '0'}}>
                                <img
                                    src="/static/img/newLogo.png"
                                    alt="martfury"
                                    style={{height:"36px"}}
                                />
                            </a>

                            </div>
                            <div className="menu__content">
                                <Menu
                                    language={language}
                                    source={menuItems}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                        <Link href="/">
                            <a className="ps-logo">
                                <img
                                    src="/static/img/newLogo.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className='row pr-5 mr-5' style={{justifyContent:'flex-end',whiteSpace: 'nowrap',overflow:'hidden'}}>
                {
                    headerCats.reverse().map((item)=> 
                    <div key={item} className="pl-3 mt-3 header-cats" style={{color : "white"}}>
                        <a href={item.category_url}>
                        <div>{language == 'english'?item.category_name:item.arabic_translator}</div>
                        </a>
                    </div> 
                    )
                }                 
                </div>
            </div>
            <HeaderCategories data={headerCats} lang={language}/>
        </header>
    );
};

export default ArabicHeaderElectronic;
