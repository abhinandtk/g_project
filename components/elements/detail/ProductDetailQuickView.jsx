import React, { useEffect, useState } from 'react';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import DefaultDescription from '~/components/elements/detail/description/DefaultDescription';
import ModuleProductDetailDescription from '~/components/elements/detail/modules/ModuleProductDetailDescription';
import ModuleDetailShoppingActions from '~/components/elements/detail/modules/ModuleDetailShoppingActions';
import ModuleProductDetailSpecification from '~/components/elements/detail/modules/ModuleProductDetailSpecification';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/ModuleProductDetailSharing';
import ModuleDetailActionsMobile from '~/components/elements/detail/modules/ModuleDetailActionsMobile';
import ModuleDetailTopInformation from '~/components/elements/detail/modules/ModuleDetailTopInformation';
import ModuleVarients from './modules/ModuleVarients';
import ModuleSecondVarients from './modules/ModuleSecondVarients';
import { useDispatch, useSelector } from 'react-redux';
import {
    setProPrimaryVarientId,
    setProSecondaryVarientId,
} from '~/store/datas/action';
import constants from '~/public/static/data/my-constants/Constants';
import Axios from 'axios';
import apis from '~/components/myspace/constants/Api';
import { useLanguageHook } from '~/components/hooks/useLanguageHook';

const ProductDetailQuickView = ({ slug_id, language,product }) => {

    const [secondVarient, setSecondVarient] = useState(null);
    const [success, setSuccess] = useState(false);

    const [productStock, setProductStock] = useState(null);

    const dispatch = useDispatch();
    const prVarientId = useSelector((state) => state.datas.proVarient);
    const [pro, setPro] = useState(null);

    // let pro ;

    // const language = useLanguageHook();



    useEffect(() => {
        Axios.post(apis.productDetail, {
            session_id: constants['sessionId'],
            language: language,
            slug_Id: slug_id,
        })
            .then((res) => {
                setPro(res.data.data.product[0]);

                res.data.data.product[0].Product_Items.map((item, index) => {
                    item.multivarient.length !== 0
                        ? item.multivarient.map((item_, index_) => {
                              if (item_.slug_id === prVarientId) {
                                //   setProductStock(item_.stock);
                                  dispatch(
                                      setProPrimaryVarientId(item.varent_id)
                                  );
                                  dispatch(
                                      setProSecondaryVarientId(item_.slug_id)
                                  );
                                  setSuccess(true);
                              }
                          })
                        : dispatch(setProPrimaryVarientId(item.varent_id)
                        );
                    setSuccess(true);
                });
            })
            .catch((err) => {
                showNotification(language, constants.Error);
            });
    }, []);

    

    return (
        <div className="ps-product--detail ps-product--fullwidth">
            <>
                {success && (
                    <>
                        <>
                            <>
                                <div className="ps-product__header">
                                    <ThumbnailDefault
                                        thumbnail_images={pro.Thumbnail_images}
                                        language={language}
                                    />
                                    <div className="ps-product__info">
                                        <ModuleDetailTopInformation
                                            product={pro}
                                            language={language}
                                        />

                                        <>
                                            <ModuleVarients
                                                product={pro}
                                                language={language}
                                            />
                                            {language === constants.Arabic && (
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'flex-end',
                                                        textAlign: 'right',
                                                    }}>
                                                    <ModuleSecondVarients
                                                        product={pro}
                                                        language={language}
                                                    />
                                                </div>
                                            )}
                                            {language === constants.English && (
                                                <div>
                                                    <ModuleSecondVarients
                                                        product={pro}
                                                        language={language}
                                                    />
                                                </div>
                                            )}
                                        </>

                                        {language === constants.Arabic && (
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                }}>
                                                <ModuleDetailShoppingActions
                                                    // secondVarient={
                                                    //     secondVarient
                                                    // }
                                                    product={pro}
                                                    language={language}
                                                />

                                                <ModuleProductDetailSpecification
                                                    product={pro}
                                                    language={language}
                                                />
                                            </div>
                                        )}

                                        {language === constants.English && (
                                            <div>
                                                <ModuleDetailShoppingActions
                                                    // secondVarient={
                                                    //     secondVarient
                                                    // }
                                                    product={pro}
                                                    language={language}
                                                />

                                                <ModuleProductDetailSpecification
                                                    product={pro}
                                                    language={language}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <DefaultDescription
                                    language={language}
                                    product={pro}
                                    comments={pro.reviews}
                                />
                            </>
                            {/* )
                            })} */}
                        </>
                    </>
                )}
            </>
        </div>
    );
};

export default ProductDetailQuickView;
