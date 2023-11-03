import React, { useEffect, useState } from 'react';
import ContainerShop from '~/components/layouts/ContainerShop';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ShopItems from '~/components/partials/shop/ShopItems';
import ProductGroupByCarousel from '~/components/partials/product/ProductGroupByCarousel';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import ContainerHomeElectronics from '~/components/layouts/ContainerHomeElectronics';
import { ShareDataContext } from '~/utilities/share-data-context';
import apis from '~/public/static/data/my-constants/Api';
import Axios from 'axios';
import constants from '~/public/static/data/my-constants/Constants';
import Error from '../404';
import WidgetShopCategory from '~/components/shared/widgets/WidgetShopCategory';
import { Router } from 'next/router';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Skeleton } from 'antd';
import WidgetShopVarients from '~/components/shared/widgets/WidgetShopVarients';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const ShopDynamicPage = () => {
    const [shopPageData, setShopPageData] = useState([]);
    const [apiSuccess, setApiSuccess] = useState(false);
    const [apiError, SetApiError] = useState(false);
    const [allProducts,setAllProducts] = useState(null)
    const router = useRouter();

    const { asPath } = useRouter();

    let path, id;

    const [productVarient, setProductVarient] = useState(null);
    const [offset, setOffset] = useState(0);
    const [filterBy, setFilterBy] = useState({
        minPrice: null,
        maxPrice: null,
        byBrand: [],
        byCategory: path === 'category' ? id : null,
        byVarient: [],
        byOffer: null,
        bySearch: null,
    });

    // const language = useSelector((state) => state.datas.language);
    const language = useLanguageHook();

    // const language = constants.language

    const slug = router.query;

    const shopPageDatas = (value) => {
        Axios.post(apis.shopPage, {
            session_id: constants['sessionId'],
            language: language,
            offset: offset,
            brandSlug: value.byBrand,
            categorySlug: value.byCategory,
            minPrice: value.minPrice,
            maxPrice: value.maxPrice,
            varientSlug: value.byVarient,
            offerSlug: value.byOffer,
            search: value.bySearch,
        })
            .then((res) => {
                setShopPageData([res.data.data]);
                setAllProducts(res.data.data.products)
                setApiSuccess(true);
            })
            .catch((err) => {
                SetApiError(true);
            });
    };

    useEffect(() => {
        shopPageDatas(filterBy);
    }, [filterBy]);

    useEffect(() => {
        // setPath(asPath.split('/')[2].split('=')[0])
        // setId(asPath.split('/')[2].split('=')[1])
        path = asPath.split('/')[2].split('=')[0];
        id = asPath.split('/')[2].split('=')[1];
        const filterBy_ = { ...filterBy };
        if (slug.hasOwnProperty('category')) {
            filterBy_['byCategory'] = slug.category;
        }
        if (slug.hasOwnProperty('search')) {
            filterBy_['bySearch'] = slug.search;
        }
        setFilterBy({ ...filterBy_ });
        shopPageDatas(filterBy_);
    }, []);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shop Default',
        },
    ];

    const getDataByfilter = (by, value1, value2) => {
        if (by === 'byPrice') {
            const filterBy_ = { ...filterBy };
            filterBy_['minPrice'] = value1;
            filterBy_['maxPrice'] = value2;
            setFilterBy({ ...filterBy_ });
        } else if (by === 'byBrand') {
            const filterBy_ = { ...filterBy };
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
            setFilterBy({ ...filterBy_ });
        } 
        else if (by === 'byVarient') {
            const filterBy_ = { ...filterBy };
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
            setFilterBy({ ...filterBy_ });
        }else {
            const filterBy_ = { ...filterBy };
            filterBy_[by] = value1;
            setFilterBy({ ...filterBy_ });
        }
    };

    return (
        <ShareDataContext.Provider
            value={{
                product_varient: [productVarient, setProductVarient],
            }}>
            <ContainerHomeElectronics>
                <div className="ps-page--shop">
                    <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                    <div className="ps-container">
                        {apiError && <Error />}

                        {!apiError && !apiSuccess && (
                            <>
                                <ShopBrands isLoading_={true} />
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
                                return language === constants['English'] ? (
                                    <>
                                        <ShopBrands
                                            brands={content.brand}
                                            byFilter={getDataByfilter}
                                        />

                                        <div className="ps-layout--shop">
                                            <div className="ps-layout__left">
                                                <WidgetShopCategories
                                                    category={content.catagory}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'category'
                                                        )
                                                            ? slug.category
                                                            : null
                                                    }
                                                />

                                                <WidgetShopBrands
                                                    brands={content.brand}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : null
                                                    }
                                                    filterBy={filterBy}
                                                />

                                                {content.varient.map(
                                                    (item, index) => {
                                                        return (
                                                            <WidgetShopVarients
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
                                                            />
                                                        );
                                                    }
                                                )}

                                                <WidgetShopFilterByPriceRange
                                                    price={content.by_prize}
                                                    byFilter={getDataByfilter}
                                                />
                                            </div>
                                            <div className="ps-layout__right">
                                                <ShopItems
                                                    columns={6}
                                                    pageSize={18}
                                                    products={allProducts}
                                                    setAllProducts={setAllProducts}
                                                    category={content.catagory}
                                                    brands={content.brand}
                                                    price={content.by_prize}
                                                    byFilter={getDataByfilter}
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
                                        <ShopBrands
                                            brands={content.brand}
                                            byFilter={getDataByfilter}
                                        />

                                        <div className="ps-layout--shop">
                                            <div className="ps-layout__right">
                                                <ShopItems
                                                    columns={6}
                                                    pageSize={18}
                                                    products={allProducts}
                                                />
                                            </div>
                                            <div className="ps-layout__left">
                                                <WidgetShopCategories
                                                    language={language}
                                                    category={content.catagory}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'category'
                                                        )
                                                            ? slug.category
                                                            : null
                                                    }
                                                />

                                                <WidgetShopBrands
                                                    brands={content.brand}
                                                    byFilter={getDataByfilter}
                                                    slug={
                                                        slug.hasOwnProperty(
                                                            'brand'
                                                        )
                                                            ? slug.brand
                                                            : null
                                                    }
                                                    filterBy={filterBy}

                                                />

                                                <WidgetShopFilterByPriceRange
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
    );
};
export default ShopDynamicPage;
