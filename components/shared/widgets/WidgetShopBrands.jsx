import React, { useEffect, useState } from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import Link from 'next/link';
import { Checkbox, ConfigProvider, Space } from 'antd';
import { Radio, Input } from 'antd';
import { useRouter } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';

                                                        
const WidgetShopBrands = ({language, filterBy, brands, byFilter, slug }) => {

    const labels = Labels(language)
    return (
        // <ConfigProvider direction={language === constants.English ? 'ltr':'rtl'}>

       

        <aside
            className="widget widget_shop widget_shop--brand"
            style={{ paddingTop: '10px', paddingBottom: '0', marginBottom: '0' }}>
            <h4  className="widget-title" style={{ marginBottom: '0',textAlign:language === constants.Arabic && "right" }}>
               { labels['By Brands']}
            </h4>
           
               

            <figure style={{textAlign:language === constants.Arabic && "right"}}>
                {brands.map((item) => {
                    let abc = [];
                    return (
                        <>
                            <Checkbox
                                onChange={(e) => {
                                    byFilter(
                                        'byBrand',
                                        item.slug_brand,
                                        e.target.checked
                                    );
                                }}
                                defaultChecked={item.slug_brand === slug}
                                value={item.slug_brand}
                                checked={filterBy.byBrand.includes(item.slug_brand)}
                            >
                                {language === constants.English ?  item.brand : item.arabic_translator}
                            </Checkbox>{' '}
                            <br />
                            <br />
                        </>
                    );
                })}
            </figure>
        </aside>
        // </ConfigProvider>

    );
};

export default WidgetShopBrands;
