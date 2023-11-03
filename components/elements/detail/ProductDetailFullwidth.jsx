import React, { useEffect, useState } from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleVarients from './modules/ModuleVarients';
import ModuleSecondVarients from './modules/ModuleSecondVarients';
import { useDispatch, useSelector } from 'react-redux';
import {
    setProPrimaryVarientId,
    setProSecondaryVarientId,
} from '~/store/datas/action';

const ProductDetailFullwidth = (props) => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const prVarientId = useSelector((state) => state.datas.proVarient);

    console.log(props.product[0],",,,")
    useEffect(() => {
        props.product[0].Product_Items.map((item, index) => {
            //if (item.multivarient.length !== 0) {
             //   item.multivarient.map((item_, index_) => {
        //             if (item_.slug_id === prVarientId) {
        //                   setThumbnailImages(item_.Thumbnail_images)
        //                 dispatch(setProPrimaryVarientId(item.varent_id));
        //                 dispatch(setProSecondaryVarientId(item_.slug_id));
        //                 setSuccess(true);
        //             }

        //         })
        //     }else{
        //         setThumbnailImages(item.Thumbnail_images)
        //         dispatch(setProPrimaryVarientId(item.varent_id));
        // setSuccess(true);
        //     }
            item.multivarient.length !== 0
                ? item.multivarient.map((item_, index_) => {
                      if (item_.slug_id === prVarientId) {
                          dispatch(setProPrimaryVarientId(item.varent_id));
                          dispatch(setProSecondaryVarientId(item_.slug_id));
                          setSuccess(true);
                      }
                  })
                :dispatch(setProPrimaryVarientId(item.varent_id));
            setSuccess(true);
        });
    }, []);

    
    console.log( props.product,"props product")

    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <>
                {success &&
                    props.product.map((product, index) => {
                        return (
                            <>
                                <div className="ps-product__header" key={index}>
                                    <ThumbnailDefault
                                      
                                        product={product} 
                                            language={props.language}
                                    />
                                    <div className="ps-product__info">
                                        <ModuleDetailTopInformation
                                            product={product}
                                            language={props.language}
                                        />

                                        <>
                                        {product.primary_varient == "General" ? <></> :
                                            <ModuleVarients
                                            varientPopup={props.varientPopup} 
                                            product={product} 
                                            language={props.language}
                                            />}
                                            <ModuleSecondVarients
                                                product={product}
                                            language={props.language}
                                            

                                            />
                                        </>
                                        
                                        {product.coming_soon == "Yes" ? <></> :(
                                        <ModuleDetailShoppingActions
                                            product={product}
                                            language={props.language}

                                        />)}

                                        <ModuleProductDetailSpecification
                                            product={product}
                                            language={props.language}

                                        />
                                    </div>
                                </div>
                                <DefaultDescription
                                    product={product}
                                    comments={product.reviews}
                                    language={props.language}

                                />
                            </>
                        );
                    })}
            </>
        </div>
    );
};

export default ProductDetailFullwidth;
