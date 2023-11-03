import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

import {
    StrapiProductBadge,
    StrapiProductPrice1,
} from '~/utilities/product-helper';

import ModuleProductActions from '~/components/elements/products/modules/ModuleProductActions';
import constants from '~/public/static/data/my-constants/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setProVarient } from '~/store/datas/action';
import { useWindowSize } from '~/components/partials/homepage/electronic/ElectronicProductGroupWithCarousel';
import moment from 'moment';


function Product1({language, product, shopPage, index }) {
    const priceView = StrapiProductPrice1(product,language);
    const thumbnailImage = StrapiProductThumbnail(product);
    const badgeView = StrapiProductBadge(product,language);
    const prVarientId = useSelector((state) => state.datas.proVarient);

    
    

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
 
    const dispatch = useDispatch();

    function setVarient(varient_slug) {
        dispatch(setProVarient(varient_slug));
    }
    const [width, height] = useWindowSize();



    function StrapiProductThumbnail(product) {
        let view;

        if (product.Thumbnail_image !== '' || product.Thumbnail_image !== null ||product.Thumbnail_image !== undefined) {
            view = (
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src={`${constants.port}${product.Thumbnail_image}`}
                                alt={
                                    language === constants['Arabic']
                                        ? product.arabic_translator
                                        : product.Name
                                }
                                title={
                                    language === constants['Arabic']
                                        ? product.arabic_translator
                                        : product.Name

                                }
                                // style={{height:"210px"}}
                                onClick={() => dispatch(setProVarient(product.slug_Id))}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            );
        } else {
            view = (
                <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                    <a>
                        <LazyLoad>
                            <img
                                src="/static/img/not-found.jpg"
                                alt={constants.GAVA}
                                title={constants.GAVA}
                                onClick={() => dispatch(setProVarient(product.slug_Id))}
                            />
                        </LazyLoad>
                    </a>
                </Link>
            );
        }

        return view;
    }

    // console.log("aaaaaaaaaa");
    const currentDate = () => {
        var today,dd,mm,yyyy;
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth()+1;
        yyyy = today.getFullYear();
        return yyyy + "-" + mm +"-"+ dd;
    }

    let warrantyMonth = moment(product.warranty_date).diff(currentDate(),'months')
    


    

    return (
        lang !== false && 
        <div
            key={index}
            className="product-card__new"
            
            // onClick={() => dispatch(setProVarient(product.slug_Id))}
            >
            {product.is_gava_plus ? 
            <div className={`pcn__badge-view ${shopPage && 'pcn_badge_view1'}`}>
                <img src='/static/img/ic_gava_plus.png' width="60px" />
            </div> : <></>

            }
             {product.is_refurbished ?
            <div className='pcn_refurbished_view'>
                <img src='/static/img/ic_refurbrished.png' width="30px" />
            </div>: <></>}
             {warrantyMonth>=1 ?
            <div className='pcn_warrantydate_view'>
                <span style={{fontSize:"20px",fontWeight:"1000"}}>{warrantyMonth}</span><br></br>Months<br></br>Warranty
            </div>: <></>}
            {thumbnailImage}




            {/* <div className="pcn__product-actions">
                <ModuleProductActions language={lang} product={product} />
            </div> */}


            

            <Link href="/product/[pid]" as={`/product/${product.slug_Id}`}>
                <a className="pcn__name" style={{height:"50px",textAlign:language === constants.Arabic && 'right'}} onClick={() => dispatch(setProVarient(product.slug_Id))}>
                    {language === constants['Arabic']
                        ? product.arabic_translator
                        : product.Name}
                </a>
            </Link>
            <div style={{height:"20px"}}>{badgeView}</div>
            <div className="pcn__price">{priceView}</div>
        </div>
    );
}

export default Product1;
