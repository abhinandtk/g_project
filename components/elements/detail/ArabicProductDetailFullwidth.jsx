import React, { useEffect, useState } from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleVarients from './modules/ModuleVarients';
import { useDispatch, useSelector } from 'react-redux';
import ArabicModuleDetailShoppingActions from './modules/ArabicModuleDetailShoppingActions';
import ModuleProductDetailSpecification from './modules/ModuleProductDetailSpecification';
import { setProPrimaryVarientId, setProSecondaryVarientId } from '~/store/datas/action';
import ModuleSecondVarients from './modules/ModuleSecondVarients';

const ArabicProductDetailFullwidth = (props) => {
    const [success, setSuccess] = useState(false);
    const dispatch = useDispatch();
    const prVarientId = useSelector((state) => state.datas.proVarient);

    useEffect(() => {
        props.product[0].Product_Items.map((item, index) => {
            item.multivarient.length !== 0
                ? item.multivarient.map((item_, index_) => {
                      if (item_.slug_id === prVarientId) {
                          dispatch(setProPrimaryVarientId(item.varent_id));
                          dispatch(setProSecondaryVarientId(item_.slug_id));
                          setSuccess(true);
                      }
                  })
                : dispatch(setProPrimaryVarientId(item.varent_id));
            setSuccess(true);
        });
    }, []);

    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <>
                {success &&
                    props.product.map((product, index) => {
                        return (
                            <>
                                <div className="ps-product__header" key={index}>
                                    <div className="ps-product__info">
                                        <ModuleDetailTopInformation
                                            product={product}
                                            language={props.language}
                                        />

                                        <>
                                            <ModuleVarients
                                                product={product}
                                                language={props.language}
                                            />
                                        <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end",textAlign:"right"}}>

                                            <ModuleSecondVarients
                                                product={product}
                                                language={props.language}

                                            />
                                            </div>
                                        </>
                                        
                                        <div style={{ display:"flex",flexDirection:"column",alignItems:"flex-end"}}>
                                        {product.coming_soon == "Yes" ? <></> : (
                                        <ArabicModuleDetailShoppingActions
                                            product={product}
                                            language={props.language}
                                        />)}

                                        <ModuleProductDetailSpecification

                                            product={product}
                                            language={props.language}

                                        />
                                        </div>
                                    </div>
                                    <ThumbnailDefault
                                        // thumbnail_images={
                                        //     product.Thumbnail_images
                                        // }
                                        product={product}

                                        language={props.language}

                                    />
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

export default ArabicProductDetailFullwidth;
