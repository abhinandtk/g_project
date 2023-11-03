import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import constants from '~/public/static/data/my-constants/Constants';


const PartialDescription = ({product,language}) => (
    <div className="ps-document">
        


        { language === constants.English ?   ReactHtmlParser(product.Description) :ReactHtmlParser(product.arabic_description ) }


    </div>
);

export default PartialDescription;
