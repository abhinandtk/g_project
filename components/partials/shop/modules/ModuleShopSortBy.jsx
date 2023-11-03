import React from 'react';
import constants from '~/public/static/data/my-constants/Constants';
import { Labels } from '~/public/static/data/my-constants/Labels';



const ModuleShopSortBy = ({ setAllproducts,byFilter,language}) => {
    

    const labels = Labels(language)



    const sortedProductDatas = (value) => {
        
            byFilter(
                'sortby',
                value,
                // e.target.checked
            );
        
    }

    return (
        language !== undefined &&
        <select
            dir={language === constants.English ? 'ltr':"rtl"}
            className="ps-select form-control"
            data-placeholder="Sort Items"
            onChange={(e) => sortedProductDatas(e.target.value)}>
            <option value={'bylatest'}>{labels['Sort by latest']}</option>
            <option value={'bymostrated'}>{labels['Sort by most rating']} </option>
            <option value={'byLTH'}>{labels['Sort by price: low to high']} </option>
            <option value={'byHTL'}>{labels['Sort by price: high to low']}</option>
        </select>
    );
};

export default ModuleShopSortBy;
