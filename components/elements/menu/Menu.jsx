import React from 'react';
import Link from 'next/link';
import MenuDropdown from '~/components/elements/menu/MenuDropdown';
import MegaMenu from '~/components/elements/menu/MegaMenu';
import constants from '~/public/static/data/my-constants/Constants';

const Menu = ({ source, className, language }) => {
    let menuView;
    if (source) {
        menuView = source.map((item) => {
            if (item.subMenu) {
                return <MenuDropdown source={item} key={item.text} />;
            } else if (item.megaContent) {
                return (
                    <MegaMenu
                        language={language}
                        source={item}
                        key={item.text}
                    />
                );
            } else {
                return (
                    <li key={item.text}>
                        <Link href={item.url}>
                            <a
                                style={{
                                    textAlign:
                                        language === constants['Arabic'] &&
                                        'right',
                                }}>
                                {item.icon && <i className={item.icon}></i>}
                                {item.text}
                            </a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    No menu item.
                </a>
            </li>
        );
    }
    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
