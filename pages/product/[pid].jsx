import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ProductDetailFullwidth from '~/components/elements/detail/ProductDetailFullwidth';
import HeaderProduct from '~/components/shared/headers/HeaderProduct';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import { ShareDataContext } from '~/utilities/share-data-context';
import ArabicProductDetailFullwidth from '~/components/elements/detail/ArabicProductDetailFullwidth';
import constants from '~/public/static/data/my-constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setProVarient } from '~/store/datas/action';
import ElectronicProductGroupWithCarousel from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import RecentlyViewedProduct from '~/components/partials/product/RecentlyViewedProduct';
import Error from '../404';
import BigBanner from '~/components/partials/homepage/electronic/BigBanner';
import Head from 'next/head';

const ProductDefaultPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { pid } = router.query;
    const [product, setProduct] = useState(null);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [productVarient, setProductVarient] = useState(null);
    const [productImage, setProductImage] = useState(null);
    const [productDescription, setProductDescription] = useState('');
    const [metaTagKeywords, setMetaTagKeywords] = useState('');
    const [metaTagObjects, setMetaTagObjects] = useState(null);
    const [banner,setBanner] = useState([]);
    const [varientPopup,setVarientPopup] = useState([])



    const [lang, setLang] = useState(false);
    const changeLanguage = useSelector((state) => state.datas.changeLanguage);


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

    const prVarientId = useSelector((state) => state.datas.proVarient);

    async function getProduct(pid) {
        Axios.post(apis.productDetail, {
            session_id: constants['sessionId'],
            language: lang,
            slug_Id: pid,
        })
            .then((res) => {
                setProductDescription(res.data.data.product[0].Description);
                setProductImage(res.data.data.product[0].Thumbnail_images);
                setVarientPopup(res.data.data.varient_popup)
                setProduct([res.data.data.product[0]]);
                setApiSuccess(true);
                setBanner(res.data.data.banners)
            })
            .catch((err) => {
                SetApiError(true);
            });
    }

    const { asPath } = useRouter();

    const metaTagDatas = () => {
        Axios.post(apis.metaTags, {
            url: asPath,
        })
            .then((res) => {

                setMetaTagKeywords(res.data.data.meta_tags);
                setMetaTagObjects(res.data.data.tags[0]);
            })
            .catch((err) => {
               
            });
    };

    useEffect(() => {
        metaTagDatas();
        lang !== false && getProduct(pid);
        if (productVarient === null) {
            setProductVarient(pid);
        }
        if (prVarientId === null) {
            dispatch(setProVarient(pid));
            setProductVarient(pid);
        }
    }, [pid,lang]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop',
            url: '/shop',
        },
        {
            text: product ? product.title : 'Loading...',
        },
    ];

    let productView, relatedProducts,relationProducts,headerView, recentlyViewedProducts;
    if (apiSuccess) {
        if (product) {
            if (lang === constants['Arabic']) {
                productView = (
                    <ArabicProductDetailFullwidth language={lang} product={product} />
                );
            } else {
                productView = <ProductDetailFullwidth language={lang} varientPopup={varientPopup} product={product} />;
            }
            product[0].related_products.length !== 0
                ? (relatedProducts = 
                    <>
                      <ElectronicProductGroupWithCarousel
                            // index={i}

                            relatedProducts={true}

                          language={lang}
                          Slug={null}
                          title={'Related Products'}
                          products={product[0].related_products}
                          arabicTitle={'المنتجات المعروضة مؤخرا'}
                          type={'noViewAll'}
                      />
                      </>
                  )
                : (relatedProducts = null);

                product[0].relation_products.length !== 0
                    ? (relationProducts =
                        <ElectronicProductGroupWithCarousel
                              // index={i}
  
                              relatedProducts={true}
  
                            language={lang}
                            Slug={null}
                            title={product[0].relation_name}
                            products={product[0].relation_products}
                            arabicTitle={product[0].relation_name}
                            type={'noViewAll'}
                        />
                      )
                      :(relationProducts = null);
                


            product[0].recently_viewed_products.length !== 0
                ? (recentlyViewedProducts = (
                      <RecentlyViewedProduct
                          products={product[0].recently_viewed_products}
                      />
                  ))
                : (recentlyViewedProducts = null);

            headerView = <HeaderProduct product={product} />;
        } else {
            headerView = <HeaderDefault />;
        }
    } else if (apiError) {
        productView = <Error />;
    } else {
        productView = <SkeletonProductDetail />;
    }

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
                        boxed={true}
                        title={pid.replace(/-/g, ' ')}
                        navigationList={'productDetails'}
                        metaTitle={metaTagObjects?.meta_title}
                        metaTags={product? product[0].tags_items?.map((e)=>{return e.name}):''}
                        metaDescription={metaTagObjects?.meta_description}>
                        <BreadCrumb
                            breacrumb={breadCrumb}
                            products={product}
                            layout="fullwidth"
                        />
                        <div className="ps-page--product">
                            <div className="ps-container">
                                <div className="ps-page__container">
                                    {productView}
                                </div>
                                <div style={{paddingBottom:"50px"}}>
                                <BigBanner banners={banner} />
                                </div>

                                {relatedProducts}
                                {relationProducts}
                                {recentlyViewedProducts}
                            </div>
                            <div style={{visibility:'hidden'}}>
                                {metaTagObjects?.meta_div}
                            </div>
                        </div>
                    </ContainerHomeElectronics>
                </ShareDataContext.Provider>
            )}
        </>
    );
};

export default ProductDefaultPage;
