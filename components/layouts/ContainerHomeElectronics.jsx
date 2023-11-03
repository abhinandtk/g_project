import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import NavigationList from '~/components/shared/navigation/NavigationList';
import SiteFeatures from '~/components/partials/homepage/autopart/SiteFeatures';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import HeaderElectronic from '~/components/shared/headers/HeaderElectronic';
import HeaderMobileElectronic from '~/components/shared/headers/HeaderMobileElectronic';
import constants from '~/public/static/data/my-constants/Constants';
import HeaderMobileProduct from '../shared/header-mobile/HeaderMobileProduct';
import ArabicHeaderElectronic from '../shared/headers/ArabicHeaderElectronics';
import { useDispatch, useSelector } from 'react-redux';
import ArabicSiteFeatures from '../partials/homepage/autopart/ArabicSiteFeatures';
import Axios from 'axios';
import apis from '~/public/static/data/my-constants/Api';
import {
    setHeaderCats,
    setMenuItem,
    setNavCartProduct,
    setWishlistCount,
    updateNavbar,
} from '~/store/datas/action';
import { useWindowSize } from '../partials/homepage/electronic/ElectronicProductGroupWithCarousel';

const ContainerHomeElectronics = ({
    children,
    title = 'Home ',
    navigationList,
    metaTags,
    metaTitle,
    metaDescription,
}) => {
    let titleView;
    if (title !== null) {
        if (navigationList === 'productDetails' || navigationList === 'shop') {
            titleView = title;
        } else {
            titleView = constants.GAVA + ' | ' + title;
        }
    } else {
        titleView = constants.GAVA + ' | ' + process.env.titleDescription;
    }

    const updateNavbarValue = useSelector((state) => state.datas.updateNavbar);

    const [menuItems, setMenuItems] = useState([]);

    const [cartItem, setCartItems] = useState([]);
    const [allNavbarData, setAllNavBarData] = useState();
    const [apiSuccess, setApiSuccess] = useState(false);
    const [freeDeliveryLimit, setFreeDeliveryLimit] = useState(null);
    const [lang, setLang] = useState(false);
    const dispatch = useDispatch();

    let session_id;
    if (typeof window !== 'undefined') {
        session_id =
            localStorage.getItem('session_id') === null
                ? ''
                : localStorage.getItem('session_id');
    } else {
        session_id = null;
    }

    const headerDatas = () => {
        let body;
        if (session_id !== null && session_id !== '') {
            body = {
                session_id: session_id,
                language: lang,
            };
        } else {
            body = {
                productVariantId:
                    localStorage.getItem('productVariantId') === null
                        ? null
                        : JSON.parse(localStorage.getItem('productVariantId')),
                quantity:
                    localStorage.getItem('quantity') === null
                        ? null
                        : JSON.parse(localStorage.getItem('quantity')),
                language: lang,
            };
        }

        Axios.post(apis.navBar, body)

            .then((res) => {
                console.log(res, body, 'response in navbar');
                setFreeDeliveryLimit(res.data.data.delivery_charge_in_home);
                localStorage.setItem('rewardPoint', res.data.data.rewardPoint);
                res.data.data.force_logout === 0 &&
                    localStorage.removeItem('session_id');
                // if (res.data.data.force_logout === 1) {
                setCartItems(
                    res.data.data.cart_products,
                    res.data.data.cart_total
                );

                setAllNavBarData(res.data.data);

                dispatch(
                    setNavCartProduct([
                        res.data.data.cart_products,
                        res.data.data.cart_total,
                    ])
                );

                dispatch(setWishlistCount(res.data.data.wishlist_Count));
                dispatch(setHeaderCats(res.data.data.header_categories));

                dispatch(updateNavbar(false));

                setApiSuccess(true);

                let eachData = [];
                res.data.data.categories.map((data, index) => {
                    if (data.sub_category.length === 0) {
                        eachData.push({
                            icon: 'abcd',
                            text:
                                lang === constants['English']
                                    ? data.Category_Name
                                    : data.arabic_translator,
                            url: `/shop?category=${data.slug_category}`,
                        });
                    }

                    if (data.sub_category.length !== 0) {
                        let subData = [];
                        data.sub_category.map((dt, index) => {
                            subData.push({
                                text:
                                    lang === constants['English']
                                        ? dt.Category_Name
                                        : dt.arabic_translator,
                                url: `/shop?category=${dt.slug_category}`,
                            });
                        });
                        //nibras
                        let brandData = [];
                        data.brands.map((dt, index) => {
                            brandData.push({
                                text:
                                    lang === constants['English']
                                        ? dt.brand
                                        : dt.arabic_translator,
                                url: `/shop?brand=${dt.slug_brand}`,
                                slug: dt.slug_brand,
                            });
                        });

                        eachData.push({
                            icon: 'abcd',
                            text:
                                lang === constants['English']
                                    ? data.Category_Name
                                    : data.arabic_translator,
                            url: `/shop?category=${data.slug_category}`,
                            extraClass: 'menu-item-has-children has-mega-menu',
                            mega: true,
                            megaContent: [
                                { megaItems: subData, megaBrands: brandData },
                            ],
                        });
                    }
                });

                setMenuItems(eachData);

                dispatch(setMenuItem(eachData));
            })
            .catch((err) => {
                console.log(err, body, 'error in navbar');
            });
    };

    useEffect(() => {
        lang !== false && headerDatas();
        dispatch(updateNavbar(false));
    }, [updateNavbarValue, lang]);

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, []);

    const changeLanguage = useSelector((state) => state.datas.changeLanguage);

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, [changeLanguage]);

    useEffect(() => {
        lang !== false && headerDatas();
    }, []);

    const [width, height] = useWindowSize();

    return (
        <div className="zainbay">
            {lang !== false && (
                <>
                    <Head>
                        <title>{titleView}</title>
                        <meta name="keywords" content={metaTags} />
                        <meta name="title" content={metaTitle} />
                        <meta name="description" content={metaDescription} />
                    </Head>
                    {navigationList == 'productDetail' ? (
                        <>
                            <HeaderMobileProduct language={lang} />

                            <NavigationList allNavbarData={allNavbarData} />
                        </>
                    ) : (
                        <>
                            <HeaderMobileElectronic language={lang} />
                            <NavigationList allNavbarData={allNavbarData} />
                        </>
                    )}
                    {lang === constants['English'] && (
                        <HeaderElectronic
                            language={lang}
                            menuItems={menuItems}
                        />
                    )}
                    {lang === constants['Arabic'] && (
                        <ArabicHeaderElectronic
                            language={lang}
                            cartItem={cartItem}
                            menuItems={menuItems}
                        />
                    )}

                    <main id="homepage-7">
                        {children}

                        {/* {lang === constants['Arabic'] && (
                            <ArabicSiteFeatures
                                freeDeliveryLimit={freeDeliveryLimit}
                            />
                        )}
                        {lang === constants['English'] && (
                            <SiteFeatures
                                freeDeliveryLimit={freeDeliveryLimit}
                            />
                        )} */}
                    </main>

                    <div style={{ marginBottom: width < 991 && '10rem' }}>
                        <FooterDefault language={lang} />
                    </div>
                </>
            )}
        </div>
    );
};

export default ContainerHomeElectronics;
