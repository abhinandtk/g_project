import React, { useEffect } from 'react';

import Link from 'next/link';
import SearchHeader from '~/components/shared/headers/modules/SearchHeader';
import ElectronicHeaderActions from '~/components/shared/headers/modules/ElectronicHeaderActions';
import Menu from '~/components/elements/menu/Menu';
import { stickyHeader } from '~/utilities/common-helpers';

import labels from '~/public/static/data/my-constants/Labels';
import { useSelector } from 'react-redux';
import HamburgerMenu from './modules/HamburgerMenu';

const HeaderElectronic = ({ language }) => {
    useEffect(() => {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }, []);

    const menuItems = useSelector((state) => state.datas.menuItems);
    const headerCats = useSelector((state) => state.datas.headerCats);

    return (
        <header
            className="header header--standard header--electronic"
            id="headerSticky"
            style={{ width: '100%' }}>
            <div className="header__content" style={{ width: '100%' }}>
                <div
                    className="pl-5 pr-5"
                    style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <div
                        className="header__content-left"
                        style={{ width: '10%' }}>
                        <Link href="/">
                            <a className="ps-logo" style={{ marginRight: '0' }}>
                                <img
                                    src="\static\img\gava_logo_final.png"
                                    alt="Gava"
                                    style={{ height: '36px' }}
                                />
                            </a>
                        </Link>
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                {/* <i
                                    className="icon-menu"
                                    style={{ marginBottom: '1rem' }}></i> */}
                                {/* <span> {labels['Shop by Department']}</span> */}
                                <Link href="/">
                                    <a
                                        className="header-cats"
                                        style={{ marginRight: '0' }}>
                                        <img
                                            src="/static/img/gava_logo_final.png"
                                            alt="Gava"
                                            style={{ height: '36px' }}
                                        />
                                    </a>
                                </Link>
                            </div>

                            {/* <div className="menu__content">
                                <Menu
                                    language={language}
                                    source={menuItems}
                                    className="menu--dropdown"
                                />
                            </div> */}
                        </div>
                    </div>

                    <div
                        className="header__content-center"
                        style={{ width: '50%', marginLeft: '110px' }}>
                        <SearchHeader />
                    </div>
                    <div
                        className="header__content-right"
                        style={{ width: '30%' }}>
                        <ElectronicHeaderActions language={language} />
                    </div>
                    <HamburgerMenu source={menuItems} />
                </div>
                {/* <div className='row pl-5' style={{whiteSpace: 'nowrap',overflow:'hidden'}}>
                {
                    headerCats.map((item)=> 
                    <div className="pl-3 mt-3 header-cats" style={{color : "white"}}>
                        <a href={item.category_url}>
                        <div style={{}}>{language == 'english'?item.category_name:item.arabic_translator}</div>
                        </a>
                    </div> 
                    )
                }                 
                </div> */}
            </div>
        </header>
    );
};

export default HeaderElectronic;
