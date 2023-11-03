import React, { useEffect, useState, useCallback } from 'react';
import ElectronicProductGroupWithCarousel from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import ElectronicBanner from '~/components/partials/homepage/electronic/ElectronicBanner';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import apis from '~/public/static/data/my-constants/Api';
import  Axios  from 'axios';
import Error from '../404';
import { ShareDataContext } from '~/utilities/share-data-context';
import constants from '~/public/static/data/my-constants/Constants';
import BigBanner from '~/components/partials/homepage/electronic/BigBanner';
import HeaderCategories from '~/components/partials/homepage/electronic/HeaderCategories';
import BannerCards from '~/components/partials/homepage/electronic/BannerCards';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { useRouter } from 'next/router';
import { showNotification } from '~/utilities/common-helpers';
import { useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { Col, Form, Input, Modal } from 'antd';
import Title from 'antd/lib/skeleton/Title';
import TextArea from 'antd/lib/input/TextArea';
import { useWindowSize } from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import BigCategories from '~/components/partials/homepage/electronic/BigCategories';
import BrandsCard from '~/components/partials/homepage/electronic/BrandsCard';
import { Content } from 'antd/lib/layout/layout';
import Head from 'next/head';
import Link from 'next/link';
const HomepageDefaultPage = () => {
    const [lang, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
    const [width, height] = useWindowSize();


    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, []);

    useEffect(() => {
        setLang(
            localStorage.getItem('language') === null
                ? 'english'
                : localStorage.getItem('language')
        );
    }, [changeLanguage]);

    const [homePageData, setHomePageData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);

    const [productVarient, setProductVarient] = useState(null);
    const [metaTagKeywords, setMetaTagKeywords] = useState('');
    const [metaTagDescription, setMetaTagDescription] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showUpdateNumberModal, setShowUpdateNubmerModal] = useState(false);

    const labels = Labels(lang);

    const homePageDatas = () => {
        Axios.post(apis.mainpage, {
            session_id: constants.sessionId,
            language: lang,
        })
            .then((res) => {
                console.log(res)
                console.log("------------------------------------")
                setHomePageData([res.data.data]);
                setApiSuccess(true);
                res.data.data.phone_status == null && saveLastLogin();

            })
            .catch((err) => {
                console.log(err,"eeeeeeeeerrr");
                SetApiError(true);
            });
    };

    const { asPath } = useRouter();

    const metaTagDatas = () => {
        Axios.post(apis.metaTags, {
            url: asPath,
        })
            .then((res) => {
                setMetaTagKeywords(res.data.data.meta_tags);
            })
            .catch((err) => {});
    };

    useEffect(() => {
        if (lang !== false) {
            homePageDatas();
            
        }

        metaTagDatas();
    }, [lang]);
    const saveLastLogin = () => {
        console.log("iiiiinside last Login");
        var date = new Date().toLocaleDateString();
        
            if (localStorage.getItem('today') == date) {
                setShowUpdateNubmerModal(false);
            } else {
        console.log("iiiiinside last Login else case",width,constants.sessionId);

                localStorage.setItem('today', date);
                if (width < 576 && constants.sessionId != null) {
                    setShowUpdateNubmerModal(true)
                }else{
                    setShowUpdateNubmerModal(false)

                }
                // setShowUpdateNubmerModal((width < 576 && constants.sessionId != null) ? true : false);
            }
        
        
    };

    const updatePhone = () => {
        setShowUpdateNubmerModal(false)
        Axios.post(apis.updatePhoneNumber, {
            phone:phoneNumber,
            session_id: constants.sessionId,
            language: lang,
        })
            .then((res) => {
                console.log(res,"responnnnnnnn");
                showNotification(lang,constants.Success, res.data.message);
                
            })
            .catch((err) => {});
    };

    return (
        <>
        <React.Fragment>
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-Q0SB10G1ZD');`
                    }}
                ></script>
            </Head>
            <noscript
                dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=G-Q0SB10G1ZD" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }}>
            </noscript>
        </React.Fragment>
            {lang !== false && (
                <ContainerHomeElectronics
                    title={'Shop'}
                    metaTags={metaTagKeywords}
                    metaDescription={metaTagDescription.toString()}>
                    {apiError && <Error />}

                    {!apiSuccess && !apiError && (
                        <>
                            {[...Array(2)].map((e, i) => (
                                <ElectronicProductGroupWithCarousel
                                    key={i}
                                    index={i}
                                    language={lang}
                                    isLoading_={true}
                                />
                            ))}
                        </>
                    )}

                    {apiSuccess && (
                        <>
                            {homePageData.map((content, index) => {
                                return (
                                    index < 1 && (
                                        <>
                                            <Modal
                                                centered
                                                footer={null}
                                                width={500}
                                                onCancel={(e) =>
                                                    setShowUpdateNubmerModal(
                                                        false
                                                    )
                                                }
                                                visible={showUpdateNumberModal}>
                                                <h4>
                                                    {
                                                        labels[
                                                            'Update Phone Number'
                                                        ]
                                                    }
                                                </h4>

                                                <Form
                                                    onFinish={() =>
                                                        updatePhone()
                                                    }>
                                                    <Col
                                                        className="gutter-row"
                                                        span={24}
                                                        style={{
                                                            marginTop: '2rem',
                                                        }}>
                                                        <Form.Item
                                                            validateTrigger="onSubmit"
                                                            name="phone"
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        'Please fill your phone number!',
                                                                },
                                                                {
                                                                    min: 3,
                                                                    message:
                                                                        'Phone number must be 9 digit!',
                                                                },
                                                            ]}>
                                                            <Input
                                                                placeholder={
                                                                    labels[
                                                                        'Phone'
                                                                    ]
                                                                }
                                                                
                                                                type="text"
                                                                onChange={(e) =>
                                                                    setPhoneNumber(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                        </Form.Item>
                                                    </Col>

                                                    <Col
                                                        className="gutter-row"
                                                        span={24}
                                                        style={{
                                                            marginTop: '3rem',
                                                            display: 'flex',
                                                        }}>
                                                        <button
                                                            type="submit"
                                                            className="ps-btn"
                                                            style={{
                                                                maxWidth:
                                                                    '100%',
                                                            }}>
                                                            {labels['submit']}
                                                        </button>
                                                        <div
                                                            style={{
                                                                border: `1px solid ${constants.secondaryColor}`,
                                                                outline: 'none',
                                                                borderRadius:
                                                                    '6px',
                                                                cursor: 'pointer',
                                                                display: 'flex',
                                                                alignContent:
                                                                    'center',
                                                                alignItems:
                                                                    'center',
                                                                color: `${constants.secondaryColor}`,
                                                                fontWeight:
                                                                    'bold',
                                                                padding:
                                                                    '0 4rem',
                                                                maxWidth:
                                                                    '100%',
                                                                marginLeft:
                                                                    '1rem',
                                                                backgroundColor:
                                                                    'white',
                                                            }}>
                                                            {labels['cancel']}
                                                        </div>
                                                    </Col>
                                                </Form>
                                            </Modal>

    
                                            <div className='row' style={{cursor:'pointer'}}>
                                                {/* <div style={{padding:"0px"}}> */}
                                                   <Link href='/shop?category=gava-plus-1'><img  src="../static/img/shop/great_deal_mobile.jpg" alt="image" style={{width:"68%",aspectRatio:'3'}} /></Link> 
                                                {/* </div> */}
                                                <div style={{padding:"0px",width:"32%"}} >
                                                    <div style={{padding:"0px"}}>
                                                        <Link href='/shop?category=gadgets-2'><img src="../static/img/shop/gadget12.jpg" alt='image'  /></Link>
                                                    </div>
                                                    <div style={{padding:"0px"}}>
                                                        <Link href='/shop?category=genuine-accessories-3'><img src="../static/img/shop/accesories.jpg" alt='image'  /></Link>

                                                    </div>
                                                </div>
                                            </div>
                                                                                    
                                            {content.offers.map(
                                                (offerContent, index) => {
                                                    {console.log(offerContent,"offerContent")}
                                                    return (
                                                       ( offerContent
                                                        .offer_products
                                                        .length != 0 ) && (
                                                            <ElectronicProductGroupWithCarousel
                                                                index={index}
                                                                language={lang}
                                                                Slug={
                                                                    offerContent.slug_offer
                                                                }
                                                                title={
                                                                    offerContent.offer_name
                                                                }
                                                                products={
                                                                    offerContent.offer_products
                                                                }
                                                                arabicTitle={
                                                                    offerContent.arabic_translator
                                                                }
                                                                type={'offer'}
                                                            />
                                                        )
                                                    );
                                                }
                                            )}

                                            <BannerCards
                                                banners={content.bannercard_mid}
                                            />

                                            <BrandsCard brandIcon={content.brands}/>

                                            <BannerCards
                                                banners={content.bannercard_bottom}     
                                            /> 
                                                {content.parent_category.map(
                                                (categoriesContent, index) => {
                                                    // {console.log(content.top_catagory,"categoriesContent")}

                                                    return (
                                                       ( categoriesContent
                                                            .products
                                                            .length != 0 ) && (
                                                            <ElectronicProductGroupWithCarousel
                                                                index={index}
                                                                language={lang}
                                                                Slug={
                                                                    categoriesContent.slug_category
                                                                }
                                                                title={
                                                                    categoriesContent.Category_Name
                                                                }
                                                                titleDesc={
                                                                    categoriesContent.description
                                                                }
                                                                arabicTitle={
                                                                    categoriesContent.arabic_translator
                                                                }
                                                                products={
                                                                    categoriesContent.products
                                                                }
                                                                type={
                                                                    'category'
                                                                }
                                                            />
                                                        )
                                                    );
                                                }
                                            )}

                                            <BigBanner 
                                                banners={content.main_bannermid}
                                                />  
                                        </>
                                    )
                                );
                            })}
                        </>
                    )}
                </ContainerHomeElectronics>
            )}
        </>
    );
};

export default HomepageDefaultPage;
