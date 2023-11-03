import React, { useEffect, useState } from 'react';
import { Button, Drawer, Pagination, Space } from 'antd';
import Product from '~/components/elements/products/Product';
import ProductWide from '~/components/elements/products/ProductWide';
import ProductRepository from '~/repositories/ProductRepository';
import ModuleShopSortBy from '~/components/partials/shop/modules/ModuleShopSortBy';
import { useRouter } from 'next/router';
import { generateTempArray } from '~/utilities/common-helpers';
import SkeletonProduct from '~/components/elements/skeletons/SkeletonProduct';
import { FilterFilled, SearchOutlined } from '@ant-design/icons';
import FilterByDrawerMobile from './modules/FilterByDrawerMobile';
import Product1 from '~/components/elements/products/Product1';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useWindowSize } from '../homepage/electronic/ElectronicProductGroupWithCarousel';

const ShopItems = ({
    columns = 4,
    pageSize ,
    products,
    isLoading_,
    setFiltersFromFilterByMobile,
    category,
    brands,
    price,
    byFilter,
    slug,
    setAllProducts,
    allVarients,
    setOffset,
    clearFilters,
    language,
    filterBy
}) => {

    const Router = useRouter();
    const { page } = Router.query;
    const [listView, setListView] = useState(true);
    const [total, setTotal] = useState(50);
    const [classes, setClasses] = useState(
        'col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6'
    );
    const [currentPage, setCurrentPage] = useState(1);
    const [filterDrawer, setFilterDrawer] = useState(false);

    function handleChangeViewMode(e) {
        e.preventDefault();
        setListView(!listView);
    }

    function handlePagination(page, pageSize) {
        setCurrentPage(page);
        
        setOffset(page - 1);
        // Router.push(`/shop?page=${page}`);
    }

    const labels = Labels(language)

    let productItemsView, totalProductCount;

    if (isLoading_) {
        const skeletonItems = generateTempArray(12).map((item) => (
            <div className={classes} key={item}>
                <SkeletonProduct />
            </div>
        ));
        productItemsView = <div className="row">{skeletonItems}</div>;
    } else {
        if (products.length !== 0) {
            if (products.length > 0) {
                totalProductCount = products.length;
                if (listView) {
                    const items = products.map((item, index) => (
                        
                            <div
                                style={{ padding: '1rem' }}
                                className={classes}
                                key={item.slug_Id}>
                                <Product1 language={language} shopPage={true} product={item} />
                            </div>
                      
                    ));
                    productItemsView = (
                        <div className="ps-shop-items">
                            <div className="row">{items}</div>
                        </div>
                    );
                } else {
                    productItemsView = products.map((item) => (
                        <ProductWide product={item} key={item}/>
                    ));
                }
            } else {
                productItemsView = <p>{labels['No product found']} </p>;
            }
        }
    }

    const [width, height] = useWindowSize();



    return (
       
        language === undefined ? (
        <div className="ps-shopping">
            <div className="ps-shopping__content">{productItemsView}</div>
        </div>
        ):  
        <div className="ps-shopping">

            {width < 991 && (
            <FilterByDrawerMobile
                language={language}
                setFiltersFromFilterByMobile={setFiltersFromFilterByMobile}
                setFilterDrawer={setFilterDrawer}
                filterDrawer={filterDrawer}
                category={category}
                brands={brands}
                allVarients={allVarients}
                price={price}
                byFilter={byFilter}
                slug={slug}
                clearFilters={clearFilters}
                filterByfromMain={filterBy}


            />

            )}

            <div className="shop-page__filter-sort-small-screen">
                <Space
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginBottom:"2rem",
                    }}>
                    <ModuleShopSortBy language={language} byFilter={byFilter} setAllproducts={setAllProducts} />
                    <Button
                        className="form-control shop-page__filter-btn"
                        onClick={() => setFilterDrawer(true)}>
                        <FilterFilled />
                        Filter By
                    </Button>
                </Space>

                
            </div>

            <div className="ps-shopping__header shop-page__filter-sort-big-screen">
                <p>
                <strong className="mr-2">{products.length !==0 ? totalProductCount : 0 }</strong>
                    {labels['Products found']} 
                </p>
                <div className="ps-shopping__actions">
                    <ModuleShopSortBy language={language} byFilter={byFilter} setAllproducts={setAllProducts} />
                    
                </div>
            </div>


            <div className="ps-shopping__content">{productItemsView}</div>
            {pageSize > 1 && (
            <div className="ps-shopping__footer text-center">
                <div className="ps-pagination">
                    <Pagination
                        total={pageSize}
                        pageSize={pageSize}
                        responsive={true}
                        showSizeChanger={false}
                        // current={page !== undefined ? parseInt(page) : 1}
                        current={currentPage}
                        onChange={(e) => handlePagination(e)}
                    />
                </div>
            </div>
            )}
        </div>
    );
};

export default ShopItems;
