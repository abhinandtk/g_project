import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Drawer } from 'antd';
import PanelMenu from '../panel/PanelMenu';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelSearch from '../panel/PanelSearch';
import PanelCategories from '../panel/PanelCategories';
import Link from 'next/link';
import { useRouter } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';

function NavigationList({allNavbarData}) {
    const [activeHome, setActiveHome] = useState(false);
    const [activeCart, setActiveCart] = useState(false);
    const [activeUser, setActiveUser] = useState(false);
    const [activeService, setActiveService] = useState(false);
    const [activeSell, setActiveSell] = useState(false);
    const [categoriesDrawer, setCategoriesDrawer] = useState(false);
    const router = useRouter();

    const handleDrawerClose = () => {
        setActiveHome(false);
        setActiveCart(false);
        setActiveUser(false);
        setCategoriesDrawer(false);
    };

    const handleActiveHome = () => {
        setActiveHome(!activeHome);
        setActiveCart(false);
        setActiveUser(false);
        setCategoriesDrawer(false);

        router.push('/', null, {
            shallow: true,
        });
    };

    const handleActiveCart = () => {
        setActiveHome(false);
        setActiveCart(!activeCart);
        setActiveUser(false);
        setCategoriesDrawer(false);

        router.push('/account/shopping-cart', null, {
            shallow: true,
        });
    };
    const handleActiveService = () => {
        setActiveHome(false);
        setActiveCart(false);
        setActiveUser(false);
        setCategoriesDrawer(false);
        setActiveService(!activeService)

        router.push('/service', null, {
            shallow: true,
        });
    };
    const handleActiveSell = () => {
        setActiveHome(false);
        setActiveCart(false);
        setActiveUser(false);
        setCategoriesDrawer(false);
        setActiveService(false)
        setActiveSell(!activeSell)

        router.push('/sell', null, {
            shallow: true,
        });
    };

    const handleActiveUser = () => {
        setActiveHome(false);
        setActiveCart(false);
        setActiveUser(!activeUser);
        setCategoriesDrawer(false);

        router.push(
            constants['sessionId'] === null
                ? '/account/login'
                : '/account/order-history',
            null,
            {
                shallow: true,
            }
        );
    };
    const handleShowCategoriesDrawer = () => {
        setActiveCart(false);
        setActiveHome(false);
        setActiveUser(false);
        // setCategoriesDrawer(!categoriesDrawer);
        setCategoriesDrawer(false);
        router.push('/shoppage/shoppagehome', null, {
            shallow: true,
        })
    };

    return (
        <div className="navigation--list">
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={categoriesDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Categories</h3>
                        <span
                            className="ps-panel__close"
                            onClick={handleDrawerClose}>
                            <i className="icon-cross"></i>
                        </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelCategories handleDrawerClose={handleDrawerClose} allNavbarData={allNavbarData}/>
                    </div>
                </div>
            </Drawer>

            <div className="navigation__content">
                <a
                    className={`navigation__item ${activeHome && 'active'}`}
                    onClick={handleActiveHome}>
                    <i className="icon-home"></i>
                    <span> Home</span>
                </a>

                <a
                    className={`navigation__item ${
                        categoriesDrawer === true ? 'active' : ''
                    }`}
                    onClick={handleShowCategoriesDrawer}>
                    <i className="icon-bag"></i>
                    <span> Shop</span>
                </a>

                <a
                    className={`navigation__item ${
                        activeService === true ? 'active' : ''
                    }`}
                    onClick={handleActiveService}>
                    <i className="icon-wrench"></i>
                    <span> Service</span>
                </a>
                <a
                    className={`navigation__item ${
                        activeSell === true ? 'active' : ''
                    }`}
                    onClick={handleActiveSell}>
                    <i className="icon-briefcase"></i>
                    <span> Sell</span>
                </a>

                <a
                    className={`navigation__item ${
                        activeUser === true ? 'active' : ''
                    }`}
                    onClick={handleActiveUser}>
                    <i className="icon-user"></i>
                    <span> Profile</span>
                </a>
            </div>
        </div>
    );
    // }
}

// const mapStateToProps = (state) => {
//     return state.setting;
// };
// export default connect(mapStateToProps)(NavigationList);

export default NavigationList;
