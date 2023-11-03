import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import constants from '~/public/static/data/my-constants/Constants';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { useWindowSize } from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import apis from '~/public/static/data/my-constants/Api';
import { useRouter } from 'next/router';
const FooterWidgets = ({ language }) => {
    // const language = useSelector((state) => state.datas.language);
    // const language = useLanguageHook();
    const router = useRouter();
    const labels = Labels(language);

    const [width, height] = useWindowSize();
    const [aboutEng, setAboutEng] = useState();
    const [aboutArb, setAboutArb] = useState();
    const [lang, setLang] = useState(false);

    const handleMyAccount = () => {
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

    let body = {
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

    useEffect(() => {
        Axios.post(apis.navBar, body)
        .then((res) => {
            setAboutEng(res.data.data.about_footer_english);
            setAboutArb(res.data.data.about_footer_ar);
        });
    }, []);

    return (
        <div
            className="ps-footer__widgets"
            style={{ justifyContent: 'normal' }}>
            {language === constants['English'] ? (
                <>
                    <aside
                        className="widget widget_footer widget_contact-us mb-5"
                        style={{
                            marginLeft: width > 771 && '4rem',
                            marginLeft: width > 771 && '15rem',
                        }}>
                        <h4 className="widget-title">
                            {' '}
                            {labels['Quick links']}
                        </h4>
                        <div className="widget_content">
                            <ul className="ps-list--link">
                                <li>
                                    <Link href="/page/return-exchange-policy">
                                        <a> {labels['Return policy']}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/terms-conditions">
                                        <a>{labels['Term & Condition']}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/privacy-policy">
                                        <a> {labels['Gava Privacy Policy']}</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/page/gava-Ewaste-policy">
                                        <a> {labels['E-waste Policy']}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/page/warranty`}>
                                        <a> {labels['Warranty']}</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/faqs">
                                        <a> {labels['FAQs']}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <aside
                        className="widget widget_footer widget_contact-us mb-5"
                        style={{
                            marginLeft: width > 771 && '4rem',
                            marginLeft: width > 771 && '15rem',
                        }}>
                        <h4 className="widget-title">{labels['Company']} </h4>
                        <div className="widget_content">
                            <ul className="ps-list--link">
                                <li>
                                    <Link href="/page/about-us">
                                        <a> {labels['About Us']}</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/page/contact-us">
                                        <a>{labels['Contact']}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <aside
                        className="widget widget_footer widget_contact-us mb-2"
                        style={{
                            marginLeft: width > 771 && '4rem',
                            marginLeft: width > 771 && '15rem',
                        }}>
                        <h4 className="widget-title">
                            {labels['My Account']}{' '}
                        </h4>
                        <div className="widget_content">
                            <ul className="ps-list--link">
                                <li>
                                    <a
                                        onClick={handleMyAccount}
                                        style={{ color: 'white' }}>
                                        {' '}
                                        {labels['My Account']}
                                    </a>
                                </li>

                                {/* <li>
                                    <Link href="/page/terms-conditions">
                                        <a>{labels['Whishlist']}</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/account/shopping-cart">
                                        <a>{labels['Cart']}</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>

                    <aside
                        className="widget widget_footer widget_contact-us mb-5 "
                        style={{
                            marginLeft: width > 771 && '4rem',
                            marginLeft: width > 771 && '15rem',
                        }}>
                        <h4 className="widget-title">
                            {labels['Connect us']}{' '}
                        </h4>
                        <ul className="ps-list--social">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com/GavaGadgets"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i
                                        className="fa fa-facebook"
                                        style={{ color: 'white' }}></i>
                                </a>
                            </li>
                            {/* <li>
                                    <a className="twitter" href="https://twitter.com/" target="_blank" rel="noreferrer">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li> */}
                            <li>
                                <a
                                    className="instagram"
                                    href="https://www.instagram.com/gavaserviceworld/?igshid=YmMyMTA2M2Y%3D"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="google-plus"
                                    href="mailto:info@gava.co.in"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fa fa-envelope-o"></i>
                                </a>
                            </li>
                        </ul>
                    </aside>

                    {/* <aside className="widget widget_footer">
                        <h4 className="widget-title">{labels['Company']}</h4>
                        <ul className="ps-list--link">
                            <li>
                                <Link href="/page/about-us">
                                    <a> {labels['About Us']}</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="/page/contact-us">
                                    <a> {labels['Contact']}</a>
                                </Link>
                            </li>
                        </ul>
                    </aside> */}
                </>
            ) : (
                <>
                    <aside
                        className="widget widget_footer widget_contact-us mb-5 ml-1"
                        style={{ marginLeft: width > 771 && '4rem' }}>
                        <h4 className="widget-title"> {labels['About Us']}</h4>
                        <div className="widget_content">
                            <ul className="ps-list--link">
                                <li>
                                    <p
                                        style={{
                                            width: '350px',
                                            color: 'black',
                                        }}>
                                        {aboutArb}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </aside>
                    <aside
                        className="widget widget_footer widget_contact-us mb-5"
                        style={{ marginLeft: width > 771 && '4rem' }}>
                        <h4 className="widget-title">
                            {' '}
                            {labels['Quick links']}
                        </h4>
                        <ul className="ps-list--link">
                            {/* <li>
                                <Link href="/page/blank">
                                    <a> {labels['Policy']}</a>
                                </Link>
                            </li> */}

                            <li>
                                <Link href="/page/blank">
                                    <a>{labels['Term & Condition']}</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/page/blank">
                                    <a> {labels['Shipping']}</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/page/blank">
                                    <a> {labels['Return']}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/page/faqs">
                                    <a> {labels['FAQs']}</a>
                                </Link>
                            </li>
                        </ul>
                    </aside>
                    <aside
                        className="widget widget_footer widget_contact-us mb-5"
                        style={{ marginLeft: width > 771 && '4rem' }}>
                        <h4 className="widget-title">{labels['Locate us']} </h4>
                        <div className="widget_content">
                            <p>
                                {labels['office no:102,']} <br />{' '}
                                {labels['Al Rostamani Building,']}
                                <br /> {labels['Khalid Bin Al Waleed Rd,']}
                                <br />
                                {labels['Bur Dubai ,Dubai']} <br />
                                {/* {labels['UAE.United Arab Emirates']} */}
                                <br />
                            </p>
                        </div>
                    </aside>

                    <aside
                        className="widget widget_footer widget_contact-us mb-5 "
                        style={{ marginLeft: width > 771 && '4rem' }}>
                        <h4 className="widget-title">
                            {labels['Contact us']}{' '}
                        </h4>
                        <div className="widget_content">
                            <p>{labels['Call us 24/7']}</p>
                            <h3>{labels['+97 4354 6020']}</h3>
                            <p>
                                <a href="mailto:contactzainbay@gmail.com">
                                    contactzainbay@gmail.com
                                </a>
                            </p>
                        </div>
                    </aside>

                    <aside
                        className="widget widget_footer widget_contact-us mb-5 "
                        style={{ marginLeft: width > 771 && '4rem' }}>
                        <h4 className="widget-title">
                            {labels['Connect us']}{' '}
                        </h4>
                        <ul className="ps-list--social">
                            <li>
                                <a
                                    className="facebook"
                                    href="https://www.facebook.com/profile.php?id=100083399408136"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    href="https://twitter.com/DigitalZainbay"
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="google-plus"
                                    href="mailto:support@zainbay.com">
                                    <i className="fa fa-envelope-o"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="instagram"
                                    href="https://instagram.com/gavaserviceworld?igshid=YmMyMTA2M2Y="
                                    target="_blank"
                                    rel="noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </aside>
                </>
            )}
        </div>
    );
};

export default FooterWidgets;
