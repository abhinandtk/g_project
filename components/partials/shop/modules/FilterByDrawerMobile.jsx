import { LeftOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import WidgetShopBrands from '~/components/shared/widgets/WidgetShopBrands';
import WidgetShopCategories from '~/components/shared/widgets/WidgetShopCategories';
import WidgetShopFilterByPriceRange from '~/components/shared/widgets/WidgetShopFilterByPriceRange';
import WidgetShopVarients from '~/components/shared/widgets/WidgetShopVarients';
import { Labels } from '~/public/static/data/my-constants/Labels';

function FilterByDrawerMobile({
    setFilterDrawer,
    filterDrawer,
    category,
    brands,
    price,
    // varient,
    byFilter,
    slug,
    allVarients,
    setFiltersFromFilterByMobile,
    clearFilters,
    // filterBy,
    filterByfromMain,
    language,
}) {


    const labels = Labels(language);
    const router = useRouter()
    const Mslug = router.query;
    const newFilterByMain = {...filterByfromMain}
    newFilterByMain['byCategory'] = Mslug.hasOwnProperty('category') ? Mslug.category : null
    

    const [byFilter_, setbyFilter] = useState(newFilterByMain)

    const filterBy = { ...byFilter_ };
    const setFilters = (by, value1, value2) => {
        if (by === 'byPrice') {
            filterBy['minPrice'] = value1;
            filterBy['maxPrice'] = value2;
        } else if (by === 'byBrand') {
            const oldValues = [...filterBy['byBrand']];

            const index = oldValues.indexOf(value1);
            if (index > -1) {
                oldValues.splice(index, 1);
                filterBy['byBrand'] = oldValues;
            } else {
                const NewValues = value1;
                const concat_values = oldValues.concat(NewValues);
                filterBy['byBrand'] = concat_values;
            }
        } else if (by === 'byVarient') {
            const oldValues = [...filterBy['byVarient']];

            const index = oldValues.indexOf(value1);
            if (index > -1) {
                oldValues.splice(index, 1);
                filterBy['byVarient'] = oldValues;
            } else {
                const NewValues = value1;
                const concat_values = oldValues.concat(NewValues);
                filterBy['byVarient'] = concat_values;
            }
        } else {
            filterBy[by] = value1;
        }

        setbyFilter({ ...filterBy });
    };

    const clearFilters1 = () => {
        setbyFilter({
            minPrice: null,
            maxPrice: null,
            byBrand: Mslug.hasOwnProperty('brand') ? [Mslug.brand] : [],
            byCategory: Mslug.hasOwnProperty('category') ? Mslug.category : null,
            byVarient: [],
            byOffer: Mslug.hasOwnProperty('offer') ? Mslug.offer : null,
            bySearch: Mslug.hasOwnProperty('search') ? Mslug.search : null,
            sortby: null,
        });
    };

    allVarients !== undefined && allVarients.map((i, j) => {});

    return (
        <Drawer
            className="ps-panel--mobile"
            placement="right"
            closable={false}
            onClose={() => setFilterDrawer(false)}
            visible={filterDrawer}>
            <div className="ps-panel--wrapper">
                <div className="ps-panel__header">
                    <h3>{labels['Filter By']}</h3>

                    <span
                        className="ps-panel__close"
                        onClick={() => setFilterDrawer(false)}>
                        <i
                            className="icon-cross"
                            style={{ color: 'white', cursor: 'pointer' }}></i>
                    </span>
                </div>
                <div className="ps-panel__content">
                    {/* <WidgetShopCategories
                        category={category}
                        byFilter={setFilters}
                        slug={slug}
                    /> */}
                    {brands !== undefined &&
                        allVarients !== undefined &&
                        price !== undefined && (
                            <>
                                <WidgetShopBrands
                                    language={language}
                                    filterBy={byFilter_}
                                    brands={brands}
                                    byFilter={setFilters}
                                    slug={slug}
                                />
                                {allVarients !== undefined &&
                                    allVarients.map((item, index) => {
                                        return (
                                            item.varient_value.length !== 0 ?
                                            <WidgetShopVarients
                                                key={index}
                                                language={language}
                                                filterBy={byFilter_}
                                                name={item.Varient_Name}
                                                values={item.varient_value}
                                                byFilter={setFilters}
                                            />
                                            : <></>
                                        );
                                    })}
                                <WidgetShopFilterByPriceRange
                                    language={language}
                                    price={price}
                                    byFilter={setFilters}
                                />
                            </>
                        )}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '1rem',
                        }}>
                        <button
                            className="ps-btn"
                            style={{ maxWidth: '50%', marginBottom: '2rem' }}
                            onClick={() => {
                                clearFilters1();
                                clearFilters();
                                setFilterDrawer(false);
                            }}>
                            {labels['clear']}
                        </button>
                        <button
                            className="ps-btn"
                            style={{ maxWidth: '50%', marginBottom: '2rem' }}
                            onClick={() => {
                                setFiltersFromFilterByMobile(byFilter_);
                                setFilterDrawer(false);
                            }}>
                            {labels['Apply']}
                        </button>
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

export default FilterByDrawerMobile;
