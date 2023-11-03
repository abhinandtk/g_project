import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopItems from '~/components/partials/shop/ShopItems';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import constants from '~/public/static/data/my-constants/Constants';
import Error from '../404';
import { useRouter } from 'next/router';
import { Skeleton } from 'antd';
import WidgetShopVarients from '~/components/shared/widgets/WidgetShopVarients';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';
import { showNotification } from '~/utilities/common-helpers';
import { useDispatch, useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import Head from 'next/head';
// import { setShopPageMaxPrice, setShopPageMinPrice } from '~/store/datas/action';
const ShopDefaultPage = () => {
    const [shopPageData, setShopPageData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const router = useRouter();
    const [allProducts, setAllProducts] = useState(null);
    const { asPath } = useRouter();

    const [productVarient, setProductVarient] = useState(null);
    const [offset, setOffset] = useState(0);
    const [filterBy, setFilterBy] = useState({
        minPrice: null,
        maxPrice: null,
        byBrand: [],
        byCategory: null,
        byVarient: [],
        byOffer: null,
        bySearch: null,
        sortby: null,
    });
    const [metaTagKeywords, setMetaTagKeywords] = useState([]);
    const [metaTagDescription, setMetaTagDescription] = useState('');
    const [metaTagObjects, setMetaTagObjects] = useState(null);
    const [priceReAssign,setPriceReAssign] = useState(true)
    const [minPrice,setMinPrice] = useState(0)
    const [maxPrice,setMaxPrice] = useState(0)
    const [something,setSomething] = useState(false)
    const [lang, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);

    // const language = useLanguageHook();
    const dispatch = useDispatch()

    const slug = router.query;

    const shopPageDatas = (value, pageNo) => {
        console.log("dddddddddddddddddddddddddddddddddd",value)

        setSomething(false)
        Axios.post(apis.shopPage, {
            session_id: constants['sessionId'],
            language: lang,
            offset: pageNo === undefined ? offset : pageNo,
            brandSlug: value.byBrand,
            categorySlug: value.byCategory,
            minPrice: value.minPrice,
            maxPrice: value.maxPrice,
            varientSlug: value.byVarient,
            offerSlug: value.byOffer,
            search: value.bySearch,
            sortby: value.sortby,
        })
            .then((res) => {

                if (value.minPrice === null && value.maxPrice === null) {
                    localStorage.setItem('shopPageMinPrice1',res.data.data.by_prize.min_prize)
                    localStorage.setItem('shopPageMaxPrice1',res.data.data.by_prize.max_prize) 
                    localStorage.setItem('shopPageMinPrice',res.data.data.by_prize.min_prize)
                    localStorage.setItem('shopPageMaxPrice',res.data.data.by_prize.max_prize) 
                }
            
                setShopPageData([res.data.data]);
                setAllProducts(res.data.data.products);                    

                setSomething(true)

                setApiSuccess(true);
            })
            .catch((err) => {
                SetApiError(true);
            });
    };

    let path = asPath.split('')[1].split('')
    path.pop()
    let _ = path.toString()
    let title  = _.replace(',', ' ')
   

    const metaTagDatas = () => {
        var tUrl = '';
        if (slug.hasOwnProperty('category')) {
            if (slug.hasOwnProperty("brand")){
                tUrl = `/brand/${slug.brand}`
            }else{
                tUrl = `/category/${slug.category}`
            }
        }
        Axios.post(apis.metaTags, {
            url: tUrl,
        })
            .then((res) => {
                setMetaTagObjects(res.data.data.tags[0]);
                setMetaTagKeywords(res.data.data.meta_tags);
            })
            .catch((err) => {
                
            });
    };

    useEffect(() => {
        const filterBy_ = { ...filterBy };
        if (slug.hasOwnProperty('category')) {
            filterBy_['byCategory'] = slug.category;
            filterBy_['bySearch'] = null;
            filterBy_['byBrand'] = [];
            filterBy_['byVarient'] = [];
            filterBy_['maxPrice'] = null;
            filterBy_['minPrice'] = null;
            filterBy_['byOffer'] = null;
            filterBy_['sortby'] = null;
            if (slug.hasOwnProperty("brand")){
                filterBy_['byBrand'] = [slug.brand];
            }
        }
        if (slug.hasOwnProperty('search')) {
            filterBy_['bySearch'] = slug.search;
            filterBy_['byCategory'] = null;
        }
        if (slug.hasOwnProperty('offer')) {
            filterBy_['byOffer'] = slug.offer;
        }
        if (slug.hasOwnProperty('brand')) {
            filterBy_['byBrand'] = [slug.brand];
        }
        setFilterBy({ ...filterBy_ });
        

        lang !== false && shopPageDatas(filterBy_);
        metaTagDatas();
    }, [asPath,lang]);

    const clearFilters = () => {
        const filterBy_ = { ...filterBy };
        if (slug.hasOwnProperty('category')) {
            filterBy_['byCategory'] = slug.category;
            filterBy_['bySearch'] = null;
            filterBy_['byBrand'] = [];
            filterBy_['byVarient'] = [];
            filterBy_['maxPrice'] = null;
            filterBy_['minPrice'] = null;
            filterBy_['byOffer'] = null;
            filterBy_['sortby'] = null;
        }
        if (slug.hasOwnProperty('search')) {
            filterBy_['bySearch'] = slug.search;
            filterBy_['byCategory'] = null;
            filterBy_['byBrand'] = [];
            filterBy_['byVarient'] = [];
            filterBy_['maxPrice'] = null;
            filterBy_['minPrice'] = null;
            filterBy_['byOffer'] = null;
            filterBy_['sortby'] = null;
        }
        if (slug.hasOwnProperty('offer')) {
            filterBy_['byOffer'] = slug.offer;
            filterBy_['bySearch'] = null;
            filterBy_['byCategory'] = null;
            filterBy_['byBrand'] = [];
            filterBy_['byVarient'] = [];
            filterBy_['maxPrice'] = null;
            filterBy_['minPrice'] = null;
            filterBy_['sortby'] = null;
        }
        if (slug.hasOwnProperty('brand')) {
            filterBy_['byBrand'] = [slug.brand];
            filterBy_['byOffer'] = null;
            filterBy_['bySearch'] = null;
            filterBy_['byCategory'] = null;
            filterBy_['byVarient'] = [];
            filterBy_['maxPrice'] = null;
            filterBy_['minPrice'] = null;
            filterBy_['sortby'] = null;
        }
        setFilterBy({ ...filterBy_ });
        lang !== false && shopPageDatas(filterBy_);
    };

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];

   
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

    const getDataByfilter = (by, value1, value2) => {
        const filterBy_ = { ...filterBy };
        if (by === 'byPrice') {
            filterBy_['minPrice'] = value1;
            filterBy_['maxPrice'] = value2;
        } else if (by === 'byBrand') {
            const oldValues = [...filterBy_['byBrand']];

            const index = oldValues.indexOf(value1);
            if (index > -1) {
                oldValues.splice(index, 1);
                filterBy_['byBrand'] = oldValues;
            } else {
                const NewValues = value1;
                const concat_values = oldValues.concat(NewValues);
                filterBy_['byBrand'] = concat_values;
            }
        } else if (by === 'byVarient') {
            const oldValues = [...filterBy_['byVarient']];

            const index = oldValues.indexOf(value1);
            if (index > -1) {
                oldValues.splice(index, 1);
                filterBy_['byVarient'] = oldValues;
            } else {
                const NewValues = value1;
                const concat_values = oldValues.concat(NewValues);
                filterBy_['byVarient'] = concat_values;
            }
        } else {
            filterBy_[by] = value1;
        }
        setFilterBy({ ...filterBy_ });
        console.log("deeeerrrrrrrrrrrrrrrrrrrrrtttttttttttt ",filterBy_)

        lang !== false && shopPageDatas(filterBy_);
    };

    const setFiltersFromFilterByMobile = (items) => {
        setFilterBy(items);
        shopPageDatas(items);
    };

    const changeOffset = (pageNo) => {
        setOffset(pageNo);
        shopPageDatas(filterBy, pageNo);
    };

    const labels = Labels(lang)

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
        <ShareDataContext.Provider
            value={{
                product_varient: [productVarient, setProductVarient],
            }}>
            <ContainerHomeElectronics
                title={"shop"}
                navigationList={'shop'}
                metaTags={metaTagKeywords.toString()}
                metaTitle={metaTagObjects?.meta_title}
                metaDescription={metaTagObjects?.meta_description}>
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        {slug.hasOwnProperty('search') ? (
                            <h3
                                style={{
                                    paddingTop: '10px',
                                    fontWeight: '600',
                                    color: '#242424',
                                }}>
                                    
                                {labels['Results for']} {' '}
                                {
                                    <span
                                        style={{
                                            textDecoration: 'underline',
                                            color: 'gray',
                                        }}>
                                        {slug.search}
                                    </span>
                                }
                            </h3>
                        ) : (
                            <div style={{ height: '31px' }}></div>
                        )}
                        {apiError && <Error />}

                        {!apiError && !apiSuccess && (
                            <>
                                {/* <ShopBrands isLoading_={true} /> */}
                                <div className="ps-layout--shop">
                                    <div className="ps-layout__left">
                                        <Skeleton
                                            active={true}
                                            paragraph={{
                                                rows: 10,
                                                title: true,
                                            }}
                                        />
                                    </div>
                                    <div className="ps-layout__right">
                                        <ShopItems
                                            columns={6}
                                            pageSize={18}
                                            isLoading_={true}
                                        />
                                    </div>
                                </div>
                            </>
                        )}

                        {apiSuccess &&
                            shopPageData.map((content, index) => {
                                return lang === constants['English'] ? (
                                    <>

                                        <div className="ps-layout--shop">
                                            <div className="ps-layout__left">
                                                <p onClick={()=>clearFilters()} style={{fontSize:"16px",cursor:"pointer",color:"#2874f0" }}>Clear filters</p>

                                                {!slug.hasOwnProperty(
                                                    'search'
                                                ) && (
                                                   
                                                    <WidgetShopCategories
                                                        language={lang}
                                                        category={
                                                            content.catagory
                                                        }
                                                        byFilter={
                                                            getDataByfilter
                                                        }
                                                        slug={
                                                            slug.hasOwnProperty(
                                                                'category'
                                                            )
                                                                ? slug.category
                                                                : null
                                                        }
                                                        filterBy={filterBy}
                                                    />
                                                )}

                                                <WidgetShopBrands
                                                        language={lang}
                                                        filterBy={filterBy}

                                                    brands={content.brand}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : null
                                                    }
                                                />
                                                {content.varients.map(
                                                    (item, index) => {                                                        
                                                        return (
                                                            item.varient_value.length !== 0 ?
                                                            item.Varient_Name == "General" ? <></> :
                                                            <WidgetShopVarients
                                                                language={lang}
                                                                key={index}
                                                                name={
                                                                    item.Varient_Name
                                                                }
                                                                values={
                                                                    item.varient_value
                                                                }
                                                                byFilter={
                                                                    getDataByfilter
                                                                }
                                                                filterBy={filterBy}
                                                            />
                                                            : <></>
                                                        ); 
                                                    }
                                                )}


                                                <WidgetShopFilterByPriceRange
                                                    language={lang}
                                                    filterBy={filterBy}

                                                    price={content.by_prize}

                                                    byFilter={getDataByfilter}
                                                    setPriceReAssign={setPriceReAssign}
                                                />
                                                {/* )} */}
                                            </div>

                                            <div className="ps-layout__right">
                                                <ShopItems
                                                
                                                filterBy={filterBy}

                                                    language={lang}
                                                    columns={6}
                                                    pageSize={Math.ceil(
                                                        parseInt(
                                                            content.count
                                                        ) / 16
                                                    )}
                                                    products={allProducts}
                                                    setAllProducts={
                                                        setAllProducts
                                                    }
                                                    category={content.catagory}
                                                    brands={content.brand}
                                                    allVarients={
                                                        content.varients
                                                    }
                                                    price={content.by_prize}
                                                    byFilter={getDataByfilter}
                                                    setFiltersFromFilterByMobile={
                                                        setFiltersFromFilterByMobile
                                                    }
                                                    clearFilters={clearFilters}
                                                    setOffset={changeOffset}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : slug.hasOwnProperty(
                                                                  'category'
                                                              )
                                                            ? slug.category
                                                            : null
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="ps-layout--shop">
                                            <div className="ps-layout__right">
                                                <ShopItems
                                                                filterBy={filterBy}

                                                    language={lang}

                                                    columns={6}
                                                    pageSize={Math.ceil(
                                                        parseInt(
                                                            content.count
                                                        ) / 16
                                                    )}
                                                    products={allProducts}
                                                    setAllProducts={
                                                        setAllProducts
                                                    }
                                                    category={content.catagory}
                                                    brands={content.brand}
                                                    allVarients={
                                                        content.varients
                                                    }
                                                    price={content.by_prize}
                                                    byFilter={getDataByfilter}
                                                    setFiltersFromFilterByMobile={
                                                        setFiltersFromFilterByMobile
                                                    }
                                                    clearFilters={clearFilters}
                                                    setOffset={changeOffset}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : slug.hasOwnProperty(
                                                                  'category'
                                                              )
                                                            ? slug.category
                                                            : null
                                                    }
                                                />
                                            </div>
                                            <div className="ps-layout__left">
                                                {!slug.hasOwnProperty(
                                                    'search'
                                                ) && (
                                                    <WidgetShopCategories
                                                        language={lang}

                                                        category={
                                                            content.catagory
                                                        }
                                                        byFilter={
                                                            getDataByfilter
                                                        }
                                                        slug={
                                                            slug.hasOwnProperty(
                                                                'category'
                                                            )
                                                                ? slug.category
                                                                : null
                                                        }
                                                    />
                                                )}

                                                <WidgetShopBrands
                                                        language={lang}
                                                        filterBy={filterBy}

                                                    brands={content.brand}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : null
                                                    }
                                                />

                                                {content.varient.map(
                                                    (item, index) => {
                                                        item.varient_value
                                                            .length !== 0;

                                                        return (
                                                            <WidgetShopVarients
                                                                language={lang}
                                                                key={index}

                                                                name={
                                                                 item.Varient_Name
                                                                }
                                                                values={
                                                                    item.varient_value
                                                                }
                                                                byFilter={
                                                                    getDataByfilter
                                                                }
                                                                filterBy={filterBy}

                                                            />
                                                        );
                                                    }
                                                )}

                                                <WidgetShopFilterByPriceRange
                                                                language={lang}

                                                    price={content.by_prize}
                                                    byFilter={getDataByfilter}
                                                />
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                    </div>
                </div>
            </ContainerHomeElectronics>
        </ShareDataContext.Provider>
        )}
    </>)
};
export default ShopDefaultPage;
