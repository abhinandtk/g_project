import React, { useEffect, useState, useCallback } from 'react';
import ElectronicProductGroupWithCarousel from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import ElectronicBanner from '~/components/partials/homepage/electronic/ElectronicBanner';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import apis from '~/public/static/data/my-constants/Api';
import  Axios  from 'axios';
import Error from './404';
import Head from 'next/head';
import { ShareDataContext } from '~/utilities/share-data-context';
import constants from '~/public/static/data/my-constants/Constants';
import BigBanner from '~/components/partials/homepage/electronic/BigBanner';
import HeaderCategories from '~/components/partials/homepage/electronic/HeaderCategories';
import BannerCards from '~/components/partials/homepage/electronic/BannerCards';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { useRouter } from 'next/router';
import { showNotification } from '~/utilities/common-helpers';
import { useDispatch, useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { Col,Container,Row } from 'reactstrap';
import Title from 'antd/lib/skeleton/Title';
import TextArea from 'antd/lib/input/TextArea';
import { useWindowSize } from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import BigCategories from '~/components/partials/homepage/electronic/BigCategories';
import HomeBannerCard from '~/components/partials/homepage/electronic/HomeBannerCard';
import RepairingServiceBanner from '~/components/partials/homepage/electronic/RepairingServiceBanner';
import Link from 'next/link';
import { setAllBrands } from '~/store/datas/action';
const FirstHomePage = () => {
    const [lang, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);
    const [width, height] = useWindowSize();
    const dispatch=useDispatch()



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

    const router = useRouter();

    const labels = Labels(lang);

    const homePageDatas = () => {
        Axios.post(apis.mainpage, {
            session_id: constants.sessionId,
            language: lang,
        })
            .then((res) => {
                console.log(res,"reeeeeeeeeeeeeeeeeee")
                console.log("------------------check------------------")
                setHomePageData([res.data.data]);
                setApiSuccess(true);
                dispatch(setAllBrands(res.data.data.brands))

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
                <ContainerHomeElectronics>
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
                                            {/* <Modal
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
                                            </Modal> */}

                                            <HomeBannerCard
                                                banners={content.bannercard_top}
                                            />
                                                                                        

                                            
                                                
                                            <div className='container-fluid row' style={{backgroundColor:"#384D9C",height:"auto",marginBottom:"6rem"}}>
                                                <Col  sm={12} md={6}>
                                                    <div className='images-about'>
                                                        <img className="image1" src='static/img/about_us/506X576About Us.jpg' alt='image1' />
                                                    </div>
                                                </Col>
                                                <Col sm={12} md={6}>
                                                    <div className='about-gava-content'>
                                                        <p>Experience premium quality with affordable price</p>
                                                        <h2>Explore south india&apos;s largest Mobile, Laptop and E-gadget service center</h2>
                                                        <p>Gava comes with comprehensive solutions for all the troubles in your gadget and it is the perfect choice for pre-owned mobiles and laptops which is possible with an efficient technical team and advanced repair services. Gava has a wide range of repair activities that include Apple products, smartphones, laptops, smart TV, cameras, kitchen appliances and so more.
                                                            <br></br>
                                                            Gava is the first ISO 27001:2013 certified brand in Kerala which ensures customer privacy protection and data security. And what makes Gava relevant in the refurbished market is the quality of certified pre-owned products that we offer. We provide our quality-checked products with a warranty from 3 months to 1 year and this warranty demonstrates trust in our service and technical team. We intend to share our confidence and trust with the people of Kerala as well...
                                                            <br></br>
                                                            {/* Every pre-owned gadget is presented only after 40 different quality checks. That&apos;s the secret behind the quality of our products and warranty. Our technical team is committed to returning customers gadgets within 45 minutes which is a surprisingly unbeatable service time. It is not an easy task but we manage it with our qualified technical team. The service arena is transparent and customers are allowed to watch how Gava treats their gadgets. Gava&apos;s credibility is demonstrated through deeds rather than words. */}
                                                        </p>
                                                        <button className='btn-about-gava' onClick={() => {router.push('/page/about-us')}}>Read More</button>
                                                    </div>
                                                </Col>
                                            </div>

                                            <RepairingServiceBanner />
                                            <BannerCards
                                                banners={content.bannercard_top}
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
                                            <div className='sell_banner'>
                                            <Link href='/sell'>
                                            <img src='static/img/home_bannercard/home_bottom_ban.jpg' style={{cursor:'pointer'}} alt='gava'/>
                                            </Link>
                                            {/* <div className='left_content'>
                                                <p>Sell your old phone with the best price</p>
                                                <button onClick={() => {router.push('/sell')}}>Sell Now</button>
                                            </div> */}
                                            </div>
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

export default FirstHomePage;
