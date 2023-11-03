import React from 'react';
import Link from 'next/link';
import constants from '~/public/static/data/my-constants/Constants';
import { useWindowSize } from '../homepage/electronic/ElectronicProductGroupWithCarousel';
import { Skeleton } from 'antd';
import { generateTempArray } from '~/utilities/common-helpers';

const ShopBrands = ({ brands, byFilter, isLoading_ }) => {
    const [width, height] = useWindowSize();
    let productItemsView;

    const skeletons = generateTempArray(width>1200?6:width>992?4:width>576?3:2).map((item) => (
        <div className="col-xl-2 col-lg-3 col-sm-4 col-6" key={item} >
            <div className="ps-skeleton ps-skeleton--product " >
            <Skeleton.Input active={true} size={350} style={{height: 160}} />
        </div>
        </div>
    ));
    productItemsView = <div className="row">{skeletons}</div>;


    return(
    <div className="ps-shop-brand">
        
        {isLoading_ ? (
            productItemsView
        ):(
            brands.map((brand, index) => {
                return (
                    <a key={index}>
                        <img
                            src={`${constants.port}${brand.icon}`}
                            alt={brand.brand}
                            className="ps-shop-brand__image"
                            onClick={() => byFilter('byBrand', brand.slug_brand)}
                        />
                    </a>
                );
            })

        )}
        
    </div>
    )
}

export default ShopBrands;
