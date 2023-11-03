import React from 'react';
import { useRouter } from 'next/router';

import { Labels } from '~/public/static/data/my-constants/Labels';

const ModuleProductDetailSpecification = ({ product, language }) => {
    const router = useRouter();
    const labels = Labels(language);

    return (
        <div className="ps-product__specification">
            {/* 
        <p>
            <strong>SKU:</strong> SF1133569600-1
        </p> */}
            <p className="categories">
                <strong> Categories:</strong>
                <a
                    onClick={() => {
                        router.push(
                            `/shop?category=${product.Product_Category.slug_category}`
                        );
                    }}>
                    {product.Product_Category.Category_Name}
                </a>
            </p>

            <p className="tags">
                <strong>
                    {' '}
                    {product.return_eligibility === 'No'
                        ? labels['not eligible for return']
                        : labels['eligible for return']}
                </strong>
            </p>
        </div>
    );
};

export default ModuleProductDetailSpecification;
