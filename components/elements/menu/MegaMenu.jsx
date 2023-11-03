import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const MegaMenu = ({ source, language }) => {
    // const language = constants.language
    // const language = useSelector((state) => state.datas.language);
    // const language = useLanguageHook();

    let megaContentView;
    if (source) {
        megaContentView = source.megaContent.map((item, index) => (
            <div key={index} style={{ height: '100vh' }}>
                <div
                    className="mega-menu__column"
                    key={index}
                    style={{ paddingRight: '30px', float: 'left' }}>
                    {/* <h4>Sub Categories</h4> */}
                    <ul className="mega-menu__list">
                        <li className="submenu-hd">Sub Categories</li>
                        {item.megaItems.map((subItem) => (
                            <li key={subItem.text}>
                                <Link href={subItem.url} as={subItem.url}>
                                    <a>{subItem.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className="mega-menu__column"
                    style={{ paddingLeft: '20px', float: 'right' }}>
                    <ul className="mega-menu__list">
                        <li className="submenu-hd">Brands</li>
                        {item.megaBrands.map((subItem) => (
                            <li key={subItem.text}>
                                <Link
                                    href={source.url + '&' + subItem.slug}
                                    as={source.url + '&Brand=' + subItem.slug}>
                                    <a>{subItem.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ));
    }

    return (
        <li className="menu-item-has-children has-mega-menu">
            {/* {language === constants['English'] ? }            */}
            <Link href={source.url !== '' ? source.url : '/'}>
                <a
                    style={{
                        textAlign: language === constants['Arabic'] && 'right',
                    }}>
                    {source.icon && <i className={source.icon}></i>}
                    {source.text}
                </a>
            </Link>
            <div
                className="mega-menu"
                style={{
                    height: '75vh',
                    position: 'absolute',
                    right: language === constants['Arabic'] && '100%',
                    textAlign: language === constants['Arabic'] && 'right',
                    left: language === constants['English'] && '100%',
                }}>
                {megaContentView}
            </div>
        </li>
    );
};

export default MegaMenu;
