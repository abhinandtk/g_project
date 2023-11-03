import React from 'react';
import Rating from '~/components/elements/Rating';
import { useSelector } from 'react-redux';
import { Labels } from '~/public/static/data/my-constants/Labels';
import { useRouter } from 'next/router';
import constants from '~/public/static/data/my-constants/Constants';
import { Rate } from 'antd';

const ModuleDetailTopInformation = ({ product, language }) => {
    const labels = Labels(language);
    let productStock;
    let productNameExtension;

    const prVarientId = useSelector((state) => state.datas.proVarient);
    const Router = useRouter();

    let priceView;

    product.Product_Items.map((item, index) => {
        item.multivarient.length !== 0
            ? item.multivarient.map((item_, index_) => {
                  if (item_.slug_id === prVarientId) {
                      productStock = item_.stock;
                      productNameExtension= ', '+item.values_values+', '+item_.values;
                      if (
                          parseInt(item_.actual_prize) >
                          parseInt(item_.cut_prize)
                      ) {
                          priceView = (
                              <h4 className="ps-product__price sale">
                                  {language === constants.Arabic ? (
                                      <>
                                        <a style={{fontSize:"16px",color:"#666"}}>(شامل ضريبة القيمة المضافة)</a>&nbsp;
                                          ₹
                                          {item_.cut_prize}&nbsp;
                                          <del className="mr-2">
                                              ₹ {item_.actual_prize}
                                          </del>
                                      </>
                                  ) : (
                                      <>
                                          <del className="mr-2">
                                              ₹ {item_.actual_prize}
                                          </del>{' '}
                                          &nbsp; ₹ {item_.cut_prize}&nbsp;<a style={{fontSize:"16px",color:"#666"}}></a>
                                      </>
                                  )}
                              </h4>
                          );
                      } else {
                          priceView = (
                              <h4 className="ps-product__price">
                                  ₹ {item_.cut_prize}&nbsp;<a style={{fontSize:"16px",color:"#666"}}></a>
                              </h4>
                          );
                      }
                  }
              })
            : item.slug_id === prVarientId &&
              (parseInt(item.actual_prize) > parseInt(item.cut_prize)
                  ? (
                    productNameExtension= ', '+item.values_values,
                    productStock=item.stock,
                    priceView = (
                        <h4 className="ps-product__price sale">
                            {language === constants.Arabic ? (
                                <>
                                    <a style={{fontSize:"16px",color:"#666"}}>(شامل ضريبة القيمة المضافة)</a>&nbsp;
                                    ₹ {item.cut_prize}&nbsp;
                                    <del className="mr-2">
                                    ₹ {item.actual_prize}
                                       
                                    </del>
                                </>
                            ) : (
                                <>
                                    <del className="mr-2">
                                        ₹ {item.actual_prize}
                                    </del>{' '}
                                    &nbsp;₹ {item.cut_prize}&nbsp;<a style={{fontSize:"16px",color:"#666"}}></a>
                                </>
                            )}
                        </h4>
                    ))
                  : (productNameExtension= ', '+item.values_values,
                    productStock=item.stock,
                    priceView = (
                        <h4 className="ps-product__price">
                            ₹ {item.cut_prize}&nbsp;<a style={{fontSize:"16px",color:"#666"}}></a>
                        </h4>
                    )));
    });

    if (product.coming_soon == "Yes"){
        priceView=(

            <></>
        )
        
    }

    return (
        <header
            style={{
                textAlign: language === constants.Arabic ? 'right' : 'left',
            }}>
            <h1>
                {language === constants.Arabic
                    ? product.arabic_translator
                    : product.Name} {productNameExtension}
            </h1>
            {language === constants.Arabic ? (
                <>
                    <div
                        className={`ps-product__meta ${
                            language === constants.Arabic &&
                            'ps-product__meta-arabic'
                        }`}>
                        {product.reviews.length !== 0 && (
                            <p>
                                {/* <Rating ratingCount={product.reviews.length} /> */}
                        <Rate disabled allowHalf value={product.average_review} />

                                <span>
                                    ({product.reviews.length} {labels['review']}
                                    )
                                </span>
                            </p>
                        )}

                        <p>
                            <a
                                className="ml-2 text-capitalize"
                                onClick={() => {
                                    Router.push(
                                        `/shop?brand=${product.Product_Brand.slug_brand}`
                                    );
                                }}>
                                {product.Product_Brand.brand}
                            </a>

                            {labels['Brand: ']}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div
                        className={`ps-product__meta ${
                            language === constants.Arabic &&
                            'ps-product__meta-arabic'
                        }`}>
                        <p>
                            {labels['Brand: ']}
                            <a
                                className="ml-2 text-capitalize"
                                onClick={() => {
                                    Router.push(
                                        `/shop?brand=${product.Product_Brand.slug_brand}`
                                    );
                                }}>
                                {product.Product_Brand.brand}
                            </a>
                        </p>
                        {product.reviews.length !== 0 && (
                            <div className="">
                        <Rate disabled allowHalf value={product.average_review} />

                                {/* <Rating ratingCount={product.average_review} /> */}
                                

                                <span>
                                    ({product.reviews.length} {labels['review']}
                                    )
                                </span>
                            </div>
                        )}
                    </div>
                </>
            )}

            {priceView}
            {(productStock == 0|| productStock==null) && product.coming_soon == "No" && (
                <h3 style={{ color: 'red' }}>Out of Stock</h3>
            )}
            {/* {productStock < 6 && productStock != 0 && product.coming_soon == "No" && (
                <p
                    style={{
                        color: 'green',
                        fontWeight: '600',
                        fontSize: '20px',
                    }}>
                    Only {productStock} items left !
                </p>
            )} */}

            {product.coming_soon == "Yes" && 
            (
                <h3 style={{ color: 'red' }}>Coming Soon..</h3>
            )   
            }

        </header>
    );
};

export default ModuleDetailTopInformation;
